function Navbar() {
  return (
    <header className="w-full fixed top-0 left-0 z-50 backdrop-blur border-b">
      <nav className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <span className="font-semibold text-lg">Code by Joao</span>

        <ul className="flex gap-4 text-sm">
          <li><a href="#hero" className="transition">Home</a></li>
          <li><a href="#about" className="transition">About</a></li>
          <li><a href="#projects" className="transition">Projects</a></li>
          <li><a href="#experience" className="transition">Experiences</a></li>
          <li><a href="#contact" className="transition">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar

