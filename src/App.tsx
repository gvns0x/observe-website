import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import Intro from './components/intro/intro'
import itemsData from './components/intro/introItems'

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


  const introScrollDetails = {
    // Start showing items when scroll is 10px
    startPosition: 10,
    // Show next item after 200px scroll
    step: 200,
    
  }

  return (
    <>
      <div className='wrapper' style={{ height: `calc(100vh + 20px + ${introScrollDetails.startPosition}px + ${(itemsData.length - 1) * introScrollDetails.step}px)` }}>
        <div style={{ position: "sticky", top: "50%" }}>
          <Intro
            scrollNumber={scrollNumber}
            startPosition={introScrollDetails.startPosition}
            step={introScrollDetails.step} />
        </div>
      </div>
    </>
  )
}

export default App
