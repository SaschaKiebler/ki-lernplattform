import type { NextAuthConfig } from "next-auth";


export const authConfig = {
    pages: {
        signIn: '/auth/login',
        newUser: '/auth/register',
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
          const isLoggedIn = !!auth?.user;
          const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
          const isOnChat = nextUrl.pathname.startsWith('/chat');
          const isOnCourses = nextUrl.pathname.startsWith('/courses');
          const isOnProgress = nextUrl.pathname.startsWith('/progress');
          const isOnSettings = nextUrl.pathname.startsWith('/settings');
          const isOnQuiz = nextUrl.pathname.startsWith('/quiz');

          if (isOnDashboard||isOnChat||isOnCourses||isOnProgress||isOnSettings||isOnQuiz) {
            if (isLoggedIn) return true;
            return false; // Redirect unauthenticated users to login page
          } else if (isLoggedIn) {
            return Response.redirect(new URL('/dashboard', nextUrl));
          }
          return true;
        }
      },
      providers: []
} satisfies NextAuthConfig;