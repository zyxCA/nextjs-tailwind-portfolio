import Image from "next/image"
import Link from "next/link"
import React from "react"
import about from "../public/assets/about.jpg"

const About = () => {
  return (
    <div
      id="about"
      className="w-full  md:h-screen p-2 flex items-center py-16 ">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 ">
        <div className="col-span-2">
          <p className="text-xl tracking-widest uppercase text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            // I am not your normal developer
          </p>
          <p className="py-2 text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit
            inventore quibusdam odit maiores blanditiis, harum beatae unde, vero
            voluptatibus libero labore ea cum, expedita pariatur debitis veniam.
            Optio obcaecati neque excepturi laborum porro aut id, atque totam
            eum quis fugiat iste! Nemo suscipit numquam assumenda quae,
            laboriosam ad maiores eius?
          </p>
          <p className="py-2 text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit
            inventore quibusdam odit maiores blanditiis, harum beatae unde, vero
            voluptatibus libero labore ea cum, expedita pariatur debitis veniam.
            Optio obcaecati neque excepturi laborum porro aut id, atque totam
            eum quis fugiat iste! Nemo suscipit numquam assumenda quae,
            laboriosam ad maiores eius?
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer ">
            Check out some of my latest projects.
          </p>
        </div>
        <div className="w-full m-auto shadow-xl shadow-gray-400 rounded-2xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-200">
          <Image className=" rounded-2xl" src={about} alt="/" />
        </div>
      </div>
    </div>
  )
}

export default About
