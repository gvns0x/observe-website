import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import Intro from './components/intro/intro'

function App() {
  const [scrollNumber, setScrollNumber] = useState(0)

  useEffect(() => {
    function handleScroll() {
      setScrollNumber(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])


  return (
    <>
    <wrapper style={{height: "1500px"}}>
      <div style={{ position: "sticky", top: "50%" }}>
        <Intro scrollNumber={scrollNumber}/>
      </div>
      </wrapper>
    </>
  )
}

export default App
