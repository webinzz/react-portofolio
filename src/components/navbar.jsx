import { useState } from "react";
import { Link } from "react-router-dom";

 const navbar = () => {
    const [kondisi, setkon] = useState(true);

   const handleToggle = () => {
    setkon(!kondisi);
   }

    return <navbar className="w-screen fixed top-0 z-50 bg-[rgba(255,255,255,.3)]  flex items-center justify-between p-3 px-20">
        <h1 className="font- text-3xl text-sky-300 z-[99]">Ergia</h1>

        <button onClick={handleToggle} className="flex  flex-col  relative w-10 h-5 z-[99]">
            <div className={`w-full ${kondisi ? "rotate-0 bg-slate-500 top-0" : "rotate-45 bg-white bottom-0"}  absolute h-[.10rem] `}></div>
            <div className={`w-full ${kondisi ? "block" : "hidden"}  bg-slate-500 absolute h-[.10rem] top-1/2 -translate-y-1/2`}></div>
            <div className={`w-full ${kondisi ? "rotate-0 bg-slate-500" : "-rotate-45 bg-white"} bg-slate-500 absolute h-[.10rem] bottom-0`}></div>
        </button>
        <div className="fixed w-screen -top-5 left-0 h-12 -z-10 blur-2xl bg-white ">.</div>

        <div className={`absolute -translate-y-40 translate-x-40 transition-transform ${kondisi ? "hidden scale-0" : "flex scale-[400]"} w-10 h-10 rounded-full bg-slate-600 right-0 top-0  justify-center items-center z-40`}></div>
        
        <div className={` ${kondisi ? "hidden" : "flex"}  absolute  w-screen h-screen right-0 top-0  justify-center items-center z-50`}>
            <ul className="flex flex-col gap-4 justify-center items-center text-white">
                <h1 className="text-5xl font-bold mb-4">Menu</h1>
                <li><Link to="/" className="text-xl font-medium">Home</Link></li>
                <li><Link to="/about" className="text-xl font-medium">About</Link></li>
                <li><Link to="/project" className="text-xl font-medium">Project</Link></li>
                <li><Link to="/#contact" className="text-xl font-medium">Contact</Link></li>
            </ul>
        </div>


    </navbar>


}

export default navbar;
