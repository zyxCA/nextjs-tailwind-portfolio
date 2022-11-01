import Image from "next/image"
import React from "react"
import propertyImg from "../public/assets/projects/property.jpg"
import { RiRadioButtonFill } from "react-icons/ri"
import Link from "next/link"
const property = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1 object-cover"
          fill
          src={propertyImg}
          alt="/"
        />
        <div className="absolute top-[70%] w-full max-w-[1240px] left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white/70 z-20 p-2">
          <h2 className="py-2">Property Finder</h2>
          <h3>React JS / Tailwind / Firebase</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            Build a NEXT JS Portfolio Website With Tailwind CSS. I wanted to
            update the portfolio and since I am starting to learn Next JS I
            thought I would build the new version with Next JS using Tailwind
            CSS for the styling
          </p>
          <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          <button className="px-8 py-2 mt-4 mr-8">Code</button>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className=" font-bold first-line:text-center">Technologies</p>
          </div>

          <div className="p-2 grid grid-cols-3 md:grid-cols-1">
            <p className=" pb-2 flex items-center">
              <RiRadioButtonFill className=" mr-2" />
              React
            </p>
            <p className=" pb-2 flex items-center">
              <RiRadioButtonFill className=" mr-2" />
              Tailwind
            </p>
            <p className=" pb-2 flex items-center">
              <RiRadioButtonFill className=" mr-2" />
              JavaScript
            </p>
            <p className=" pb-2 flex items-center">
              <RiRadioButtonFill className=" mr-2" />
              Firebase
            </p>
            <p className=" pb-2 flex items-center">
              <RiRadioButtonFill className=" mr-2" />
              Google API
            </p>
          </div>
        </div>
      </div>
      <Link href={"/#project"}>
        <p className="underline cursor-pointer">Back</p>
      </Link>
    </div>
  )
}

export default property
