"use client"

import { motion } from "framer-motion"
import { FaReact, FaJava, FaPython, FaGithub, FaFigma } from "react-icons/fa"
import { SiTailwindcss, SiTypescript, SiSupabase } from "react-icons/si"
import { Zap } from "lucide-react"

const skills = [
  { name: "React", icon: FaReact, description: "Building interactive UIs" },
  { name: "Java", icon: FaJava, description: "Backend development" },
  { name: "Python", icon: FaPython, description: "Data analysis and scripting" },
  { name: "GSAP", icon: Zap, description: "Advanced animations" },
  { name: "Tailwind CSS", icon: SiTailwindcss, description: "Rapid UI development" },
  { name: "GitHub", icon: FaGithub, description: "Version control and collaboration" },
  { name: "Figma", icon: FaFigma, description: "UI/UX design" },
  { name: "TypeScript", icon: SiTypescript, description: "Type-safe JavaScript development" },
  { name: "Supabase", icon: SiSupabase, description: "Backend-as-a-Service for my projects" },
]

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Skills & Tech Stack
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="w-20 h-20 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-3xl mb-4"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                <skill.icon />
              </motion.div>
              <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
              <p className="text-sm text-muted-foreground text-center">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection

