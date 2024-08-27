import "./globals.css"
import { Inter as FontSans } from "next/font/google"
import { Metadata } from "next"
import { cn } from "@/lib/utils"


export const metadata: Metadata = {
  title: "Never do again app",
  description: "A task manager with a twist"
}

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  )
}
