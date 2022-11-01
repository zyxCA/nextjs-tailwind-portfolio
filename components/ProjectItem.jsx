import Image from "next/image"
import Link from "next/link"
import React from "react"

const ProjectItem = ({ Img, ProjectName, Skills, url }) => {
  return (
    <div className="group relative rounded-xl p-4 flex items-center justify-center h-auto w-full shadow-xl shadow-gray-600 bg-slate-50  hover:bg-gradient-to-r from-[#5651e5] to-[#566e55] ">
      <Image className="rounded-xl group-hover:opacity-10" src={Img} alt="/" />

      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {ProjectName}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">{Skills}</p>
        <Link href={url}>
          <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
            More Info
          </p>
        </Link>
      </div>
    </div>
  )
}

export default ProjectItem
