import type { Metadata } from "next"
import SignupForm from "@/components/signup-form"

export const metadata: Metadata = {
  title: "Sign Up | Bright Minds Tutoring",
  description: "Create an account to book tutoring sessions and access personalized resources",
}

export default function SignupPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-md space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight">Create an Account</h1>
          <p className="mt-2 text-muted-foreground">
            Sign up to book tutoring sessions and access personalized resources
          </p>
        </div>
        <SignupForm />
      </div>
    </div>
  )
}
