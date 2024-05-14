"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import profile from "../../public/images/profile.jpg";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
const SmallInfo = () => {
  const pathName = usePathname();
  const navigation = [
    {
      id: 1,
      title: "About",
      href: "/about",
    },
    {
      id: 2,
      title: "Skills",
      href: "/skill",
    },
    {
      id: 3,
      title: "Projects",
      href: "/project",
    },
    {
      id: 4,
      title: "Contact",
      href: "/contact",
    },
  ];

  return pathName.startsWith("/admin") || pathName.startsWith("/project/") ? (
    ""
  ) : (
    <div className={`  ${pathName !== "/login" ? "mt-10" : " hidden"}`}>
      <div className=" flex flex-col sm:flex-row gap-5 sm:gap-8 items-center justify-center sm:justify-normal">
        <Image
          src={profile}
          alt=" Profile picture"
          loading="eager"
          className=" w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4  border-gray-300 dark:border-gray-800 -rotate-3"
        />
        <div className=" flex flex-col gap-3">
          <h5 className=" text-3xl font-bold text-gray-900 dark:text-gray-200 text-center sm:text-start ">
            Ashmin Sharma
          </h5>
          <p className=" flex items-center gap-2 text-base font-semibold text-gray-700 dark:text-gray-300 justify-center sm:justify-start">
            <span>
              <IoLocationSharp size={22} />
            </span>{" "}
            Haryana, India
          </p>

          <p className=" text-sm font-medium text-gray-600 dark:text-gray-400 text-center sm:text-start">
            As a full-stack developer, I specialize in transforming creative
            ideas into innovative web applications. With a touch of pixel magic,
            I craft visually stunning and responsive websites.
          </p>

          <nav className=" flex items-center justify-center sm:justify-start mt-1">
            <Link
              href="https://instagram.com/ashwin.203?igshid=YmMyMTA2M2Y="
              className="mr-3"
              aria-label="Insta"
              target="_blank"
            >
              <FaInstagram size={25} />
            </Link>
            <Link
              href="https://github.com/Ashwin201"
              className="mr-3"
              aria-label="Github"
              target="_blank"
            >
              <FaGithub size={25} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/ashmin-sharma-6a4867257"
              className="mr-3"
              aria-label="Linkedin"
              target="_blank"
            >
              <FaLinkedin size={25} />
            </Link>
          </nav>
        </div>
      </div>
      <nav className=" mt-16 flex justify-center sm:justify-start border-b-2 border-b-gray-300 dark:border-b-gray-700 pb-5">
        <ul className=" flex items-center  sm:gap-3  ">
          {navigation.map((item) => (
            <li key={item.id}>
              <Link
                aria-label={item.title}
                href={item.href}
                className={`px-4 py-2 relative font-semibold text-gray-900  dark:text-gray-50  transition-all duration-300 ${
                  item.href === pathName
                    ? " font-medium text-[16px]  text-gray-700 dark:text-gray-300 dark:bg-gray-800 bg-slate-200 rounded-full "
                    : " hover:text-gray-950 hover:font-bold "
                } `}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default SmallInfo;
