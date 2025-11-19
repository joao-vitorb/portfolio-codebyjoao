function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-slate-900 pt-20">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-sky-400 mb-4">
          Developer
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Hello, my name is Joao <br /> Subtext
        </h1>
        <p className="text-slate-300 max-w-xl mx-auto mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <button className="px-6 py-2 rounded-md bg-sky-500 hover:bg-sky-400 font-medium">
            Projects
          </button>
          <button className="px-6 py-2 rounded-md border border-slate-600 hover:border-sky-400">
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
