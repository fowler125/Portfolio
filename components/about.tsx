"use client"

import { useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { FiCalendar, FiCode, FiMapPin } from "react-icons/fi"

gsap.registerPlugin(ScrollTrigger)

const experiences = [
  {
    year: "2018",
    title: "iOS/macOS Technical Advisor",
    company: "Apple",
    location: "Texas",
    description:
      "Currently in vocational training while developing digital tools and applications for the automotive industry.",
    achievements: [
      "Leading development team of 3 engineers",
      "Developed simulation software for industrial screw controllers",
      "Implemented AI-driven solutions for management systems",
    ],
    technologies: ["Swift", "Python", "TensorFlow"],
    color: "#4F46E5",
    duration: "1 year",
  },
  {
    year: "2017",
    title: "Student",
    company: "Realschule",
    location: "Germany",
    description: "Completed school education with focus on technical subjects.",
    achievements: [
      "Specialized in technical and IT courses",
      "Participated in Harvard's CS50x online computer science program",
      "Developed strong interest in cybersecurity",
      "Active participant in HackTheBox challenges",
      "Completed with strong academic performance",
    ],
    technologies: ["Math", "Physics", "Chemistry", "IT"],
    color: "#06B6D4",
    duration: "6 years",
  },
  {
    year: "2013",
    title: "Student",
    company: "Grundschule",
    location: "Germany",
    description: "Started my educational journey with early exposure to technology",
    achievements: [
      "First introduction to computers and technology",
      "Developed early interest in programming",
      "Built foundation for future technical education",
    ],
    technologies: ["Math", "Basic Computing", "Problem Solving"],
    color: "#10B981",
    duration: "4 years",
  },
]

const stats = [
  { value: "Professional", label: "Professional Level" },
  { value: "100+", label: "Projects Completed" },
  { value: "1000+", label: "Happy Clients" },
  { value: "4+", label: "Companies Reached" },
]

const DallasShape = () => (
  <svg viewBox="0 0 100 100" className="absolute right-0 top-0 h-[200px] w-[200px] text-primary/5 -z-10">
    <path d="M20,20 L80,20 L90,50 L80,80 L20,80 L10,50 Z" fill="currentColor" stroke="none" />
  </svg>
)

export function About() {
  const containerRef = useRef<HTMLDivElement>(null)
  const centerLineRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    experiences.forEach((_, index) => {
      const element = container.children[index] as HTMLElement
      if (!element) return

      gsap.fromTo(
        element,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: element,
            start: "top bottom-=100",
            end: "bottom center",
            toggleActions: "play none none reverse",
          },
        },
      )
    })
  }, [])

  return (
    <section id="about" className="relative overflow-hidden bg-background py-20">
      <div className="absolute inset-0 opacity-30">
        <motion.div
          className="absolute left-10 top-20 h-96 w-96 rounded-full bg-primary/20 blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-primary/20 blur-[100px]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container relative">
        <div className="mx-auto mb-20 max-w-6xl">
          <div className="mb-12 space-y-8">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-block uppercase tracking-[0.2em] text-muted-foreground"
            >
              About Me
            </motion.span>

            <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(320px,0.95fr)] lg:items-start">
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="w-full space-y-6"
              >
                <h2 className="text-5xl font-bold leading-tight sm:text-6xl">
                  Hi, I&apos;m <span className="text-primary">Jabari Fowler</span>
                </h2>

                <div className="space-y-4 text-muted-foreground">
                  <motion.div
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <FiMapPin className="h-5 w-5 text-primary" />
                    <span>Based in Dallas, Texas</span>
                  </motion.div>

                  <motion.div
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 }}
                  >
                    <svg
                      className="h-5 w-5 text-primary"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 8v8" />
                      <path d="M8 12h8" />
                    </svg>
                    <span>27 Years Old</span>
                  </motion.div>

                  <motion.div
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <FiCode className="h-5 w-5 text-primary" />
                    <span>Software Developer</span>
                  </motion.div>

                  <motion.div
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <FiCalendar className="h-5 w-5 text-primary" />
                    <span>8+ Years of Experience</span>
                  </motion.div>
                </div>

                <motion.p
                  className="text-lg leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  As a previous employee for Apple, and current software engineer at Lockheed Martin, I bring a
                  unique blend of hands-on experience and technical expertise to my software development projects.
                  With a strong background in iOS and macOS environments, I have honed my skills in creating
                  innovative solutions that drive efficiency and enhance user experiences. My passion for technology
                  and problem-solving has led me to specialize in AI-driven applications, where I leverage machine
                  learning techniques to deliver cutting-edge results. Whether it&apos;s building robust web
                  applications or developing intelligent automation tools, I am committed to delivering high-quality
                  solutions that exceed expectations.
                </motion.p>

                <motion.div
                  className="flex flex-wrap gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <motion.a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault()
                      document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
                    }}
                    className="rounded-lg bg-primary px-6 py-3 text-primary-foreground transition-colors hover:bg-primary/90"
                    whileHover={{ y: -2 }}
                  >
                    Get in Touch
                  </motion.a>
                  <motion.a
                    href="#work"
                    onClick={(e) => {
                      e.preventDefault()
                      document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" })
                    }}
                    className="rounded-lg border border-primary/20 px-6 py-3 transition-colors hover:border-primary"
                    whileHover={{ y: -2 }}
                  >
                    View Projects
                  </motion.a>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="relative w-full space-y-6"
              >
                <DallasShape />

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Key Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "React",
                      "TypeScript",
                      "Next.js",
                      "TailwindCSS",
                      "C#",
                      "C++",
                      "Python",
                      "Machine Learning",
                      "AI",
                      "TensorFlow",
                      "Adobe Illustrator",
                    ].map((skill, i) => (
                      <motion.span
                        key={skill}
                        className="rounded-full bg-primary/5 px-4 py-2 transition-colors hover:bg-primary/10"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Services</h3>
                  <ul className="space-y-2">
                    {[
                      "Full Stack Development",
                      "Specialized in AI",
                      "Web Design & Development",
                      "Automation & Scripting",
                      "Data Analysis & Visualization",
                    ].map((service, i) => (
                      <motion.li
                        key={service}
                        className="flex items-center gap-2"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <span className="text-primary">→</span>
                        {service}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4 pt-2">
                  <h3 className="text-2xl font-bold">Highlights</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {stats.map((stat, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{
                          y: -8,
                          scale: 1.02,
                          transition: { duration: 0.2 },
                        }}
                        className="group relative rounded-xl border border-primary/10 bg-card p-5 backdrop-blur-sm transition-all duration-300 hover:border-primary/30"
                      >
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        <motion.div
                          className="relative mb-2 text-3xl font-bold text-primary"
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          {stat.value}
                        </motion.div>
                        <div className="relative text-sm font-medium leading-snug text-muted-foreground">
                          {stat.label}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <div ref={containerRef} className="relative mx-auto mt-20 mb-24 max-w-7xl">
          <div className="block px-4 md:hidden">
            {experiences.map((exp, index) => (
              <motion.div
                key={`mobile-${index}`}
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <div className="rounded-xl border border-primary/10 bg-card p-6 backdrop-blur-md">
                  <div className="mb-6 flex items-center gap-3">
                    <span className="text-4xl font-bold" style={{ color: exp.color }}>
                      {exp.year}
                    </span>
                    <span className="text-sm text-muted-foreground">{exp.duration}</span>
                  </div>

                  <div className="mb-6 space-y-2">
                    <h3 className="text-2xl font-bold">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <span>{exp.company}</span>
                      <span className="text-primary">•</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <p className="mb-6 text-muted-foreground">{exp.description}</p>

                  <ul className="mb-6 space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <span className="text-primary">→</span>
                        <span className="text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span key={i} className="rounded-full bg-primary/5 px-3 py-1.5 text-sm text-muted-foreground">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="relative hidden min-h-[1200px] md:block">
            <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2">
              <motion.div
                ref={centerLineRef}
                className="w-full bg-gradient-to-b from-primary via-primary to-transparent"
                style={{ height: lineHeight }}
              >
                <div className="absolute inset-0 bg-primary/10 blur-sm" />
              </motion.div>
            </div>

            <div className="relative pb-32">
              {experiences.map((exp, index) => {
                const isLeft = index % 2 === 0
                const yOffset = index * 450

                return (
                  <motion.div
                    key={`desktop-${index}`}
                    className={`absolute w-[450px] ${isLeft ? "left-[calc(50%-500px)]" : "left-[calc(50%+50px)]"}`}
                    style={{ top: `${yOffset}px` }}
                    initial={{
                      opacity: 0,
                      x: isLeft ? -50 : 50,
                      y: 20,
                      rotateY: isLeft ? 10 : -10,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                      y: 0,
                      rotateY: 0,
                    }}
                  >
                    <motion.div
                      className="group relative rounded-xl border border-primary/10 bg-card p-8 shadow-lg transition-all duration-500 hover:border-primary/30 hover:shadow-primary/10"
                      whileHover={{
                        y: -8,
                        x: isLeft ? 8 : -8,
                        rotateY: isLeft ? -5 : 5,
                        scale: 1.02,
                        transition: { duration: 0.4 },
                      }}
                    >
                      <motion.div
                        className={`absolute top-1/2 flex h-[2px] w-[50px] items-center ${
                          isLeft ? "right-0 translate-x-full" : "left-0 -translate-x-full"
                        }`}
                      >
                        <div
                          className="h-full w-full"
                          style={{
                            background: `linear-gradient(${isLeft ? "to left" : "to right"}, ${exp.color}, transparent)`,
                          }}
                        />
                        <div className={`absolute h-2 w-2 rounded-full bg-primary/50 ${isLeft ? "right-0" : "left-0"}`} />
                      </motion.div>

                      <div className="mb-6 flex items-center gap-3">
                        <motion.div className="relative" whileHover={{ scale: 1.1 }}>
                          <span className="relative z-10 text-5xl font-bold" style={{ color: exp.color }}>
                            {exp.year}
                          </span>
                          <div className="absolute inset-0 opacity-20 blur-xl" style={{ backgroundColor: exp.color }} />
                          <motion.div
                            className="absolute -inset-2 rounded-full"
                            style={{ backgroundColor: exp.color }}
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 0.1 }}
                          />
                        </motion.div>
                        <div className="text-sm font-medium text-muted-foreground">{exp.duration}</div>
                      </div>

                      <div className="mb-6 space-y-2">
                        <h3 className="group-hover:text-primary relative text-2xl font-bold transition-colors duration-300">
                          {exp.title}
                          <div className="absolute bottom-0 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                        </h3>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <span className="font-medium">{exp.company}</span>
                          <span className="text-primary">•</span>
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      <p className="mb-6 leading-relaxed text-muted-foreground">{exp.description}</p>

                      <ul className="mb-6 space-y-3">
                        {exp.achievements.map((achievement, i) => (
                          <motion.li
                            key={i}
                            className="group/item flex items-center gap-3"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                          >
                            <span className="text-primary transition-transform duration-300 group-hover/item:rotate-90">
                              →
                            </span>
                            <span className="text-muted-foreground transition-colors duration-300 group-hover/item:text-primary/80">
                              {achievement}
                            </span>
                          </motion.li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <motion.span
                            key={i}
                            className="rounded-full border border-transparent bg-primary/5 px-3 py-1.5 text-sm text-muted-foreground transition-all duration-300 hover:border-primary/20 hover:bg-primary/10 hover:text-primary"
                            initial={{ opacity: 0, y: 5 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.05 }}
                            whileHover={{ scale: 1.05 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
