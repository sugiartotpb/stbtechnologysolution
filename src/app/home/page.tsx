import React from 'react'
import Image from "next/image";
import Profile from '../../../public/png/about_me_1.jpg'

const HomePage = () => {
  return (
    <>
    <div className="flex  flex-col-reverse lg:flex-row justify-between gap-x-10">
      <div className="w-full lg:w-2/3">
        <h1 className="scroll-m-20 text-2xl md:text-2xl font-semibold icon-orange-block tracking-normal lg:text-2xl text-center lg:text-left mt-6 lg:mt-0 ">Sugiarto Tampubolon | Full Stack Developer ✌🏻</h1>
        <p className="prose prose-neutral dark:prose-invert mt-3 text-justify">
          Hello! I am Sugiarto, a passionate and experienced Full Stack Developer with over 7 years of experience in building dynamic, responsive, and scalable web applications. My journey in the tech world started with a fascination for how things work on the internet, which led me to pursue a degree in Computer Science from Batam-Indonesian University. Since then, I have been dedicated to continuously improving my skills and staying up-to-date with the latest technologies.
        </p>
        <div className="py-3">
          <div data-orientation="horizontal" role="none" className="shrink-0 bg-gray-400 h-[1px] w-full"></div>
        </div>
        <h1 className="scroll-m-20 text-2xl md:text-2xl font-semibold icon-orange-block tracking-normal lg:text-2xl text-center lg:text-left mt-6 lg:mt-0">Professional Journey</h1>
        <p className="prose prose-neutral dark:prose-invert mt-3 text-justify">
          Over the years, I have had the pleasure of working with diverse teams and on various projects that have honed my skills across both front-end and back-end development. My expertise spans several technologies, including JavaScript, React, .Net Mvc, Node.js, Django, and databases like MySQL and MongoDB. I pride myself on my ability to adapt and thrive in fast-paced environments, delivering high-quality solutions that meet business objectives.
        </p>
        <div className="py-3">
          <div data-orientation="horizontal" role="none" className="shrink-0 bg-gray-400 h-[1px] w-full"></div>
        </div>
        <h1 className="scroll-m-20 text-2xl md:text-2xl font-semibold icon-orange-block tracking-normal lg:text-2xl text-center lg:text-left mt-6 lg:mt-0">My Philosophy</h1>
        <p className="prose prose-neutral dark:prose-invert mt-3 text-justify">
          I believe that the best software is built through a combination of technical excellence and a deep understanding of the user experience. Whether it is designing a sleek user interface or optimizing server-side performance, I approach every project with a focus on quality, scalability, and maintainability. I enjoy tackling complex problems and turning innovative ideas into reality.
        </p>
      </div>
      <Image src={Profile} alt="profile image" className="rounded-lg w-full lg:w-1/3 h-fit"></Image>
    </div>
    </>
  )
}

export default HomePage
