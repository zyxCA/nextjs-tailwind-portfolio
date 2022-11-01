import Image from "next/image"
import Link from "next/link"
import React from "react"
import PropertyImg from "../public/assets/projects/property.jpg"
import netflixImg from "../public/assets/projects/netflix.jpg"
import cryptoImg from "../public/assets/projects/crypto.jpg"
import twitchImg from "../public/assets/projects/twitch.jpg"
import ProjectItem from "./ProjectItem"
const Project = () => {
  return (
    <div id="project" className="w-full  bg-slate-500">
      <div className="max-w-[1240px] mx-auto px-2 py-16 bg-slate-300">
        <p className="tracking tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I have built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            Img={PropertyImg}
            ProjectName={"Property Finder"}
            Skills={"React JS"}
            url="/property"
          />
          <ProjectItem
            Img={netflixImg}
            ProjectName={"Netflix Clone"}
            Skills={"React JS"}
            url="/"
          />
          <ProjectItem
            Img={cryptoImg}
            ProjectName={"Crypto Building"}
            Skills={"React JS"}
            url="/"
          />
          <ProjectItem
            Img={twitchImg}
            ProjectName={"Twitch Clone"}
            Skills={"React JS"}
            url="/"
          />
        </div>
      </div>
    </div>
  )
}

export default Project
