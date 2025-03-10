"use client"
import { FaWhatsapp } from "react-icons/fa"

const WhatsAppButton = ({ phoneNumber = "1234567890", message = "Hello! I have a question about your products." }) => {
  const handleClick = () => {
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message)
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${+923314034851}?text=${encodedMessage}`
    // Open in new tab
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div
      className="fixed bottom-6 right-10 z-50 bg-green-500 rounded-full p-3 shadow-lg cursor-pointer hover:bg-green-600 transition-all duration-300 animate-bounce"
      onClick={handleClick}
      title="Chat with us on WhatsApp"
    >
      <FaWhatsapp className="text-white text-3xl" />
    </div>
  )
}

export default WhatsAppButton

