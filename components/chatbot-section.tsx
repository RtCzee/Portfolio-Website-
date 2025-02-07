"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const ChatbotSection = () => {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState("")

  const handleSendMessage = async (e) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage = { text: input, sender: "user" }
    setMessages([...messages, userMessage])
    setInput("")

    // Here you would typically send the user's message to your AI backend
    // and get a response. For this example, we'll use a mock response.
    const botMessage = { text: `You asked: "${input}". This is a mock response.`, sender: "bot" }
    setTimeout(() => {
      setMessages((prevMessages) => [...prevMessages, botMessage])
    }, 1000)
  }

  return (
    <section id="chatbot" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Ask Me Anything
        </motion.h2>
        <div className="max-w-2xl mx-auto bg-card rounded-lg shadow-lg overflow-hidden">
          <div className="h-96 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-xs p-3 rounded-lg ${
                    message.sender === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>
          <form onSubmit={handleSendMessage} className="p-4 border-t">
            <div className="flex space-x-2">
              <Input
                type="text"
                placeholder="Ask a question..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-grow"
              />
              <Button type="submit">Send</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ChatbotSection

