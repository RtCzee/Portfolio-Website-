"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const certifications = [
  {
    name: "Carreer Essentials in System Administration by microsoft Linkedin",
    issuer: "Microsoft and LinkedIn Learning",
    date: "July 2024",
    image: "/SYS admin Cert.jpg",
  }
]

const CertificationCard = ({ certification }) => {
  return (
    <motion.div
      className="bg-card rounded-lg shadow-md overflow-hidden"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <Image
        src={certification.image || "/placeholder.svg"}
        alt={certification.name}
        width={300}
        height={200}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{certification.name}</h3>
        <p className="text-sm text-muted-foreground mb-1">{certification.issuer}</p>
        <p className="text-sm text-muted-foreground">{certification.date}</p>
      </div>
    </motion.div>
  )
}

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Certifications & Achievements
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((certification, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <CertificationCard certification={certification} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CertificationsSection

