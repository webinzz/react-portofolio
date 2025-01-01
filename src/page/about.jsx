// import React from 'react'
import Navbar from "../components/navbar";
import Experience from "../components/experience";
import Skill from "../components/skill";

function home() {
  return (
    <>
      <Navbar />
      <main className="bg-[#f7f7f7]">

        {/* about */}
        <div className="flex justify-between min-h-screen w-full p-10 px-24 gap-16 items-center">
          <div className="w-1/3 bg-slate-400 h-[400px]">.</div>

          <div className="w-1/2">
            <h3 className="text-4xl font-semibold text-slate-600">
              Hello👋 i am{" "}
              <span className="text-sky-300">Ergia Buccharelli</span>
            </h3>
            <h3 className="mb-2 text-3xl font-medium text-slate-600">
              A Web Developer 🧑‍💻 in Indonesia🌏
            </h3>
            <p className="border-y-4 border-slate-300 py-2 mb-2">
              Hello everyone! I am Ergia buccharelli, a fullstack website
              developer. I am a intermediate experienced and I hope with this I
              can always learning something new to be able to invent digital
              applications that can help many people in the future. Could work
              independently or in a team.
            </p>

            <div className="w-full flex flex-wrap justify-start">
              <div className="border-sky-300 border p-6 w-1/3 mt-2 rounded shadow-sm text-center">
                <h3 className="text-4xl my-3 text-sky-300 font-semibold">2+</h3>
                <p className="text-slate-500">Years Of Experience</p>
              </div>
              <div className="border-sky-300 border w-1/3 p-6 mt-2 rounded shadow-sm text-center">
                <h3 className="text-4xl my-3 text-sky-300 font-semibold">
                  10+
                </h3>
                <p className="text-slate-500">Framework & Tech Stack Used</p>
              </div>
              <div className="border-sky-300 border w-1/3 p-6 mt-2 rounded shadow-sm text-center">
                <h3 className="text-4xl my-3 text-sky-300 font-semibold">
                  10+
                </h3>
                <p className="text-slate-500">Successed Projects</p>
              </div>
            </div>
          </div>
        </div>

        {/* experience */}
        <div className="flex justify-between w-full p-10  px-24 gap-10 min-h-screen">
          <div className="w-1/3 text-slate-700  flex-col flex ">
            <h1 className=" text-4xl font-bold ">Educations🎓</h1>
            <h1 className="text-sky-300 mb-2 text-4xl font-bold">
              and Awards🏆
            </h1>
            <p>
              There are some tech stack and tools that ive learned and
              experienced
            </p>
          </div>

          <div className="w-2/3 bg-white border-2 border-sky-400 shadow-xl rounded flex p-10 gap-8">
            {/* school */}
            <div className="w-1/2 flex flex-col gap-6">
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

            {/* school */}
            <div className="w-1/2 flex flex-col gap-6">
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
          </div>
        </div>

        {/* skill */}
        <div className="flex justify-between  w-full mt-10 p-10 px-24 gap-10 min-h-screen">
          <div className="w-2/3 h-max  bg-white border-2 border-sky-400 rounded shadow-xl grid grid-cols-4 p-8 py-12 items-start">
            <Skill title="HTML" status="advenced" />
            <Skill title="HTML" status="advenced" />
            <Skill title="HTML" status="advenced" />
            <Skill title="HTML" status="advenced" />
            <Skill title="HTML" status="advenced" />
            <Skill title="HTML" status="advenced" />
            <Skill title="HTML" status="advenced" />
            <Skill title="HTML" status="advenced" />
          </div>

          <div className="w-1/3 text-slate-700 text-end flex-col flex items-end">
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
