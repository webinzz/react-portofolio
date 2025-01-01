// import React from 'react'
import {Link} from 'react-router-dom'
''

function Contact() {
  return (
    <section id="abouts" className="z-10 mx-auto min-h-screen w-full lg:flex justify-evenly items-center px-20">

    <div data-aos="fade-right"
    data-aos-offset="300"
    data-aos-easing="ease-in-sine" className="lg:w-1/2 p-6  lg:px-10"> 
      <h3 className="text-6xl text-slate-600 font-bold">About <span className="text-sky-300">Me</span></h3>

      <p className="mb-5 mt-2 text-lg text-slate-600">
      Learn more about my background and what drives me.
      </p>
      <Link to={'/about'} className="px-7 p-3 bg-sky-300 text-white rounded-lg">
        learn more
      </Link>


      

    </div>



    <div data-aos="zoom-in" className="md:w-1/2 relative   mx-auto group p-6  overflow-hidden rounded-md cursor-pointer flex justify-center  h-[34rem]">
        <div className="bg-slate-400 absolute w-56 h-56 top-6 left-20 hover:scale-105 transition-all "></div>
        <div className="bg-slate-400 absolute w-60 h-72 top-32 right-0 hover:scale-105 transition-all "></div>
        <div className="bg-slate-400 absolute w-72 h-56 bottom-6 left-9 hover:scale-105 transition-all "></div>
    </div>
    
</section>
  )
}

export default Contact
