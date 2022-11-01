import Image from "next/image"
import Link from "next/link"
import React from "react"
import { AiOutlineMail } from "react-icons/ai"
import { BsFillPersonLinesFill } from "react-icons/bs"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import { HiOutlineChevronDoubleUp } from "react-icons/hi"
import contact from "../public/assets/contact.jpg"
const Contact = () => {
  return (
    <div id="contact" className=" w-full lg:h-screen bg-slate-600">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full bg-slate-300">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Contact
        </p>
        <h2>Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-8">
            <div className="lg:p-4 h-full ">
              <div>
                <Image
                  className="rounded-xl hover:scale-110 ease-out duration-200"
                  src={contact}
                  alt="/"
                />
              </div>
              <div>
                <h2 className="py-2">Name here</h2>
                <p>Front-end Developer</p>
                <p className="py-4">
                  I am available for freelance or full-time position. Contact me
                  and let us talk.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect With Me</p>
                <div className="flex items-center justify-between py-4">
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
          {/* right */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4 ">
            <form action="">
              <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                <div className="flex flex-col">
                  <label htmlFor="" className="text-sm uppercase py-2">
                    Name
                  </label>
                  <input
                    className="border-2  rounded-lg p-3 flex "
                    type="text"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="" className="text-sm uppercase py-2">
                    Phone Number
                  </label>
                  <input className="border-2  rounded-lg p-3 " type="text" />
                </div>
              </div>
              <div className="flex flex-col py-2">
                <label htmlFor="" className="uppercase text-sm py-2">
                  Email
                </label>
                <input type="email" className="border-2 rounded-lg p-3 flex " />
              </div>
              <div className="flex flex-col py-2">
                <label htmlFor="" className="uppercase text-sm py-2">
                  Subject
                </label>
                <input type="text" className="border-2 rounded-lg p-3 flex " />
              </div>
              <div className="flex flex-col py-2">
                <label htmlFor="" className="uppercase text-sm py-2">
                  Message
                </label>
                <textarea
                  className="border-2 rounded-lg p-3 border-gray-300"
                  rows="10"></textarea>
              </div>
              <button className="w-full p-4 text-gray-100 mt-4 hover:scale-105 ease-in duration-200">
                Send Message
              </button>
            </form>
          </div>
        </div>
        <div className=" flex justify-center pt-10  ">
          <Link
            href="/"
            className="border-2 p-4  rounded-full shadow-xl shadow-gray-400 cursor-pointer hover:scale-110 duration-200 ease-out flex items-center justify-center">
            <HiOutlineChevronDoubleUp size={30} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Contact
