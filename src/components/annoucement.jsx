"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function AnnouncementSlider() {
  const announcements = [
    { id: 1, text: "No return or change on sale items" },
    { id: 2, text: "Delivery all over Pakistan" },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto rotate through announcements
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % announcements.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [announcements.length])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? announcements.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % announcements.length)
  }

  return (
    <div className="bg-primary text-primary-foreground py-1.5 -mx-4 sm:-mx-[5vw] md:-mx-[7vw] lg:-mx-[9vw]">
      <div className="flex items-center justify-center">
        <button
          onClick={goToPrevious}
          className="p-1 focus:outline-none focus:ring-2 focus:ring-primary-foreground"
          aria-label="Previous announcement"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        <div className="overflow-hidden mx-2 flex-1">
          <div className="flex justify-center items-center h-6 relative">
            {announcements.map((announcement, index) => (
              <div
                key={announcement.id}
                className={`absolute w-full text-center transition-all duration-500 ease-in-out ${
                  index === currentIndex ? "opacity-100 transform translate-y-0" : "opacity-0 transform -translate-y-8"
                }`}
              >
                <p className="text-sm font-medium">{announcement.text}</p>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={goToNext}
          className="p-1 focus:outline-none focus:ring-2 focus:ring-primary-foreground"
          aria-label="Next announcement"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}

