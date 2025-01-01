// import React from 'react'
import Navbar from "../components/navbar"
import Header from "../components/header"
import About from "../components/about"
import Project from "../components/project"
import Contact from "../components/contect"

function home() {
  return (
    <>
    <Navbar />
    <Header />
    <main className="bg-[#f7f7f7]">
    <About />
    <Project />
    <Contact />
    </main>
    </>
  )
}

export default home