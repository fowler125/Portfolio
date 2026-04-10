"use client"

import type React from "react"
import { useState } from "react"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"

export function Layout({ children }: { children: React.ReactNode }) {
  const { scrollY } = useScroll()
  const [hidden, setHidden] = useState(false)

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0
    if (latest > previous && latest > 150) {
      setHidden(true)
    } else {
      setHidden(false)
    }
  })

  return (
    <div className="flex min-h-screen flex-col">
      <motion.header
        className="fixed left-0 right-0 top-0 z-10 border-b bg-background"
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
      >
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <h1 className="text-2xl font-bold">J.Fowler</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#about" className="hover:text-primary">
                  About
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-primary">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </motion.header>
      <main className="flex-grow pt-16">{children}</main>
      <footer className="border-t bg-background">
        <div className="container mx-auto px-4 py-6 text-center">
          <p>&copy; 2025 My Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
