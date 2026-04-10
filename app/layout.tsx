import "./globals.css"
import type { Metadata } from "next"
import { Layout } from "@/components/layout"
import type React from "react" // Import React

export const metadata: Metadata = {
  title: "My Code Portfolio",
  description: "A showcase of my development projects",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}

