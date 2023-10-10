import './App.css'
import { Routes, Route } from "react-router-dom"
import Nav from './components/Nav/Nav'
import Home from "./components/Home/Home"
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Work from './components/Work/Work'
import Contact from './components/Contact/Contact'

function App() {

  return (
    <>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path='/skills' element={<Skills/>} />
        <Route path='/work' element={<Work/>} />
        <Route path='/contact' element={<Contact/>} />
        
      </Routes>
    </>
  )
}

export default App
