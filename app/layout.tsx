import Header from "@/components/header"
import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Michael | Personal Portfolio",
  description: "About Michael"
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28`}>
        <div className=" bg-[#fbe2e3] absolute top-[-5rem] right-[10rem] h-[30rem] w-[30rem] rounded-full blur-[8rem]"></div>
        <div className=" bg-[#dbd7fb] absolute top-[-5rem] left-[10rem] h-[30rem] w-[30rem] rounded-full blur-[8rem]"></div>
        <Header />
        {children}
      </body>
    </html>
  )
}
