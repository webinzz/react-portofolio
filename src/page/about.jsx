// import React from 'react'
import Navbar from "../components/navbar";
import Experience from "../components/experience";
import Skill from "../components/skill";
import me from '../assets/me/me3.png'


function home() {
  return (
    <>
      <Navbar />
      <main className="bg-white">

        {/* about */}
        <div className="flex md:flex-row flex-col justify-between min-h-screen w-full p-10 lg:px-24 md:px-5 gap-16 items-center">
          <div className="md:w-1/3 w-full bg-slate-400 h-[400px]" style={{ backgroundImage: `url(${me})`, backgroundSize: "cover" }}>.</div>

          <div className="md:w-1/2 ">
            <h3 className="md:text-4xl text-3xl font-semibold text-slate-600">
              Hello👋 i am{" "}
              <span className="text-sky-300">Ergia Buccharelli</span>
            </h3>
            <h3 className="mb-2 md:text-3xl text-2xl font-medium text-slate-600">
              A Web Developer 🧑‍💻 in Indonesia🌏
            </h3>
            <p className="border-y-4 border-slate-300 py-2 mb-2">
              Hello everyone! I am Ergia buccharelli, a fullstack website
              developer. I am a intermediate experienced and I hope with this I
              can always learning something new to be able to invent digital
              applications that can help many people in the future. Could work
              independently or in a team.
            </p>

            <div className="w-full flex md:flex-row flex-col flex-wrap justify-start">
              <div className="border-sky-300 border p-6 md:w-1/3 mt-2 rounded shadow-sm text-center">
                <h3 className="text-4xl my-3 text-sky-300 font-semibold">2+</h3>
                <p className="text-slate-500">Years Of Experience</p>
              </div>
              <div className="border-sky-300 border md:w-1/3 p-6 mt-2 rounded shadow-sm text-center">
                <h3 className="text-4xl my-3 text-sky-300 font-semibold">
                  10+
                </h3>
                <p className="text-slate-500">Framework & Tech Stack Used</p>
              </div>
              <div className="border-sky-300 border md:w-1/3 p-6 mt-2 rounded shadow-sm text-center">
                <h3 className="text-4xl my-3 text-sky-300 font-semibold">
                  10+
                </h3>
                <p className="text-slate-500">Successed Projects</p>
              </div>
            </div>
          </div>
        </div>

        {/* experience */}
        <div className="flex md:flex-row flex-col justify-between w-full p-10  lg:px-24 md:px-5 gap-10 min-h-screen">
          <div className="md:w-1/3 text-slate-700  flex-col flex ">
            <h1 className=" text-4xl font-bold ">Educations🎓</h1>
            <h1 className="text-sky-300 mb-2 text-4xl font-bold">
              and Awards🏆
            </h1>
            <p>
              There are some tech stack and tools that ive learned and
              experienced
            </p>
          </div>

          <div className="md:w-2/3 bg-white border-2 border-sky-400 shadow-xl rounded flex md:flex-row flex-col p-10 gap-8">
            {/* school */}
            <div className="md:w-1/2 flex flex-col gap-6">
              <h1 className="font-bold text-white px-5 -mb-2 p-2 bg-sky-300 rounded text-xl w-40 text-center">
                School
              </h1>
              <Experience
                title="SMK BAKTINUSANTARA 666"
                description="Softeare Enginer"
                year="2022 - 2025"
              />
              <Experience
                title="SMK BAKTINUSANTARA 666"
                description="Softeare Enginer"
                year="2022 - 2025"
              />
              <Experience
                title="SMK BAKTINUSANTARA 666"
                description="Softeare Enginer"
                year="2022 - 2025"
              />
            </div>

            {/* bootcamp */}
            <div className="md:w-1/2 flex flex-col gap-6">
              <h1 className="font-bold text-white px-5 -mb-2 p-2 bg-sky-300 rounded text-xl w-40 text-center">
                Bootcamp
              </h1>
              <Experience
                title="SMK BAKTINUSANTARA 666"
                description="Softeare Enginer"
                year="2022 - 2025"
              />
              <Experience
                title="SMK BAKTINUSANTARA 666"
                description="Softeare Enginer"
                year="2022 - 2025"
              />
              <Experience
                title="SMK BAKTINUSANTARA 666"
                description="Softeare Enginer"
                year="2022 - 2025"
              />
            </div>
          </div>
        </div>

        {/* skill */}
        <div className="flex md:flex-row flex-col-reverse justify-between  w-full mt-10 p-10 lg:px-24 md:px-5 gap-10 min-h-screen">
          <div className="md:w-2/3 h-max  bg-white border-2 border-sky-400 rounded shadow-xl grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 p-8 py-12 items-start">
            <Skill title="HTML" status="advenced" />
            <Skill title="HTML" status="advenced" />
            <Skill title="HTML" status="advenced" />
            <Skill title="HTML" status="advenced" />
            <Skill title="HTML" status="advenced" />
            <Skill title="HTML" status="advenced" />
            <Skill title="HTML" status="advenced" />
            <Skill title="HTML" status="advenced" />
          </div>

          <div className="md:w-1/3 text-slate-700 md:text-end text-start flex-col flex items-end">
            <h1 className=" text-4xl font-bold">Tech Stack⚙️</h1>
            <h1 className="text-sky-300 mb-2 text-4xl font-bold">
              And Tools🛠️
            </h1>
            <p>
              There are some tech stack and tools that ive learned and
              experienced
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

export default home;
