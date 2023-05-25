import React from "react";
import Image from "next/image";
import prodeMasterImg from "../../public/assets/Messi.jpg";
import Link from "next/link";

const prodemaster = () => {
  return (
    // <></>
    <div className="flex flex-wrap">
      <div className="w-[45%] h-[50vh] sm:h-screen">
        <div className="w-screen h-full relative sm:w-full sm:h-full">
          <div className="absolute top-0 left-0 w-full h-[100%] bg-black/70 z-10" />
          <Image
            alt="/"
            src={prodeMasterImg}
            className="absolute z-1"
            style={{ objectFit: "cover" }}
            fill
          />
        </div>
      </div>

      <div className="flex items-center justify-center p-5 flex-col sm:w-[55%]">
        <p className="text-xl tracking-widest uppercase font-semibold sm:mt-10 sm:mb-5">
          Prodemaster
        </p>
        <div className="flex mb-4">
          <p className="w-1/4 m-3 text-white rounded bg-blue-400 flex items-center justify-center">
            TypeScript
          </p>
          <p className="w-1/4 m-3 text-white rounded bg-blue-300 flex items-center justify-center">
            React.js
          </p>
          <p className="w-1/4 m-3 text-white rounded bg-teal-500 flex items-center justify-center">
            ChakraUI
          </p>
          <p className="w-1/4 m-3 text-white rounded bg-green-500 flex items-center justify-center">
            Node.js
          </p>
        </div>
        <div className="sm:w-[65%] text-justify">
          <p className="text-black">
            Prodemaster is an online platform for sports betting on soccer
            tournaments. It allows users to create and customize their own
            tournaments, participate in others, and has a payment gateway
            integrated with MercadoPago. It also offers email notifications for
            users and third-party authentication. It was developed using
            TypeScript, React, Node.js, Prisma, and MySQL, and was deployed on
            Netlify.
          </p>
        </div>
        <div className="flex items-center place-content-evenly">
          <Link href={"https://prodemaster.netlify.app/"}>
            <button className="px-8 py-2 mt-4 mr-8">Page</button>
          </Link>
          <Link href={"https://github.com/matzapata/PG-Henry"}>
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </Link>
        </div>
        <div>
          <Link href={"/#projects"}>
            <p className="px-8 py-2 mt-4">Back</p>
          </Link>
        </div>
      </div>
    </div>
    ///////////////////////////////////////////////////////////////////////
    // <div id="projects" className="w-full pt-10">
    //   <div className="max-w-[1240px] mx-auto px-2 py-16">
    //     <div className="grid lg:grid-cols-5 gap-8">
    //       {/* left */}
    //       <div className="col-span-3 lg:col-span-2 w-full h-full">
    //         <Image
    //           src={prodeMasterImg}
    //           alt={"/"}
    //           height={450}
    //           className="rounded-xl"
    //         />
    //       </div>
    //       {/* right */}
    //       <div className="col-span-3 w-full h-auto lg:p-4">
    //         <p className="text-xl tracking-widest uppercase text-[#5651e5]">
    //           Prodemaster
    //         </p>
    //         <div className="flex">
    //           <p className="m-3 shadow-xl rounded bg-pink-300">TypeScript</p>
    //           <p className="m-3 shadow-xl rounded">React.js</p>
    //           <p className="m-3 shadow-xl rounded">ChakraUI</p>
    //           <p className="m-3 shadow-xl rounded">Prisma</p>
    //         </div>
    //         <p>
    //           Lorem ipsum dolor sit amet consectetur, adipisicing asd asdas
    //           dLorem ipsum dolor sit amet consectetur, adipisicing asd asdas
    //           dLorem ipsum dolor sit amet consectetur, adipisicing asd asdas
    //           dLorem ipsum dolor sit amet consectetur, adipisicing asd asdas
    //           dLorem ipsum dolor sit amet consectetur, adipisicing asd asdas
    //           dLorem ipsum dolor sit amet consectetur, adipisicing asd asdas
    //           dLorem ipsum dolor sit amet consectetur, adipisicing asd asdas
    //           dLorem ipsum dolor sit amet consectetur, adipisicing asd asdas d
    //         </p>
    //         <Link href={"https://prodemaster.netlify.app/"}>
    //           <button className="px-8 py-2 mt-4 mr-8">Page</button>
    //         </Link>
    //         <button className="px-8 py-2 mt-4">Code</button>
    //       </div>
    //     </div>
    //   </div>
    //   <Link href={"/#projects"}>
    //     <p>Back</p>
    //   </Link>
    // </div>
  );
};

export default prodemaster;
