"use client"
import Image from "next/image"
import Link from "next/link"

interface CompetitionCardProps {
  title: string
  image: string
  qualifications: string
  candidateType: string
  competitionType: string
  timeFrame: string
  bgColor?: string
  textColor?: string
}

export const CompetitionCard = ({
  title,
  image,
  qualifications,
  candidateType,
  competitionType,
  timeFrame,
  bgColor = "bg-[#f5f5f0]",
  textColor = "text-[#2a9d8f]",
}: CompetitionCardProps) => {
  return (
    <div className={`${bgColor} rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300`}>
      <div className="grid grid-cols-2 h-full">
        <div className="relative">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            width={300}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>
        <div className={`p-6 flex flex-col justify-center ${textColor}`}>
          <h3 className="text-3xl font-bold mb-4 uppercase">{title}</h3>

          <div className="space-y-3 text-sm">
            <div>
              <p className="uppercase font-semibold">QUALIFICATIONS</p>
              <p>{qualifications}</p>
            </div>

            <div>
              <p className="uppercase font-semibold">CANDIDATE</p>
              <p>{candidateType}</p>
            </div>

            <div>
              <p className="uppercase font-semibold">TYPE</p>
              <p>{competitionType}</p>
            </div>

            <div>
              <p className="uppercase font-semibold">TIME FRAME</p>
              <p>{timeFrame}</p>
            </div>
          </div>

          <Link
            href="/contact"
            className="mt-6 inline-flex items-center justify-center px-4 py-2 bg-[#7DDBA3] text-white font-medium rounded-md hover:bg-[#57c99b] transition-all duration-300"
          >
            Book a Consultation
          </Link>
        </div>
      </div>
    </div>
  )
}

export const CompetitionCategorySection = ({ title, description, competitions }) => {
  return (
    <section className="py-16 bg-[#f5f5f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-[#2a9d8f]">{title}</h2>
          <p className="text-lg text-[#2a9d8f] max-w-3xl mx-auto">{description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {competitions.map((competition, index) => (
            <CompetitionCard key={index} {...competition} />
          ))}
        </div>
      </div>
    </section>
  )
}
