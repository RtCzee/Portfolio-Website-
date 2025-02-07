"use client"

import { motion } from "framer-motion"
import { FaGamepad, FaSkating, FaCode, FaMusic } from "react-icons/fa"

const hobbies = [
  { name: "Esports Gaming", icon: FaGamepad, description: "Competitive gaming in various esports titles" },
  { name: "Ice Skating", icon: FaSkating, description: "Gliding on ice and performing figure skating moves" },
  {
    name: "Coding Projects",
    icon: FaCode,
    description: "Working on personal coding projects and learning new technologies",
  },
  {
    name: "Music Production",
    icon: FaMusic,
    description: "Creating electronic music and experimenting with sound design",
  },
]

const HobbiesSection = () => {
  return (
    <section id="hobbies" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Hobbies & Interests
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={index}
              className="bg-card rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="p-6">
                <motion.div
                  className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <hobby.icon className="text-3xl text-primary-foreground" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-2 text-center">{hobby.name}</h3>
                <p className="text-muted-foreground text-center">{hobby.description}</p>
              </div>
              <motion.div
                className="bg-primary h-1"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HobbiesSection

