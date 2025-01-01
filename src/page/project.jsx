// import React from 'react'
import Navbar from "../components/navbar"
// import Project from "../components/project"
import Projec from "../components/projec"

function home() {
  return (
    <>
    <main className="bg-[#f7f7f7]">
    <Navbar />
    <div className="grid grid-cols-2 gap-6 p-20  min-h-screen items-start">
        <Projec />
        <Projec />
        <Projec />
        <Projec />
        <Projec />
    </div>
    </main>
    </>
  )
}

export default home
