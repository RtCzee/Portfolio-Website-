"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaChevronDown } from "react-icons/fa"

const caseStudies = [
  {
    title: "E-commerce Platform Redesign",
    problem: "The client's existing e-commerce platform had poor user engagement and low conversion rates.",
    solution:
      "We redesigned the user interface, improved the product discovery process, and optimized the checkout flow.",
    outcome: "The redesign resulted in a 40% increase in user engagement and a 25% boost in conversion rates.",
  },
  {
    title: "Mobile App for Fitness Tracking",
    problem: "Users found it difficult to maintain consistent workout routines and track their progress effectively.",
    solution:
      "We developed a mobile app with personalized workout plans, progress tracking, and social features for motivation.",
    outcome:
      "The app gained 100,000 active users within the first three months and maintained a 4.8-star rating on app stores.",
  },
  {
    title: "AI-powered Customer Service Chatbot",
    problem:
      "The client's customer service team was overwhelmed with repetitive inquiries, leading to long response times.",
    solution:
      "We implemented an AI-powered chatbot to handle common customer queries and streamline the support process.",
    outcome:
      "The chatbot reduced customer service workload by 60% and improved average response time from 2 hours to 10 minutes.",
  },
]

const CaseStudyCard = ({ caseStudy }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      className="bg-card rounded-lg shadow-md overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="p-6 cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">{caseStudy.title}</h3>
          <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
            <FaChevronDown className="text-xl" />
          </motion.div>
        </div>
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Problem:</h4>
                  <p className="text-muted-foreground">{caseStudy.problem}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Solution:</h4>
                  <p className="text-muted-foreground">{caseStudy.solution}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Outcome:</h4>
                  <p className="text-muted-foreground">{caseStudy.outcome}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

const CaseStudiesSection = () => {
  return (
    <section id="case-studies" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Case Studies
        </motion.h2>
        <div className="space-y-8">
          {caseStudies.map((caseStudy, index) => (
            <CaseStudyCard key={index} caseStudy={caseStudy} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default CaseStudiesSection

