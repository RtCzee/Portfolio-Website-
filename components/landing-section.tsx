"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNode,
  FaAndroid,
  FaAngular,
  FaGitAlt,
  FaJava,
  FaLinux,
  FaPython,
  FaVuejs,
} from "react-icons/fa"
import { SiTypescript, SiMongodb, SiPhp } from "react-icons/si"

const LandingSection = () => {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, 100])
  const y2 = useTransform(scrollY, [0, 300], [0, -100])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  const icons = [
    { Icon: FaHtml5, color: "#E34F26" },
    { Icon: FaCss3Alt, color: "#1572B6" },
    { Icon: FaJs, color: "#F7DF1E" },
    { Icon: FaReact, color: "#61DAFB" },
    { Icon: FaNode, color: "#339933" },
    { Icon: SiTypescript, color: "#3178C6" },
    { Icon: FaAndroid, color: "#3DDC84" },
    { Icon: FaAngular, color: "#DD0031" },
    { Icon: FaGitAlt, color: "#F05032" },
    { Icon: FaJava, color: "#007396" },
    { Icon: FaLinux, color: "#FCC624" },
    { Icon: SiMongodb, color: "#47A248" },
    { Icon: SiPhp, color: "#777BB4" },
    { Icon: FaPython, color: "#3776AB" },
    { Icon: FaVuejs, color: "#4FC08D" },
  ]

  // Duplicate the icons array to have more floating icons
  const extendedIcons = [...icons, ...icons, ...icons]

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          y: y1,
        }}
      />
      <div className="container mx-auto px-4 z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/DidintleMokgoro.jpg"
            alt="My Name"
            width={200}
            height={200}
            className="rounded-full mx-auto mb-8"
          />
          <h1 className="text-4xl md:text-6xl font-bold mb-4 typing-animation">Didintle Mokgoro</h1>
          <p className="text-xl md:text-2xl mb-8 typing-animation" style={{ animationDelay: "3s" }}>
            Software Engineer  | Web Designer | Cyber Security Enthusiast
          </p>
          <motion.a
            href="#about"
            className="bg-primary text-primary-foreground px-8 py-3 rounded-full text-lg font-semibold hover:bg-primary/80 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            Explore My Work
          </motion.a>
        </motion.div>
      </div>
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        style={{ opacity }}
      >
        <p className="text-sm font-medium mb-2">Scroll to Explore</p>
        <motion.div
          className="w-6 h-10 border-2 border-current rounded-full p-1"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
        >
          <div className="w-full h-3 bg-current rounded-full" />
        </motion.div>
      </motion.div>
      {extendedIcons.map((icon, index) => (
        <FloatingIcon
          key={index}
          Icon={icon.Icon}
          color={icon.color}
          top={`${Math.random() * 100}%`}
          left={`${Math.random() * 100}%`}
          delay={index * 0.05}
        />
      ))}
    </section>
  )
}

const FloatingIcon = ({ Icon, top, left, delay, color }) => (
  <motion.div
    className="absolute text-4xl"
    style={{ top, left, color }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.8 }}
  >
    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, delay: Math.random() }}
    >
      <Icon />
    </motion.div>
  </motion.div>
)

export default LandingSection

