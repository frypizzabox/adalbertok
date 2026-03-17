import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Projects } from './components/Projects'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="bg-soul-dark">
        <About />
        <div className="border-t border-soul-ash max-w-4xl mx-auto" />
        <Projects />
      </div>
      {/* Contact */}
      {/* Footer */}
    </>
  )
}

export default App
