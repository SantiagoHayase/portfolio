import Link from "next/link";
import React, { useRef } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_YOUR_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID as string,
        form.current as any,
        process.env.NEXT_PUBLIC_YOUR_PUBLIC_KEY as string
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );

    const inputN = document.getElementById("name") as HTMLInputElement;
    const inputE = document.getElementById("email") as HTMLInputElement;
    const inputT = document.getElementById("topic") as HTMLInputElement;
    const inputM = document.getElementById("message") as HTMLInputElement;

    inputN.value = "";
    inputE.value = "";
    inputT.value = "";
    inputM.value = "";
  };

  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full ">
        <h2 className=" tracking-widest text-center uppercase  text-[#CF8E80]">
          Contact
        </h2>
        {/* <div className="grid lg:grid-cols-5 gap-8"> */}
        {/* left */}
        {/* <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full rounded-xl">
              <div>
                <img
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src="https://i.pinimg.com/736x/86/54/1d/86541df08ec6c985a19afb10f2cea89e.jpg"
                />
              </div>

              <div>
                <h2 className="py-2">Santiago</h2>
                <p>Fullstack Developer</p>
                <p className="py-4">Contact me</p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect With Me</p>
                <div className="flex items-center justify-left py-4">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <FaLinkedin />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <FaGithub />
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        {/* right */}
        <div className="col-span-3 w-full h-auto shadow-xl shadow-grey-400 rounded-xl lg:p-4">
          <div className="p-4">
            <form ref={form as any} onSubmit={sendEmail}>
              <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                <div className="flex flex-col">
                  <label className="uppercase text-sm py-2">Name</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                    name="user_name"
                    id="name"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                    name="user_email"
                    id="email"
                  />
                </div>
              </div>
              <div className="flex flex-col py-2">
                <label className="uppercase text-sm py-2">Topic</label>
                <input
                  className="border-2 rounded-lg p-3 flex border-gray-300"
                  type="topic"
                  name="topic"
                  id="topic"
                />
              </div>
              <div className="flex flex-col py-2">
                <label className="uppercase text-sm py-2">Message</label>
                <textarea
                  className="border-2 rounded-lg p-3 flex border-gray-300"
                  rows={10}
                  name="message"
                  id="message"
                />
              </div>
              <button
                style={{
                  color: "#FAF6F6",
                  backgroundColor: "#fd9696",
                  fontWeight: "bold",
                }}
                className="w-full p-4 text-gray-100 mt-4"
                type="submit"
                value="Send"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center py-12 ">
        <Link href="/#home">
          <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
            <HiOutlineChevronDoubleUp size={30} className="text-[#fd9696]" />
          </div>
        </Link>
      </div>
    </div>
    // </div>
  );
};

export default Contact;
