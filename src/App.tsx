import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Experiences from './sections/Experiences'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

function App() {
  return (
    <div className="text-black min-h-screen">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <About />
        <Projects />
        <Experiences />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
