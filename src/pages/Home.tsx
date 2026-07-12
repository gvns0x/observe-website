import { useState, useEffect } from 'react'
import '../App.css'

import Intro from '../components/intro/intro'
import itemsData from '../components/intro/introItems'

function Home() {
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
    startPosition: 0,
    // Show next item after 200px scroll
    step: 220,
    blurInterval: 50
  }

  return (
    <>
      <div className='wrapper' style={{ height: `calc(100vh + 20px + ${introScrollDetails.blurInterval}px + ${introScrollDetails.startPosition}px + ${(itemsData.length - 1) * introScrollDetails.step}px)` }}>
        <div style={{ position: "sticky", top: "50%" }}>
          <Intro
            scrollNumber={scrollNumber}
            startPosition={introScrollDetails.startPosition}
            step={introScrollDetails.step}
            blurInterval={introScrollDetails.blurInterval}
            />
            
        </div>
      </div>
      <div className="wrapper" style={{zIndex: "2", height:"200px", backgroundColor:"red"}}></div>
    </>
  )
}

export default Home
