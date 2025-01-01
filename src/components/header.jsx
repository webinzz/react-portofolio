// import React from 'react';
import "../index.css"
const Header = () => {


  return <>
   <div id="home" className="sticky -top-16 -z-10   text-center  h-screen overflow-hidden pt-28 bg-slate-100  flex flex-col justify-start items-center" >
        
        <h1 className="text-2xl text-slate-500 z-20">Hello world, my name is Ergia </h1>
        <h1 data-aos="fade-down" data-aos-easing="linear" data-aos-duration="500" className="lg:text-8xl text-[4rem]  text-transparent bg-clip-text outline-text font-bold z-20 ">FULLSTACK WEB</h1>
        <h1 data-aos="fade-down" data-aos-easing="linear" data-aos-duration="500" className="lg:text-8xl text-[4rem]  text-sky-300 font-bold z-20">DEVELOPER</h1>
  
  </div>
  {/* <div className="h-screen">.</div> */}
  </>
 
}

export default Header;
