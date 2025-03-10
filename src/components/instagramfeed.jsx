"use client"

import { useEffect, useCallback, useRef, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"

// Instagram icon for the header
const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
)

export default function InstagramFeed() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    skipSnaps: false,
  })
  const autoplayRef = useRef(null)
  const [instagramLoaded, setInstagramLoaded] = useState(false)
  const AUTOPLAY_INTERVAL = 3000 // 3 seconds
  const [selectedIndex, setSelectedIndex] = useState(0)

  // Add your Instagram post URLs here - FIXED FORMAT FOR REELS
  const instagramPosts = [
    {
      id: 1,
      url: "https://www.instagram.com/reel/DA_X5jugt08/",
      embedUrl: "https://www.instagram.com/reel/DA_X5jugt08/embed/",
    },
    {
      id: 2,
      url: "https://www.instagram.com/reel/DA_X5jugt08/",
      embedUrl: "https://www.instagram.com/reel/DA_X5jugt08/embed/",
    },
    {
      id: 3,
      url: "https://www.instagram.com/reel/DA_X5jugt08/",
      embedUrl: "https://www.instagram.com/reel/DA_X5jugt08/embed/",
    },
    {
      id: 4,
      url: "https://www.instagram.com/p/CxKxH8ZIhRr/",
      embedUrl: "https://www.instagram.com/p/CxKxH8ZIhRr/embed/",
    },
    {
      id: 5,
      url: "https://www.instagram.com/p/CxKxH8ZIhRr/",
      embedUrl: "https://www.instagram.com/p/CxKxH8ZIhRr/embed/",
    },
  ]

  const resetAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      clearTimeout(autoplayRef.current)
    }
    autoplayRef.current = setTimeout(() => {
      if (emblaApi && !emblaApi.internalEngine().animation.isStopped) {
        emblaApi.scrollNext()
        resetAutoplay()
      }
    }, AUTOPLAY_INTERVAL)
  }, [emblaApi])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
    resetAutoplay()
  }, [emblaApi, resetAutoplay])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
    resetAutoplay()
  }, [emblaApi, resetAutoplay])

  useEffect(() => {
    if (!emblaApi) return
    resetAutoplay()
    return () => {
      if (autoplayRef.current) clearTimeout(autoplayRef.current)
    }
  }, [emblaApi, resetAutoplay])

  // Load Instagram embed script
  useEffect(() => {
    // Remove any existing script first
    const existingScript = document.getElementById("instagram-embed-script")
    if (existingScript) {
      document.body.removeChild(existingScript)
    }

    // Create and add the script
    const script = document.createElement("script")
    script.id = "instagram-embed-script"
    script.src = "https://www.instagram.com/embed.js"
    script.async = true
    script.onload = () => {
      // When script loads, process embeds
      if (window.instgrm) {
        window.instgrm.Embeds.process()
        setInstagramLoaded(true)
      }
    }
    document.body.appendChild(script)

    return () => {
      const scriptToRemove = document.getElementById("instagram-embed-script")
      if (scriptToRemove) {
        document.body.removeChild(scriptToRemove)
      }
    }
  }, [])

  // Process Instagram embeds when slides change
  useEffect(() => {
    if (instagramLoaded && window.instgrm) {
      window.instgrm.Embeds.process()
    }
  }, [selectedIndex, instagramLoaded])

  // Track current slide

  useEffect(() => {
    if (!emblaApi) return

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
    }

    emblaApi.on("select", onSelect)
    onSelect() // Initial call

    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi])

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-6">FOLLOW US ON INSTAGRAM</h2>
        <div className="flex justify-center items-center gap-8 mb-8">
          <a
            href="https://instagram.com/bonanzaofficial"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-lg hover:text-pink-500 transition-colors"
          >
            <InstagramIcon />
            @bonanzaofficial
          </a>
          <a
            href="https://instagram.com/bonanzasatrangibeauty"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-lg hover:text-pink-500 transition-colors"
          >
            <InstagramIcon />
            @bonanzasatrangibeauty
          </a>
        </div>
      </div>

      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {instagramPosts.map((post) => (
              <div
                key={post.id}
                className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] md:flex-[0_0_33.33%] lg:flex-[0_0_25%] xl:flex-[0_0_20%] pl-4"
              >
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-white">
                  <iframe
                    src={post.embedUrl}
                    className="absolute inset-0 w-full h-full"
                    frameBorder="0"
                    scrolling="no"
                    allowTransparency="true"
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={scrollPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-50 rounded-full p-2 shadow-md z-10 -ml-3 border border-gray-100"
          aria-label="Previous slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <button
          onClick={scrollNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-50 rounded-full p-2 shadow-md z-10 -mr-3 border border-gray-100"
          aria-label="Next slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
  )
}

