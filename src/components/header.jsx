// import React from 'react';
import "../index.css"
import img1 from "../assets/me/hero1.png"
// import Typewriter from 'typewriter-effect';
import bgimg from '../assets/bg.png'
const Header = () => {


  return <>
   <div id="header" className="sticky  -top-32 -z-10  text-center  h-[110vh] overflow-hidden -mt-10 md:px-24 px-10 flex md:flex-row flex-col-reverse items-center  justify-center md:gap-20"  style={{ backgroundImage: `url(${bgimg})`, backgroundSize: "cover" }} >
        <div className="md:w-2/3  text-center md:text-start text-slate-500 bg-white px-4" >
        <h3 className="lg:text-3xl  text-2xl font-semibold ">Hello World( );</h3>
        <h1 className="lg:text-7xl md:text-6xl text-3xl font-bold mb-2">
          I am <span className="text-sky-300">Ergia </span>Buccharelli
        </h1>
        <h1 className="md:text-3xl text-xl font-bold mb-2">
          a Fullstack <span >Website Developer</span>
        </h1>

        <p className="text-lg">
          Some quick example text to build on the card title and make up the
          bulk of the cards content.
        </p>
        </div>

        <div className="w-2/3 md:min-w-96 min-w-60 flex justify-center items-center relative overflow-hidden ">
            <img src={`${img1}`}  alt="" className="w-[90%] " />
        </div>

  </div>
  </>
 
}

export default Header;
