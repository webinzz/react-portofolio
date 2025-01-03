// import React from 'react'
import { Link } from "react-router-dom";

function project() {
  return (
    <section
      id="project"
      className=" z-10 mx-auto min-h-screen w-full md:flex xl:gap-16 justify-between items-center md:px-10 lg:px-20 py-32 md:py-0"
    >
      <div className="md:w-1/2 md:p-6 h-40 lg:px-10 md:text-start text-center mb-10 ">
        <h3 data-aos="fade-right" className="text-6xl text-slate-600 font-bold">
          My <span className="text-sky-300">Project</span>
        </h3>

        <p className="mb-5 mt-2 text-lg text-slate-600">
          Explore the projects I’ve completed and the technologies I use
        </p>
        <Link
          to={"/project"}
          className="px-5 p-2 bg-slate-600 text-white rounded-lg"
        >
          VIew Project
        </Link>
      </div>

      <div
        data-aos="zoom-in"
        className="md:w-3/5 lg:w-1/2 w-full relative border-8 border-dashed group md:p-6   overflow-hidden rounded-md cursor-pointer   h-[34rem]"
      >
        <div className="absolute flex gap-3 -top-4 -left-72 -rotate-45">
          <div className="w-60 h-40 bg-white" >.</div>
          <div className="w-60 h-40 bg-white" >.</div>
          <div className="w-60 h-40 bg-white" >.</div>
        </div> 
        <div className="absolute flex gap-3 top-20 -left-96 -rotate-45">
          <div className="w-60 h-44 bg-white" >.</div>
          <div className="w-60 h-44 bg-white" >.</div>
          <div className="w-60 h-44 bg-white" >.</div>
          <div className="w-60 h-44 bg-white" >.</div>
          <div className="w-60 h-44 bg-white" >.</div>
        </div>
        <div className="absolute flex gap-3 -left-40 top-2  -rotate-45">
          <div className="w-60 h-44 bg-white" >.</div>
          <div className="w-60 h-44 bg-white" >.</div>
          <div className="w-60 h-44 bg-white" >.</div>
          <div className="w-60 h-44 bg-white" >.</div>
          <div className="w-60 h-44 bg-white" >.</div>
          <div className="w-60 h-44 bg-white" >.</div>
        </div>
        <div className="absolute flex gap-3  top-28  -rotate-45">
          <div className="w-60 h-44 bg-white" >.</div>
          <div className="w-60 h-44 bg-white" >.</div>
          <div className="w-60 h-44 bg-white" >.</div>
          <div className="w-60 h-44 bg-white" >.</div>
          <div className="w-60 h-44 bg-white" >.</div>
          <div className="w-60 h-44 bg-white" >.</div>
        </div>

      </div>
    </section>
  );
}

export default project;
