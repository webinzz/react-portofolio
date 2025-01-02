// import React from 'react';
import "../index.css"
const Header = () => {


  return <>
   <div id="home" className="sticky -top-16 -z-10   text-center  h-screen overflow-hidden -mt-10 px-24 bg-slate-50  flex items-center" >
        <div className="w-1/2 text-start text-slate-600" >
        <h3 className="text-3xl font-semibold">Hello World( );</h3>
        <h1 className="text-5xl font-bold">
          I am <span className="text-sky-300">Ergia Buccharelli</span>
        </h1>
          <div id="app"></div>
        <p className="text-lg">
          Some quick example text to build on the card title and make up the
          bulk of the cards content.
        </p>
        </div>

  </div>
  </>
 
}

export default Header;
