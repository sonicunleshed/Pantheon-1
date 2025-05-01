import type { Metadata } from "next"
import LoginForm from "@/components/login-form"

export const metadata: Metadata = {
  title: "Log In | Bright Minds Tutoring",
  description: "Log in to your Bright Minds Tutoring account",
}

export default function LoginPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-md space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight">Welcome Back</h1>
          <p className="mt-2 text-muted-foreground">Log in to access your tutoring sessions and resources</p>
        </div>
        <LoginForm />
      </div>
    </div>
  )
}
