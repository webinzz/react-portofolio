// import React from 'react'
import {Link} from 'react-router-dom'

function project() {
  return (
    <section id="abouts" className=" mx-auto min-h-screen w-full lg:flex justify-evenly items-center px-20">

    <div data-aos="fade-right"
    data-aos-offset="300"
    data-aos-easing="ease-in-sine" className="lg:w-1/2 p-6  lg:px-10"> 
      <h3 className="text-6xl  text-sky-300 font-bold">My <span className="text-slate-600">Project</span></h3>

      <p className="mb-5 mt-2 text-lg text-slate-600">Explore the projects I’ve completed and the technologies I use
      </p>
      <Link to={"project"} className="px-7 p-3 bg-sky-300 text-white rounded-lg">
      View Projects
      </Link>


      

    </div>



    <div data-aos="zoom-in" className="md:w-1/2 relative   mx-auto group p-6  overflow-hidden rounded-md cursor-pointer flex justify-center  h-[34rem]">
        <div className="bg-slate-400 absolute w-96 h-56 top-6 left-5 hover:scale-105 hover:z-40 transition-all "></div>
        <div className="bg-slate-500 absolute w-96 h-56 top-32 right-0 hover:scale-105 hover:z-40 transition-all "></div>
        <div className="bg-slate-600 absolute w-96 h-56 bottom-6 left-16 hover:scale-105 hover:z-40 transition-all "></div>
    </div>
    
</section>
  )
}

export default project
