import Image from "next/image"
import {HomeAnimals} from "@/app/components/home/animalsSection"
import {CTAAnimals} from "@/app/components/home/animalsCTA"
import {HomeServices} from "@/app/components/home/servicesSection"
import {CTAServices} from "@/app/components/home/servicesCTA"
import {HomeComments} from "@/app/components/home/commentsSection"
import {HomeAbout} from "@/app/components/home/aboutSection"

export default function IndexPage() {
  return (
      <>
          <header
              className={`bg-[url('/img/elephant.webp')] z-[-1] bg-no-repeat bg-center bg-cover relative w-full h-[300px] drop-shadow-lg md:bg-[url('/img/elephant-lg.webp')]`}>
          </header>
          <HomeAbout/>
          <HomeAnimals/>
          <CTAAnimals/>
          <HomeServices/>
          <CTAServices/>
          <HomeComments/>
      </>
  )
}
