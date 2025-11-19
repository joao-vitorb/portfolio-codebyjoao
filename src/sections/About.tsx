import React from "react";
import aboutPic from "../assets/about-pic.jpeg";

const About: React.FC = () => {
  return (
    <section id="about" className="px-6 pb-24 pt-16 lg:px-24 lg:pb-32 lg:pt-24">
      {/* Section title */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-7xl">
          About me
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
            I’m a 20-year-old developer and currently a Systems Analysis and
            Development student at Uniube. I first started a degree in
            Information Systems in 2023, and in 2025 I switched to Systems
            Analysis and Development to focus more on hands-on programming and
            building real projects. That decision made a big difference: instead
            of staying only in theory, I’ve been able to turn concepts into
            working applications and sharpen my skills with modern tools.
            <br />
            I care a lot about organizing the code, writing clean, maintainable
            code and creating interfaces that feel fast, intuitive, attractive
            and polished. I enjoy working on the front end, thinking about
            component structure, reusability, and user experience, while also
            understanding how data flows on the backend. I like collaborating
            with designers and other developers, discussing trade-offs, and
            breaking problems into small testable pieces. I like researching and
            experimenting new things and then sharing what I’ve learned with the
            others.
            <br />
            Feel free to explore my <strong>hard and soft skills</strong> by
            clicking the buttons below:
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
