"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa"

const testimonials = [
  {
    name: "Boss Mbuyamba",
    company: "Eluceat",
    testimonial:
      "The attention to detail and creative problem-solving skills of this developer are truly impressive. I highly recommend their services.",
  },
  {
    name: "Lukhona Ntamo",
    company: "Eluceat",
    testimonial:
      "he is the best lead developer I have ever worked with. His ability to understand the project requirements and deliver high-quality work is unmatched.",
  },
  {
    name: "Franceska Mokgoro",
    company: "Employee wellness specialist at Joburg market",
    testimonial:
      "This gentlemen has a passion for what he does and it shows in his work. He is a great team player and always willing to go the extra mile.",
  },
]

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const nextTestimonial = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1 === testimonials.length ? 0 : prevIndex + 1))
  }

  const prevTestimonial = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 < 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial()
    }, 5000)
    return () => clearInterval(interval)
  }, [nextTestimonial]) // Added nextTestimonial to dependencies

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  return (
    <section id="testimonials" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Testimonials
        </motion.h2>
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="bg-card rounded-lg shadow-lg p-8 absolute w-full"
            >
              <FaQuoteLeft className="text-4xl text-primary mb-4" />
              <p className="text-lg mb-4">{testimonials[currentIndex].testimonial}</p>
              <div>
                <p className="font-semibold">{testimonials[currentIndex].name}</p>
                <p className="text-sm text-muted-foreground">{testimonials[currentIndex].company}</p>
              </div>
            </motion.div>
          </AnimatePresence>
          <button
            onClick={prevTestimonial}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-full bg-primary text-primary-foreground p-2 rounded-full"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-full bg-primary text-primary-foreground p-2 rounded-full"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection

