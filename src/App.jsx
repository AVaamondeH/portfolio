import './utils/variables.css'
import './App.css'
import { Routes, Route } from "react-router-dom"
import { useSelector } from 'react-redux'
import Nav from './components/Nav/Nav'
import Home from "./components/Home/Home"
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Work from './components/Work/Work'
import Contact from './components/Contact/Contact'
import { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion';


function App() {
  const { theme } = useSelector(state => state.theme)
  const ref = useRef(null)
  const isInView = useInView(ref, {once: true});

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);

  return (
    <>
    <div ref={ref}>
        <motion.div 
        className={`app ${theme}`} 
        variants={{
          hidden: {opacity: 0, y: 75 },
          visible: {opacity: 1, y: 0},
        }}
        initial="hidden"
        animate={mainControls}
        transition={{duration: 0.5, delay: 0.25,}}
        >
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path='/skills' element={<Skills />} />
            <Route path='/work' element={<Work />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </motion.div>
    </div>
    </>
  )
}

export default App
