import React from "react"
import { AiOutlineMail } from "react-icons/ai"
import { BsFillPersonLinesFill, BsFolder } from "react-icons/bs"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"

const Main = () => {
  return (
    <div id="main" className=" w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center ">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Let's build something together.
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I'm <span className="text-[#5651e5]">Clint</span>
          </h1>
          <h1 className="py-4 text-gray-700">A Front-End Web Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I'm a front-end web developer specializing in building and designing
            exceptional digital experience. Currently, I'm focus on building
            responsive front-end web applications while learning back-end
            technologies.
          </p>
          <div className="flex items-center justify-center max-w-[330px] m-auto py-4 gap-8">
            <div className="rounded-full shadow-xl shadow-gray-400 p-5 cursor-pointer hover:scale-125  ease-out duration-200">
              <FaLinkedinIn />
            </div>
            <div className="rounded-full shadow-xl shadow-gray-400 p-5 cursor-pointer hover:scale-125  ease-out duration-200">
              <FaGithub />
            </div>
            <div className="rounded-full shadow-xl shadow-gray-400 p-5 cursor-pointer hover:scale-125  ease-out duration-200">
              <AiOutlineMail />
            </div>
            <div className="rounded-full shadow-xl shadow-gray-400 p-5 cursor-pointer hover:scale-125  ease-out duration-200">
              <BsFillPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
