"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaGithub, FaExternalLinkAlt, FaPlay, FaPause } from "react-icons/fa"

const projects = [
  {
    title: "Eluceat Startup",
    description: "This is the tech startup me and my friends have founded",
    videoSrc: "/Eluceat Preview.mp4",
    github: "https://github.com/RtCzee/Eluceat.git",
    demo: "https://eluceat.com",
    details: {
      overview: "The Eluceat startup is a software development company that me and my friends founded where we make websites and mobile applications for clients.",
      features: ["Dynamic animations with Gsap", "Professional and Responsive design", "SEO-Optimized & Fast Performance"],
      challenges: "During the development of Eluceat the problems we have faced are properly intregrating the animations and making the website responsive.",
      solutions: "To overcome these challenges we have used Gsap for animations and CSS for responsiveness.",
    },
  },
  {
    title: "Taskmaster",
    description: "A To-Do list application to manage your tasks",
    videoSrc: "/project2-demo.mp4",
    github: "https://github.com/RtCzee/TaskMaster-",
    demo: "https://project2-demo.com",
    details: {
      overview: "Task master is a webapplication designed to add and manage your tasks. It has a simple and clean user interface wiht a backend intergration .",
      features: ["Task management", "Backend intergration with Supabase", "Mobile-Friendly & Responsive Design"],
      challenges: "The main challenges we encountered in this project was intergrating the backend and haveing seemless functionality with the frontend.",
      solutions: "To overcome these challenges we have used Supabase for backend intergration and React for frontend functionality.",
    },
  },
  // Add more projects as needed
]

const ProjectCard = ({ project, onClick }) => {
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const toggleVideo = () => {
    if (videoRef.current.paused) {
      videoRef.current.play()
      setIsPlaying(true)
    } else {
      videoRef.current.pause()
      setIsPlaying(false)
    }
  }

  return (
    <motion.div
      className="bg-card rounded-lg shadow-md overflow-hidden cursor-pointer"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      onClick={() => onClick(project)}
    >
      <div className="relative">
        <video ref={videoRef} src={project.videoSrc} className="w-full h-48 object-cover" loop muted />
        <button
          className="absolute bottom-2 right-2 bg-primary text-primary-foreground p-2 rounded-full"
          onClick={(e) => {
            e.stopPropagation()
            toggleVideo()
          }}
        >
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-muted-foreground mb-4">{project.description}</p>
        <div className="flex justify-between">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <FaGithub className="text-2xl" />
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <FaExternalLinkAlt className="text-2xl" />
          </a>
        </div>
      </div>
    </motion.div>
  )
}

const ProjectDetails = ({ project, onClose }) => {
  return (
    <motion.div
      className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-card rounded-lg shadow-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
      >
        <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
        <video src={project.videoSrc} className="w-full mb-4 rounded-lg" controls />
        <h3 className="text-xl font-semibold mb-2">Overview</h3>
        <p className="text-muted-foreground mb-4">{project.details.overview}</p>
        <h3 className="text-xl font-semibold mb-2">Features</h3>
        <ul className="list-disc list-inside mb-4">
          {project.details.features.map((feature, index) => (
            <li key={index} className="text-muted-foreground">
              {feature}
            </li>
          ))}
        </ul>
        <h3 className="text-xl font-semibold mb-2">Challenges</h3>
        <p className="text-muted-foreground mb-4">{project.details.challenges}</p>
        <h3 className="text-xl font-semibold mb-2">Solutions</h3>
        <p className="text-muted-foreground mb-4">{project.details.solutions}</p>
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/80 transition-colors"
          >
            Close
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
}

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Projects Showcase
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectCard project={project} onClick={setSelectedProject} />
            </motion.div>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {selectedProject && <ProjectDetails project={selectedProject} onClose={() => setSelectedProject(null)} />}
      </AnimatePresence>
    </section>
  )
}

export default ProjectsSection

