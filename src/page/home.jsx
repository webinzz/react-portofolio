// import React from 'react'
import Navbar from "../components/navbar"
import Header from "../components/header"
import About from "../components/about"
import Project from "../components/project"
import Contact from "../components/contect"
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [location]);
  return (
    <>
    <Navbar />
    <Header />
    <main className="bg-white rounded-t-[5rem]">
    <About />
    <Project />
    <Contact />
    </main>
    </>
  )
}

export default Home
