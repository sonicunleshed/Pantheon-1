import type { Metadata } from "next"
import ForgotPasswordForm from "@/components/forgot-password-form"

export const metadata: Metadata = {
  title: "Forgot Password | Bright Minds Tutoring",
  description: "Reset your Bright Minds Tutoring account password",
}

export default function ForgotPasswordPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-md space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight">Forgot Password</h1>
          <p className="mt-2 text-muted-foreground">Enter your email to receive a password reset link</p>
        </div>
        <ForgotPasswordForm />
      </div>
    </div>
  )
}
