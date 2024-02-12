// app/fonts.ts
import { Philosopher } from 'next/font/google'

const philosopher = Philosopher({ 
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-philosopher",
})

export const fonts = {
  philosopher,
}