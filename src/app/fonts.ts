// app/fonts.ts
import { Philosopher, Montserrat } from 'next/font/google'

const philosopher = Philosopher({ 
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-philosopher",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
})

export const fonts = {
  philosopher,
  montserrat,
}