"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  imageUrl: string
  projectUrl: string
}

export function ProjectCard({ title, description, technologies, imageUrl, projectUrl }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="overflow-hidden">
        <img src={imageUrl || "/placeholder.svg"} alt={title} className="w-full h-48 object-cover" />
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <motion.div key={index} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Badge variant="secondary">{tech}</Badge>
              </motion.div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button asChild>
            <a href={projectUrl} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

