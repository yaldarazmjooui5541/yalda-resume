import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Education from "../components/Education";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Yalda Resume</title>
        <meta name="description" content="رزومه ی یلدا" />
      </Head>
      <Header />
      <main className="max-w-5xl mx-auto px-4">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
