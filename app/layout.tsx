import "./globals.css"
import "easymde/dist/easymde.min.css"

import type { Metadata, Viewport } from "next"
// import localFont from 'next/font/local'
import { Outfit } from "next/font/google"

import { Toaster } from "@/components/ui/toaster"
import { cn } from "@/lib/utils"

const outfit = Outfit({ subsets: ["latin"] })

// const workSans = localFont({
//   src: [
//     {
//       path: './fonts/WorkSans-Black.ttf',
//       weight: '900',
//       style: 'normal',
//     },
//     {
//       path: './fonts/WorkSans-Medium.ttf',
//       weight: '500',
//       style: 'normal',
//     },
//     {
//       path: './fonts/WorkSans-Regular.ttf',
//       weight: '400',
//       style: 'normal',
//     },
//   ],
//   variable: '--font-work-sans',
// })

export const metadata: Metadata = {
  title: "PitchSpark",
  description:
    "PitchSpark is the fast, modern platform where early-stage entrepreneurs pitch ideas, connect with investors, and explore groundbreaking startups. Blazing speed, compelling visuals, and seamless browsing make your pitch shine.",
  keywords: [
    "PitchSpark",
    "startup platform",
    "pitch ideas",
    "entrepreneur",
    "investor platform",
    "early stage startups",
    "startup pitch deck",
    "idea submission",
    "startup showcase",
    "venture capital",
    "founder networking",
    "startup investment",
    "PitchSpark ideas"
  ],
  icons:{
    icon:"/images/favicon.svg"
  }
}

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "black" }],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          "relative h-full scroll-smooth text-white antialiased selection:bg-pink-700/20 selection:text-pink-400",
          outfit.className,
        )}
      >
        <Toaster />
        {children}
      </body>
    </html>
  )
}
