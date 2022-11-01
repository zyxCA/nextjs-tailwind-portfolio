import Image from "next/image"
import Link from "next/link"
import React, { useEffect, useState } from "react"
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import { BsFillPersonLinesFill } from "react-icons/bs"

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [shadow, setShadow] = useState(false)
  const handleNav = () => {
    setNav(!nav)
    console.log(nav)
  }
  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true)
      } else {
        setShadow(false)
      }
    }
    window.addEventListener("scroll", handleShadow)
  })
  return (
    <div
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100] bg-slate-50"
          : "fixed w-full h-20 z-[100] bg-slate-50"
      }>
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href={"/"}>
          <Image
            src="/../public/assets/navLogo.png"
            width="125"
            height="50"
            alt="/"
          />
        </Link>
        <div className="flex items-center">
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href={"/#about"}>
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="/#project">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          <div
            className="fixed items-center right-6 md:hidden"
            onClick={handleNav}>
            <AiOutlineMenu size={25} />
          </div>
        </div>

        <div
          className={
            nav
              ? "md:hidden fixed left-0 top-0 w-full  h-screen bg-black/70"
              : ""
          }>
          <div
            className={
              nav
                ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-200"
                : "fixed left-[-100%] top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in-out duration-500"
            }>
            <div>
              <div className="flex items-center justify-between w-full ">
                <Link href={"/"} onClick={handleNav}>
                  <Image
                    src="/../public/assets/navLogo.png"
                    width="87"
                    height="35"
                    alt="/"
                  />
                </Link>
                <div
                  className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer"
                  onClick={() => setNav(false)}>
                  <AiOutlineClose />
                </div>
              </div>
              <div className="border-b border-red-300 my-4">
                <p className="w-[85%] md:w-[90%] py-4">
                  Let's build something legendary together
                </p>
              </div>
            </div>
            <div className="py-4 flex flex-col">
              <ul className="uppercase">
                <Link href="/" onClick={() => setNav(false)}>
                  <li className="py-4 text-sm ">Home</li>
                </Link>
                <Link
                  href="/#about"
                  scroll={false}
                  onClick={() => setNav(false)}>
                  <li className="py-4 text-sm">About</li>
                </Link>
                <Link
                  href="/#skills"
                  scroll={false}
                  onClick={() => setNav(false)}>
                  <li className="py-4 text-sm">Skills</li>
                </Link>
                <Link
                  href="/#project"
                  scroll={false}
                  onClick={() => setNav(false)}>
                  <li className="py-4 text-sm">Projects</li>
                </Link>
                <Link
                  href="/#contact"
                  scroll={false}
                  onClick={() => setNav(false)}>
                  <li className="py-4 text-sm">Contact</li>
                </Link>
              </ul>
              <div className="pt-40">
                <p className="uppercase tracking-widest text-[#5651e5]">
                  Let's Connect
                </p>
                <div className="flex justify-between items-center my-4 w-full sm:w-[80%]">
                  <div className="rounded-full shadow-xl shadow-gray-400 p-3 cursor-pointer hover:scale-110  ease-out duration-200">
                    <FaLinkedinIn />
                  </div>
                  <div className="rounded-full shadow-xl shadow-gray-400 p-3 cursor-pointer hover:scale-110  ease-out duration-200">
                    <FaGithub />
                  </div>
                  <div className="rounded-full shadow-xl shadow-gray-400 p-3 cursor-pointer hover:scale-110  ease-out duration-200">
                    <AiOutlineMail />
                  </div>
                  <div className="rounded-full shadow-xl shadow-gray-400 p-3 cursor-pointer hover:scale-110  ease-out duration-200">
                    <BsFillPersonLinesFill />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
