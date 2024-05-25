import { signIn } from "@/auth"
import Link from "next/link"
 
export function SignIn() {
  return (
    <Link href="/auth/login">
      <button className="">Sign in</button>
    </Link>
  )
}