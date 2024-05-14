"use client";
import Image from "next/image";
import { TiWeatherSunny } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsInfoCircleFill, BsFillFileEarmarkTextFill } from "react-icons/bs";
import { BiMenuAltRight, BiSolidBriefcase } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { AiFillHome } from "react-icons/ai";
import Link from "next/link";
import { useEffect, useState } from "react";
import logo from "../../public/images/logo.webp";

import { usePathname } from "next/navigation";
import ThemeSwitcher from "./ThemeSwitcher";
import { IoIosMailUnread, IoMdContact } from "react-icons/io";
import AdminNavbar from "./AdminComponents/AdminNavbar";
import { useSession } from "next-auth/react";
import { RiFolderDownloadFill } from "react-icons/ri";
const Navbar = () => {
  const pathName = usePathname();
  const { data: session } = useSession();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/about`, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (res.ok) {
          const info = await res.json();

          setData(info);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return session && pathName.startsWith("/admin") ? (
    <AdminNavbar />
  ) : (
    <div>
      <nav className=" sticky   top-0 bg-bg font-medium flex justify-between items-center align-middle mb-3">
        <Link href="/about" aria-label="Home">
          <Image
            src={logo}
            alt="logo"
            width={32}
            height={32}
            className=" rounded-md"
          />
        </Link>

        <div className=" flex items-center gap-3 sm:gap-4">
          <ThemeSwitcher />
          {loading ? (
            <div
              className="list-none  mr-3 w-fit  rounded-md bg-black dark:bg-white text-white font-medium dark:text-black  border-solid border-2 border-black
     dark:border-white  hover:scale-95 transition-all duration-300 ease-in-out max-[300px]:mr-0 max-[300px]:mb-3"
            >
              <span className=" flex items-center text-sm  text-center justify-center   py-[6px] px-3  ">
                <span className="mr-2">
                  <RiFolderDownloadFill size={17} className="" />
                </span>
                Download CV
              </span>
            </div>
          ) : (
            data &&
            data.map((item, index) => (
              <ul
                key={index}
                className="flex justify-center xl:justify-start font-medium max-[300px]:flex-col "
              >
                <li
                  className="list-none  mr-3 w-fit  rounded-md bg-black dark:bg-white text-white font-medium dark:text-black  border-solid border-2 border-black
         dark:border-white  hover:scale-95 transition-all duration-300 ease-in-out max-[300px]:mr-0 max-[300px]:mb-3"
                >
                  <Link
                    target="_blank"
                    aria-label="Resume"
                    href={`${item?.resume}`}
                    className=" flex items-center text-sm  text-center justify-center   py-[6px] px-3  "
                  >
                    <span className="mr-2">
                      <RiFolderDownloadFill size={17} className="" />
                    </span>
                    Download CV
                  </Link>
                </li>
              </ul>
            ))
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
