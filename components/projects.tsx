"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    id: 1,
    title: "Modern E-commerce",
    description:
      "Full-featured e-commerce platform with real-time inventory, AI product recommendations, and seamless checkout experience.",
    category: "Interactive Development",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    year: "2024",
    technologies: ["React", "Node.js", "Stripe", "MongoDB"],
    link: "/e-commerce",
  },
  {
    id: 2,
    title: "Immersive Portfolio",
    description: "Portfolio with custom animations",
    category: "Creative Development",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
    year: "2024",
    color: "#404040",
    technologies: ["React", "GSAP", "Tailwind"],
    link: "/",
  },
  {
    id: 3,
    title: "Quantum Flow",
    description:
      "Interactive data visualization exploring quantum computing concepts through particle systems and real-time animations.",
    category: "Creative Development",
    image:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    year: "2024",
    color: "#202020",
    technologies: ["Three.js", "React", "GLSL", "WebGL"],
    link: "/quantum-flow",
  },
]

function ProjectItem({ project, index }: { project: any; index: number }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const image = imageRef.current

    if (!container || !image) return

    gsap.fromTo(
      container,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: container,
          start: "top center+=100",
          end: "bottom center",
          toggleActions: "play none none reverse",
        },
      },
    )
  }, [])

  return (
    <div ref={containerRef} className="relative min-h-screen flex items-center py-16 md:py-32">
      <div className="container px-4 md:px-0">
        <div className="absolute -left-4 top-1/2 -translate-y-1/2 text-[6rem] md:text-[12rem] font-display text-primary/5 select-none opacity-50 md:opacity-100">
          {String(index + 1).padStart(2, "0")}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="col-span-1 md:col-span-5 space-y-6 md:space-y-8 relative z-10">
            <div className="space-y-4 md:space-y-6">
              <div className="flex items-center space-x-4 flex-wrap">
                <span className="text-muted-foreground uppercase tracking-[0.2em] text-xs md:text-sm">
                  {project.category}
                </span>
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-muted-foreground uppercase tracking-[0.2em] text-xs md:text-sm">
                  {project.year}
                </span>
              </div>

              <h3 className="text-4xl md:text-6xl font-bold leading-none">{project.title}</h3>

              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech: string, i: number) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm border border-primary/10 rounded-full hover:border-primary transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 md:px-8 md:py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-300 group text-sm md:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span>View Project</span>
                <svg
                  className="w-3 h-3 md:w-4 md:h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </motion.a>
          </div>

          <motion.div
            ref={imageRef}
            className="col-span-1 md:col-span-7 relative aspect-[3/2] md:aspect-[4/3] overflow-hidden rounded-lg group cursor-pointer mt-6 md:mt-0"
            whileHover={{ scale: 1.05 }}
            onClick={() => window.open(project.link, "_blank", "noopener,noreferrer")}
          >
            <div
              className="absolute inset-0 transition-transform duration-700"
              style={{ backgroundColor: project.color }}
            />

            <div
              className="absolute inset-0 bg-cover bg-center w-full h-full transform transition-all duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${project.image})` }}
            />

            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <span className="px-8 py-4 bg-background/90 text-foreground rounded-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                View Project
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export function Projects() {
  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const header = headerRef.current
    if (!header) return

    gsap.fromTo(
      header,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: header,
          start: "top center+=200",
          end: "bottom center",
          toggleActions: "play none none reverse",
        },
      },
    )
  }, [])

  return (
    <section id="work" className="relative py-12 md:py-20">
      <div ref={headerRef} className="container px-4 md:px-0">
        <span className="text-muted-foreground uppercase tracking-[0.2em] text-sm md:text-base">Selected Works</span>
      </div>

      {projects.map((project, index) => (
        <ProjectItem key={project.id} project={project} index={index} />
      ))}
    </section>
  )
}

