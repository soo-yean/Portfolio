import React from "react";
import Illustration from "../components/Illustration";

const Home = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center">
      <div className="w-64 h-64 md:w-96 md:h-96 mb-25">
        <Illustration variant="happy" />
      </div>

      <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
        Hi, I'm <span className="text-blue-400">Soo</span>.
      </h1>

      <div className="max-w-4xl mx-auto space-y-6">
        <p className="text-xl md:text-2xl text-gray-600 font-serif leading-relaxed">
          I turn ideas into digital experiences that spark joy with every click!
        </p>

        {/* <div className="flex justify-center gap-4 pt-8">
          <a href="/projects" className="px-8 py-3 bg-black text-white rounded-full font-bold hover:bg-gray-800 transition-colors">
            See my work
          </a>
          <a href="/assets" className="px-8 py-3 border-2 border-black rounded-full font-bold hover:bg-gray-50 transition-colors">
            More about me
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default Home;
