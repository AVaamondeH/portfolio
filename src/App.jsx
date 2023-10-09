import './App.css'
import { Routes, Route } from "react-router-dom"
import Nav from './components/Nav/Nav'
import Home from "./components/Home/Home"
import About from './components/About/About'

function App() {

  return (
    <>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </>
  )
}

export default App
