import Image from "next/image";
import Link from "next/link";
import React from "react";
import prodeMasterImg from "../public/assets/Messi.jpg";
import comingSoon from "../public/assets/Comingsoon.jpg";
import videogamesImg from "../public/assets/Videogamesapi.jpg";
import tesloshopcloneImg from "../public/assets/tesloshopclone.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-20">
        <h2 className=" tracking-widest text-center  uppercase text-[#CF8E80] mb-5">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ProjectItem
            title={"Prodemaster"}
            img={prodeMasterImg}
            projectUrl={"https://prodemaster.netlify.app/"}
          />
          <ProjectItem
            title={"Teslo-Shop clone"}
            img={tesloshopcloneImg}
            projectUrl={"https://teslo-shop-clone.vercel.app/"}
          />
          <ProjectItem
            title={"Videogames' API"}
            img={videogamesImg}
            projectUrl={"https://github.com/SantiagoHayase/PI-videogames-Henry"}
          />
          <ProjectItem
            title={"Coming soon..."}
            img={comingSoon}
            projectUrl={"/"}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
