"use client"

import { motion } from "framer-motion"
import { FaGraduationCap, FaBriefcase, FaTrophy } from "react-icons/fa"
import Image from "next/image"

const timelineEvents = [
  {
    year: "2023",
    title: "Harvard CS50",
    description: "Completed the Introduction to Computer Science course",
    icon: FaGraduationCap,
  },
  {
    year: "2024",
    title: "ECOYouth Connect",
    description: "Founded a non-profit organization for environmental awareness for a school project",
    icon: FaBriefcase
  },
  {
    year: "2021",
    title: "Eluceat",
    description: "Co-Founder and lead developer of the software development team ",
    icon: FaBriefcase,
  }
]

const hobbies = ["Esports gaming", "Ice skating", "coding", "Marching bad"]

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center mb-8">
              <Image
                src="/DidintleMokgoro.jpg"
                alt="Professional Headshot"
                width={150}
                height={150}
                className="rounded-full mr-8"
              />
              <div>
                <h3 className="text-2xl font-semibold mb-2">Didintle Mokgoro</h3>
                <p className="text-lg mb-2">Age: 20</p>
                <p className="text-muted-foreground">
                Hi, I'm Didintle Mokgoro, a passionate Web Developer and Software Engineer dedicated to building clean, modern, and responsive websites. I specialize in front-end development with expertise in React, Next.js, Tailwind CSS, and GSAP animations.
                Beyond web development, I have a strong background in software engineering, system administration, and cybersecurity. I’m also the founder of Eluceat, where we provide web development, hosting, and SEO services.
                I'm always learning and improving my skills—whether it’s developing interactive web experiences, optimizing website performance, or leading tech-driven projects.
                </p>
              </div>
            </div>
            <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
            <div className="space-y-8">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                    <event.icon className="text-xl" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-muted-foreground">{event.year}</p>
                    <h4 className="text-lg font-semibold">{event.title}</h4>
                    <p className="text-muted-foreground">{event.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-6">Hobbies & Interests</h3>
            <div className="grid grid-cols-2 gap-4">
              {hobbies.map((hobby, index) => (
                <motion.div
                  key={index}
                  className="p-4 bg-card rounded-lg shadow-md"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <p className="text-card-foreground">{hobby}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection

