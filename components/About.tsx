import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="max-w-[1240px] mx-auto flex flex-col justify-center h-full"
    >
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <h2 className="text-center tracking-widest uppercase text-[#CF8E80]">
          About
        </h2>
      </div>
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            className="rounded-xl"
            width={500}
            height={150}
            src={"/../public/assets/foto.jpg"}
            alt={"/"}
          />
        </div>
        <div className="col-span-2 p-6 text-left">
          <p className="py-2 px-2 text-gray-700">
            An empathetic and creative person, who really enjoys teamwork, good
            coexistence at work and the study of new technologies. Among my most
            used technologies are JavaScript, Typescript, React, NodeJs and
            Prisma.
          </p>
          <p className="py-2 px-2 text-gray-700">
            Having ventured into the IT world was one of the best decisions that
            I made, because I find myself amazed all the time by the amount of
            things to learn!
          </p>
          <p className="py-2 px-2 text-gray-700">
            Get to know me and I will prove you that I am always up for a
            challenge!
          </p>

          <div className="rounded-full w-32 shadow-xl w- shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 ">
            <div className="font-medium">
              <Link href={"/#contact"}>Contact me!</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
