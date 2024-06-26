import React from "react";
import Image from "next/image";
import Strapi from "../../public/images/strapi.webp";
import Stripe from "../../public/images/Stripe.webp";
import {
  // FireBase,
  MongoDb,
  NextJs,
  Nodejs,
  Prisma,
} from "../../public/SkillIcons";
const BackEndSkills = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-center align-middle lg:justify-between  pb-10 mb-10 border-b-2 border-gray-300 dark:border-gray-800 ">
        <div className="font-bold text-center lg:text-start mb-10 lg:mb-0 text-3xl xl:mr-60">
          Back-End Development
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 align-content-end gap-10 lg:gap-[70px]">
          <div className=" flex flex-col items-center ">
            <span className="rounded-[50%] w-[60px] h-[60px] shadow-lg p-[6px]  flex justify-center items-center">
              <Nodejs />
            </span>
            <span className="  font-semibold mt-2 text-text1  text-[12.5px] text-center">
              Nodejs
            </span>
          </div>
          <div className=" flex flex-col items-center ">
            <span className="rounded-[50%] w-[60px] h-[60px] shadow-lg p-[6px]  flex justify-center items-center">
              <NextJs />
            </span>
            <span className="  font-semibold mt-2 text-text1  text-[12.5px] text-center">
              Nextjs
            </span>
          </div>
          <div className=" flex flex-col items-center ">
            <span className="rounded-[50%] w-[60px] h-[60px] shadow-lg p-[6px]  flex justify-center items-center">
              <MongoDb />
            </span>
            <span className="  font-semibold mt-2 text-text1  text-[12.5px] text-center">
              MongoDb
            </span>
          </div>

          <div className=" flex flex-col items-center ">
            <span className="rounded-[50%] w-[60px] h-[60px] shadow-lg p-[6px]  flex justify-center items-center">
              <Prisma />
            </span>
            <span className="  font-semibold mt-2 text-text1  text-[12.5px] text-center">
              Prisma
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackEndSkills;
