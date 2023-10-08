import './App.css'
import { Routes, Route } from "react-router-dom"
import Nav from './components/Nav/Nav'
import Home from "./components/Home/Home"

function App() {

  return (
    <>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </>
  )
}

export default App
