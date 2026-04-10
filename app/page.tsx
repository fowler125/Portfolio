"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useEffect } from "react"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { motion } from "framer-motion"

export default function Home() {
  useEffect(() => {
    const anchors = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]')

    const handleClick = (e: Event) => {
      const anchor = e.currentTarget as HTMLAnchorElement
      const href = anchor.getAttribute("href")
      if (!href) return

      e.preventDefault()
      const target = document.querySelector(href)
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
        })
      }
    }

    anchors.forEach((anchor) => {
      anchor.addEventListener("click", handleClick)
    })

    return () => {
      anchors.forEach((anchor) => {
        anchor.removeEventListener("click", handleClick)
      })
    }
  }, [])

  return (
    <>
      <motion.section
        className="bg-background py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4">
          <motion.h2
            className="mb-8 text-center text-4xl font-bold"
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
          >
            Welcome to My Portfolio
          </motion.h2>
          <motion.p
            className="mb-8 text-center text-xl"
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 120 }}
          >
            I&apos;m a full stack developer
          </motion.p>
        </div>
      </motion.section>

      <About />

      <Projects />

      <motion.section
        id="contact"
        className="py-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
          <form className="max-w-md mx-auto">
            <div className="mb-4">
              <Input type="text" placeholder="Your Name" />
            </div>
            <div className="mb-4">
              <Input type="email" placeholder="Your Email" />
            </div>
            <div className="mb-4">
              <Textarea placeholder="Your Message" />
            </div>
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
      </motion.section>
    </>
  )
}
