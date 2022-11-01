import Image from "next/image"
import React from "react"
import Html from "../public/assets/skills/html.png"
import Css from "../public/assets/skills/css.png"
import Javascript from "../public/assets/skills/javascript.png"
import ReactImg from "../public/assets/skills/react.png"
import Tailwind from "../public/assets/skills/tailwind.png"
import Github from "../public/assets/skills/github1.png"
import Firebase from "../public/assets/skills/firebase.png"
import NextJS from "../public/assets/skills/nextjs.png"
import AWS from "../public/assets/skills/aws.png"
const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2 ">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full ">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* each item */}
          <div className="p-6 shadow-xl rounded-xl  hover:scale-110 ease-out duration-150">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Html} className="w-24 h-24" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          {/* each item */}
          <div className="p-6 shadow-xl rounded-xl  hover:scale-110 ease-out duration-150">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Css} className="w-24 h-24" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          {/* each item */}
          <div className="p-6 shadow-xl rounded-xl  hover:scale-110 ease-out duration-150">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Javascript} className="w-24 h-24" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          {/* each item */}
          <div className="p-6 shadow-xl rounded-xl hover:scale-110 ease-out duration-150">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={ReactImg} className="w-24 h-24" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          {/* each item */}
          <div className="p-6 shadow-xl rounded-xl  hover:scale-110 ease-out duration-150">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Tailwind} className="w-24 h-24" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          {/* each item */}
          <div className="p-6 shadow-xl rounded-xl  hover:scale-110 ease-out duration-150">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Github} className="w-24 h-24" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          {/* each item */}
          <div className="p-6 shadow-xl rounded-xl  hover:scale-110 ease-out duration-150">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Firebase} className="w-24 h-24" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          {/* each item */}
          <div className="p-6 shadow-xl rounded-xl hover:scale-110 ease-out duration-150">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={NextJS} className="w-24 h-24" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
