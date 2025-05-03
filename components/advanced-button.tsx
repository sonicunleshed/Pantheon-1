import React from "react"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

type ButtonVariant = "interactive" | "pulsating" | "combined"

interface AdvancedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string
  icon?: React.ReactNode
  variant?: ButtonVariant
  pulseColor?: string
  duration?: string
}

export const AdvancedButton = React.forwardRef<HTMLButtonElement, AdvancedButtonProps>(
  (
    {
      children,
      className,
      href,
      icon = <ArrowRight />,
      variant = "interactive",
      pulseColor = "rgba(85, 107, 47, 0.3)",
      duration = "1.5s",
      ...props
    },
    ref,
  ) => {
    const InteractiveContent = () => (
      <>
        <div className="flex items-center justify-center gap-2">
          <div className="h-2 w-2 rounded-full bg-primary transition-all duration-300 group-hover:scale-[100.8]"></div>
          <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
            {children}
          </span>
        </div>
        <div className="absolute top-0 left-0 z-10 flex h-full w-full items-center justify-center gap-2 text-primary-foreground opacity-0 transition-all duration-300 group-hover:opacity-100">
          <span className="transform transition-all duration-300 group-hover:translate-x-0 translate-x-12">
            {children}
          </span>
          {icon}
        </div>
      </>
    )

    const PulsatingContent = () => (
      <>
        <div className="flex items-center justify-center">
          <span className="relative z-10">{children}</span>
        </div>
        <span
          className="absolute inset-0 rounded-full animate-pulse-ring"
          style={{
            backgroundColor: pulseColor,
            animationDuration: duration,
          }}
        ></span>
      </>
    )

    const CombinedContent = () => (
      <>
        <div className="flex items-center justify-center gap-2">
          <div className="h-2 w-2 rounded-full bg-primary transition-all duration-300 group-hover:scale-[100.8]"></div>
          <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
            {children}
          </span>
        </div>
        <div className="absolute top-0 left-0 z-10 flex h-full w-full items-center justify-center gap-2 text-primary-foreground opacity-0 transition-all duration-300 group-hover:opacity-100">
          <span className="transform transition-all duration-300 group-hover:translate-x-0 translate-x-12">
            {children}
          </span>
          {icon}
        </div>
        <span
          className="absolute inset-0 rounded-full animate-pulse-ring"
          style={{
            backgroundColor: pulseColor,
            animationDuration: duration,
          }}
        ></span>
      </>
    )

    const getContent = () => {
      switch (variant) {
        case "interactive":
          return <InteractiveContent />
        case "pulsating":
          return <PulsatingContent />
        case "combined":
          return <CombinedContent />
        default:
          return <InteractiveContent />
      }
    }

    const baseClasses = cn(
      "relative group cursor-pointer overflow-hidden rounded-full border bg-background p-2 px-6 text-center font-semibold flex items-center justify-center inline-flex",
      className,
    )

    const buttonStyle =
      variant === "pulsating" || variant === "combined"
        ? ({
            "--pulse-color": pulseColor,
            "--duration": duration,
          } as React.CSSProperties)
        : {}

    if (href) {
      return (
        <a href={href} className={baseClasses} style={buttonStyle}>
          {getContent()}
        </a>
      )
    }

    return (
      <button ref={ref} className={baseClasses} style={buttonStyle} {...props}>
        {getContent()}
      </button>
    )
  },
)

AdvancedButton.displayName = "AdvancedButton"
