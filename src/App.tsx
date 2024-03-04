import { About } from "./components/About"
import { AppBar } from "./components/AppBar"
import { Contact } from "./components/Contact"
import { Projects } from "./components/Projects"
import { Skills } from "./components/Skills"
import './App.css';
import { Education } from "./components/Education"
import { Experience } from "./components/Experience"
import { Achievements } from "./components/Achievements"

function App() {

  return (
    <Main />
  )
}

function Main() {
  return <div className="mx-2 lg:mx-20">
    <AppBar />
    <About />
    <Education />
    <Projects />
    <Skills />
    <Experience />
    <Achievements/>
    <Contact />
  </div>
}

export default App
