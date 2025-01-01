// import React from 'react'

function contect() {
  return (
    <section id="contact" className="z-10 mx-auto min-h-screen w-full lg:flex justify-evenly items-center px-20">

    <div data-aos="fade-right"
    data-aos-offset="300"
    data-aos-easing="ease-in-sine" className="lg:w-1/2 p-6  lg:px-10"> 
      <h3 className="text-6xl text-slate-600 font-bold">Contact <span className="text-sky-300">Me</span></h3>

      <p className="mb-5 mt-2 text-lg text-slate-600">
      Get in touch for collaboration or inquiries.
      </p>

      <div className="  z-40 w-72  text-left flex  gap-4  text-white rounded-full ">            
          <div className="w-14 bg-white h-14 rounded-full hover:scale-110 shadow transition-all duration-100 flex justify-center items-center text-sky-400"><a href="" className="material-symbols-outlined">phone_in_talk</a></div>
          <div className="w-14 bg-white h-14 rounded-full hover:scale-110 shadow transition-all duration-100 flex justify-center items-center text-sky-400"><a href="" className="material-symbols-outlined">language</a></div>
          <div className="w-14 bg-white h-14 rounded-full hover:scale-110 shadow transition-all duration-100 flex justify-center items-center text-sky-400"><a href="" className="material-symbols-outlined">email</a></div>
          <div className="w-14 bg-white h-14 rounded-full hover:scale-110 shadow transition-all duration-100 flex justify-center items-center text-sky-400"><a href="" className="material-symbols-outlined">send</a></div>
        </div>


      

    </div>



    <div data-aos="zoom-in" className="md:w-1/2 bg-slate-500 relative   mx-auto group p-6  overflow-hidden rounded-md cursor-pointer flex justify-center  h-[34rem]">
       
    </div>
    
</section>
  )
}

export default contect
