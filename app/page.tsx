import Navbar from "@/components/navbar"
import LandingSection from "@/components/landing-section"
import AboutSection from "@/components/about-section"
import SkillsSection from "@/components/skills-section"
import ProjectsSection from "@/components/projects-section"
import CertificationsSection from "@/components/certifications-section"
import CaseStudiesSection from "@/components/case-studies-section"
import TestimonialsSection from "@/components/testimonials-section"
import HobbiesSection from "@/components/hobbies-section"
import ChatbotSection from "@/components/chatbot-section"
import ContactSection from "@/components/contact-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <LandingSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <CertificationsSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <HobbiesSection />
      <ChatbotSection />
      <ContactSection />
    </main>
  )
}

