"use client"

import { NoiseOverlay } from "@/components/noise-overlay"
import { BrutalistNav } from "@/components/brutalist-nav"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { EducationSection } from "@/components/education-section"
import { ContactSection } from "@/components/contact-section"
import { BrutalistFooter } from "@/components/brutalist-footer"

const resumeData = {
  name: "Abhi S",
  title: "Aspiring Software Engineer",
  tagline: "Building innovative solutions with data-driven approaches",
  about:
    "Passionate and motivated university student dedicated to pursuing a career in data engineering. Committed to problem-solving and leveraging data-driven solutions to tackle real-world challenges. Eager to apply technical skills and analytical mindset in seeking meaningful insights and innovations in the engineering field.",
  skills: [
    { name: "Web Development (HTML, CSS, JavaScript)", level: 85 },
    { name: "C Programming", level: 80 },
    { name: "Java Programming", level: 75 },
    { name: "Python Programming", level: 85 },
    { name: "SQL DBMS", level: 80 },
  ],
  experience: [
    {
      company: "Self-Directed Projects",
      position: "Software Developer",
      period: "2023 - Present",
      description:
        "Developed multiple projects leveraging various technologies to solve real-world problems and enhance technical skills.",
      technologies: ["Python", "Django", "Machine Learning", "PyQt5"],
    },
  ],
  projects: [
    {
      title: "Intelligent Task Scheduler",
      period: "12/2024-01/2025",
      description:
        "A Java-based desktop productivity app integrating JavaFX and Spring Boot. Features include full task CRUD, AI-powered task prioritization, an analytics dashboard, and cloud-sync capabilities.",
      technologies: ["Java", "JavaFX", "Spring Boot", "H2 Database", "AI/ML"],
      github: "https://github.com/Abhishankar-2004",
      image: "/images/intelligent-task-scheduler.png",
    },
    {
      title: "Online Voting System",
      period: "10/2024-11/2024",
      description:
        "Online Voting System designed to streamline elections with transparency and ease of use. Developed a decentralized and secure platform using Django.",
      technologies: ["Django", "Python", "HTML/CSS", "JavaScript"],
      github: "https://github.com/Abhishankar-2004",
      image: "/images/online-voting-system.png",
    },
    {
      title: "Deceptive Content Detection",
      period: "08/2024-09/2024",
      description:
        "A web application that uses machine learning to identify potentially deceptive social media profiles based on various features.",
      technologies: ["Machine Learning", "Python", "Web Development"],
      github: "https://github.com/Abhishankar-2004",
      image: "/images/deceptive-content-detection.png",
    },
    {
      title: "Gove Browser",
      period: "07/2024-11/2024",
      description:
        "Customized web browser application with tab management, bookmarks, history tracking, and a secure login system with hashed password verification.",
      technologies: ["PyQt5", "Python", "UI/UX Design"],
      github: "https://github.com/Abhishankar-2004",
      image: "/images/gove-browser.png",
    },
    {
      title: "Line Following Robot",
      period: "05/2023-07/2023",
      description:
        "An autonomous robot that follows a predefined path using infrared sensors. Continuously adjusts movement based on sensor feedback.",
      technologies: ["Robotics", "Sensors", "Automation"],
      github: "https://github.com/Abhishankar-2004",
      image: "/images/line-follower-robot.png",
    },
  ],
  education: [
    {
      institution: "New Horizon College of Engineering",
      degree: "Bachelor of Engineering, CSE-Data Science",
      period: "2022 - 2026",
      description: "CGPA: 9.32",
    },
    {
      institution: "Amara Jyothi PU College",
      degree: "Pre-University Course, PCMB",
      period: "2020 - 2022",
      description: "Percentage: 92%",
    },
    {
      institution: "Amara Jyothi School",
      degree: "SSLC, Karnataka State Board",
      period: "2019 - 2020",
      description: "Percentage: 94%",
    },
  ],
  certifications: [
    {
      name: "Data Science",
      provider: "IBM",
      date: "2023",
    },
    {
      name: "Database Management Systems",
      provider: "NPTEL",
      date: "2023",
    },
    {
      name: "Microsoft Excel Functions",
      provider: "Udemy",
      date: "2022",
    },
  ],
  contact: {
    email: "abhishankareddy1@gmail.com",
    phone: "8431522566",
    location: "Kadubeesanahalli, Bengaluru",
  },
  social: [
    { name: "GitHub", url: "https://github.com/Abhishankar-2004" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/abhi-s-3a4197310/" },
  ],
}

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <NoiseOverlay />
      <BrutalistNav />
      <main>
        <HeroSection
          name={resumeData.name}
          title={resumeData.title}
          tagline={resumeData.tagline}
        />
        <AboutSection about={resumeData.about} />
        <SkillsSection skills={resumeData.skills} />
        <ExperienceSection experience={resumeData.experience} />
        <ProjectsSection projects={resumeData.projects} />
        <EducationSection
          education={resumeData.education}
          certifications={resumeData.certifications}
        />
        <ContactSection
          contact={resumeData.contact}
          social={resumeData.social}
        />
      </main>
      <BrutalistFooter name={resumeData.name} social={resumeData.social} />
    </div>
  )
}
