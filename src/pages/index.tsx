import Head from "next/head";
import { Inter } from "next/font/google";
import Main from "../../components/Main";
import About from "../../components/About";
import Skill from "../../components/Skill";
import Projects from "../../components/Projects";
import Contact from "../../components/Contact";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Santiago | Full-stack</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
      <About />
      <Skill />
      <Projects />
      <Contact />
    </>
  );
}
