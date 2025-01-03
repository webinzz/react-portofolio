// import React from 'react'
import Navbar from "../components/navbar"
// import Project from "../components/project"
import Projec from "../components/projec"

function home() {
  return (
    <>
    <main className="bg-white">
    <Navbar />
    <div className="grid md:grid-cols-2 grid-cols-1 gap-6 p-5 pt-20 lg:p-20  min-h-screen items-start">
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
