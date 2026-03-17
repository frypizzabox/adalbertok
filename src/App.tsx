import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="bg-soul-dark">
        <About />
      </div>
      {/* Projects */}
      {/* Contact */}
      {/* Footer */}
    </>
  )
}

export default App
