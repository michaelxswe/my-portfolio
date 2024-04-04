"use client"
import Image from "next/image"
import photo from "@/public/photo.jpg"

export default function Intro() {
  return (
    <section>
      <div className="flex justify-center items-center">
        <Image src={photo} className=" rounded-full w-40 h-40 border border-white object-cover shadow-xl" alt="mike" />
      </div>
    </section>
  )
}
