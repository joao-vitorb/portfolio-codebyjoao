import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="flex min-h-[85vh] flex-col justify-center"
    >
      {/* Main hero card with dotted background */}
      {/* TODO: animate the dots subtly on hover or on scroll */}
      <div
        className="mx-6 mt-24 rounded-3xl bg-gray-200 lg:mx-24"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(148,163,184,0.8) 2px, transparent 2px)",
          backgroundSize: "22px 22px",
        }}
      >
        <div className="flex min-h-[24rem] items-center justify-center px-6 text-center sm:min-h-[26rem] sm:px-10 lg:min-h-[40rem] lg:px-24">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-7xl">
              <span className="font-bold text-blue-600">I'm</span>{" "}
              Joao Vitor Borges
            </h1>

            <p className="mt-5 text-sm font-semibold text-gray-800 sm:text-base lg:text-xl">
              Developer passionate about creating exceptional digital experiences
            </p>

            {/* Call-to-action buttons */}
            {/* TODO: connect "Let's talk" to the contact section (smooth scroll or modal) */}
            {/* TODO: connect "Download CV" to a real CV file download */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-3 text-sm font-semibold text-white"
              >
                Let's talk
              </button>

              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full border border-gray-900 px-8 py-3 text-sm font-semibold text-gray-900 bg-transparent"
              >
                Download CV
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint at the bottom of the hero */}
      {/* TODO: add a small scroll animation (e.g. bouncing arrow or fade-in effect) */}
      <div className="mt-4 flex items-center justify-center px-6 pb-16 lg:px-24">
        <div className="h-[2px] flex-1 bg-black" />
        <span className="mx-6 font-bold uppercase tracking-[0.15em] text-center">
          Scroll to explore
        </span>
        <div className="h-[2px] flex-1 bg-black" />
      </div>
    </section>
  );
};

export default Hero;
