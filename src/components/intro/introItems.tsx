import React, { useState } from 'react'
import styles from './Intro.module.css'
import styled from 'styled-components'

import Vibration from '../Vibration/Vibration'

const IntroElement = styled.div`
    opacity: ${props => Math.min(1,(props.scrollNumber - props.slotStart) / 20 )};
    filter: blur(${props => props.scrollNumber < (props.step * props.itemIndex + (props.nextSlotStart - props.slotStart)/2)
        ? (((props.slotStart+props.blurInterval) - props.scrollNumber)/(props.blurInterval*1.5))
        : 0}px);
    transition: all .3s ease-out;
    
`
// VibrationGroup lets me set how many vibrations I want, and handles animation state
function VibrationGroup({amount = 1}) {
    const [activeIndex, setActiveIndex] = useState(0)

    // Moves the index of the vibration that will animate to the next one
    function handleComplete() {
        setActiveIndex(prev => {
            if(prev < amount - 1) {
                return prev + 1
            }
            return prev
        })
    }
    
    // Builds array, sets active against state, and prepares to run handleComplete
    // when onComplete is called in the Component
    return (
        <div style={{display:"inline-flex", gap: "4px", marginLeft:"4px"}}>
        {Array.from({length: amount}, (_,i) => (
        <Vibration
            key={i}
            active={i === activeIndex}
            onComplete={handleComplete}
        />
    ))}
    </div>
)
}

const introItems = [
    ({scrollNumber, slotStart, itemIndex, nextSlotStart, step, blurInterval}) => <IntroElement slotStart={slotStart} scrollNumber={scrollNumber} itemIndex={itemIndex} nextSlotStart={nextSlotStart} step={step} blurInterval={blurInterval}>Vibration guided meditation.</IntroElement>,
    ({scrollNumber, slotStart, itemIndex, nextSlotStart, step, blurInterval}) => <IntroElement slotStart={slotStart} scrollNumber={scrollNumber} itemIndex={itemIndex} nextSlotStart={nextSlotStart} step={step} blurInterval={blurInterval}>1 vibration {<VibrationGroup/>}</IntroElement>,
    ({scrollNumber, slotStart, itemIndex, nextSlotStart, step, blurInterval}) => <IntroElement slotStart={slotStart} scrollNumber={scrollNumber} itemIndex={itemIndex} nextSlotStart={nextSlotStart} step={step} blurInterval={blurInterval}>Focus on your breath</IntroElement>,
    ({scrollNumber, slotStart, itemIndex, nextSlotStart, step, blurInterval}) => <IntroElement slotStart={slotStart} scrollNumber={scrollNumber} itemIndex={itemIndex} nextSlotStart={nextSlotStart} step={step} blurInterval={blurInterval}>2 vibrations {<VibrationGroup amount={2}/>}</IntroElement>,
    ({scrollNumber, slotStart, itemIndex, nextSlotStart, step, blurInterval}) => <IntroElement slotStart={slotStart} scrollNumber={scrollNumber} itemIndex={itemIndex} nextSlotStart={nextSlotStart} step={step} blurInterval={blurInterval}>Switch the attention to your body</IntroElement>,
    ({scrollNumber, slotStart, itemIndex, nextSlotStart, step, blurInterval}) => <IntroElement slotStart={slotStart} scrollNumber={scrollNumber} itemIndex={itemIndex} nextSlotStart={nextSlotStart} step={step} blurInterval={blurInterval}>3 vibrations {<VibrationGroup amount={3}/>}</IntroElement>,
    ({scrollNumber, slotStart, itemIndex, nextSlotStart, step, blurInterval}) => <IntroElement slotStart={slotStart} scrollNumber={scrollNumber} itemIndex={itemIndex} nextSlotStart={nextSlotStart} step={step} blurInterval={blurInterval}>Express gratefulness</IntroElement>,
    ({scrollNumber, slotStart, itemIndex, nextSlotStart, step, blurInterval}) => <IntroElement slotStart={slotStart} scrollNumber={scrollNumber} itemIndex={itemIndex} nextSlotStart={nextSlotStart} step={step} blurInterval={blurInterval}>Last vibration {<VibrationGroup/>}</IntroElement>,
    ({scrollNumber, slotStart, itemIndex, nextSlotStart, step, blurInterval}) => <IntroElement slotStart={slotStart} scrollNumber={scrollNumber} itemIndex={itemIndex} nextSlotStart={nextSlotStart} step={step} blurInterval={blurInterval}>Done.</IntroElement>,
]

export default introItems