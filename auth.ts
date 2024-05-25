import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { z } from "zod";

// Function to get user by email
async function getUser(email:string) {
  const user = await prisma.user.findUnique({
    where: { email },
  });
  return user;
}

// Main NextAuth configuration
export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  adapter: PrismaAdapter(prisma),
  providers: [
    Credentials({
      async authorize(credentials) {
        // Validate the credentials format
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          console.log(`Attempting to authorize user: ${email}`);

          // Get user from the database
          const user = await getUser(email);
          if (!user) {
            console.log("No user found with that email");
            return null;
          }

          // Compare provided password with stored password
          const passwordsMatch = await bcrypt.compare(password, user.password);
          if (passwordsMatch) {
            console.log("User authorized successfully");
            return user;
          } else {
            console.log("Password does not match");
          }
        } else {
          console.log("Invalid credentials format");
        }
        console.log("Invalid credentials");
        return null;
      },
    })
  ],
  pages: {
    signIn: '/auth/login',
    signOut: '/auth/signout',
    error: '/auth/error', // Error code passed in query string as ?error=
    verifyRequest: '/auth/verify-request', // (used for check email message)
    newUser: "/auth/register"
  }
});
