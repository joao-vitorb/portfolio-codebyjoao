import React from "react";
import aboutPic from "../assets/about-pic.jpeg";

const About: React.FC = () => {
  return (
    <section id="about" className="px-6 pb-24 pt-16 lg:px-24 lg:pb-32 lg:pt-24">
      {/* Section title */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-5xl">
          about me
        </h2>
      </div>

      {/* Main content */}
      <div className="flex w-full flex-col gap-10 md:flex-row md:items-center">
        {/* Left: portrait */}
        <div className="w-full md:max-w-3xl">
          <img
            src={aboutPic}
            alt="Portrait of João Vitor Borges"
            className="w-full h-auto rounded-3xl shadow-sm"
          />
        </div>

        {/* Right: description + buttons */}
        <div className="space-y-6 text-gray-800 md:flex-1 md:ml-12">
          <p className="text-sm leading-relaxed sm:text-base lg:text-lg">
            I am a developer passionate about building digital experiences that
            feel smooth, modern, and meaningful. I enjoy working with frontend
            technologies like React and TypeScript, while also understanding how
            things work on the backend side.
          </p>

          <p className="text-sm leading-relaxed sm:text-base lg:text-lg">
            My focus is on writing clean, maintainable code and turning ideas
            into real products. I am always learning new tools, patterns, and
            best practices to deliver better experiences for users.
          </p>

          {/* TODO: open a modal listing hard skills */}
          {/* TODO: open a modal listing soft skills */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full bg-gray-800 px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white"
              onClick={() => {
                // TODO: handle opening hard skills modal
                console.log("Open hard skills modal");
              }}
            >
              hard skills
            </button>

            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full border border-gray-800 px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-gray-800"
              onClick={() => {
                // TODO: handle opening soft skills modal
                console.log("Open soft skills modal");
              }}
            >
              soft skills
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
