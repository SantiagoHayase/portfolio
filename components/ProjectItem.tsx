import Link from "next/link";
import React, { FC } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface Props {
  title: string;
  img: StaticImageData;
  projectUrl: string;
}

const ProjectItem: FC<Props> = ({ title, img, projectUrl }) => {
  return (
    <div className=" relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#CF8E80] to-[#916953]">
      <Image
        className="rounded-xl group-hover:opacity-10 "
        src={img}
        alt={"/"}
        width={400}
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {title}{" "}
        </h3>
        {/* <p className="pb-4 pt-2 text-white text-center">React JS</p> */}
        {projectUrl !== "/" ? (
          <Link href={projectUrl}>
            <p className="text-center py-3 rounded-lg bg-white text-[#916953] font-bold text-lg cursor-pointer">
              More info
            </p>
          </Link>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default ProjectItem;
