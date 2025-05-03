import type React from "react"
import { cn } from "@/lib/utils"
import type { ComponentPropsWithoutRef } from "react"

interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
  className?: string
  reverse?: boolean
  pauseOnHover?: boolean
  children: React.ReactNode
  vertical?: boolean
  repeat?: number
}

function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className,
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
              "animate-marquee flex-row": !vertical,
              "animate-marquee-vertical flex-col": vertical,
              "group-hover:[animation-play-state:paused]": pauseOnHover,
              "[animation-direction:reverse]": reverse,
            })}
          >
            {children}
          </div>
        ))}
    </div>
  )
}

// Sample reviews data
const reviews = [
  {
    name: "Alex Thompson",
    username: "High School Senior",
    body: "My SAT score improved by 250 points after just 3 months of tutoring. My tutor was patient, knowledgeable, and made learning enjoyable.",
    img: "https://avatar.vercel.sh/alex",
  },
  {
    name: "Sophia Chen",
    username: "AP Calculus Student",
    body: "I was struggling with AP Calculus until I found Pantheon. My tutor helped me understand complex concepts and I ended up scoring a 5 on the exam!",
    img: "https://avatar.vercel.sh/sophia",
  },
  {
    name: "Marcus Williams",
    username: "College Applicant",
    body: "The college counseling services were invaluable. My counselor helped me craft compelling essays and prepare for interviews. I got into my dream school!",
    img: "https://avatar.vercel.sh/marcus",
  },
  {
    name: "Emma Rodriguez",
    username: "High School Junior",
    body: "The study skills coaching transformed my approach to learning. I'm now more organized, focused, and my grades have improved across all subjects.",
    img: "https://avatar.vercel.sh/emma",
  },
  {
    name: "David Kim",
    username: "STEM Student",
    body: "My physics tutor made complex concepts easy to understand with real-world examples and interactive demonstrations. I now love a subject I used to dread!",
    img: "https://avatar.vercel.sh/david",
  },
  {
    name: "Olivia Johnson",
    username: "SAT Student",
    body: "I increased my SAT score by 320 points! The strategies I learned were game-changers. I'm now applying to colleges I never thought possible.",
    img: "https://avatar.vercel.sh/olivia",
  },
]

const firstRow = reviews.slice(0, reviews.length / 2)
const secondRow = reviews.slice(reviews.length / 2)

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string
  name: string
  username: string
  body: string
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4 mx-2",
        // light styles
        "border-[#556b2f]/[.3] bg-white hover:bg-gray-50",
        // dark styles
        "dark:border-[#e0e4d0]/[.2] dark:bg-[#e0e4d0]/[.05] dark:hover:bg-[#e0e4d0]/[.1]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img || "/placeholder.svg"} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-[#3d4d21] dark:text-white">{name}</figcaption>
          <p className="text-xs font-medium text-[#556b2f] dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-[#3d4d21]">{body}</blockquote>
    </figure>
  )
}

export default function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:30s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:30s] mt-4">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-gray-50"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-gray-50"></div>
    </div>
  )
}
