import { useState } from 'react'
import styled from 'styled-components'

import Vibration from '../Vibration/Vibration'

type IntroElementAttrs = {
    $firstItem?: boolean
    $scrollNumber: number
    $slotStart: number
    $itemIndex: number
    $nextSlotStart: number
    $step: number
    $blurInterval: number
}

function getOpacity({ $firstItem, $scrollNumber, $slotStart }: IntroElementAttrs) {
    if ($firstItem) return 1
    return Math.min(1, ($scrollNumber - $slotStart) / 20)
}

function getBlur({ $firstItem, $scrollNumber, $slotStart, $itemIndex, $nextSlotStart, $step, $blurInterval }: IntroElementAttrs) {
    if ($firstItem) return 0
    const midpoint = $step * $itemIndex + ($nextSlotStart - $slotStart) / 2
    if ($scrollNumber >= midpoint) return 0
    return (($slotStart + $blurInterval) - $scrollNumber) / ($blurInterval * 1.5)
}

const IntroElement = styled.div.attrs<IntroElementAttrs>(props => ({
    style: {
        opacity: getOpacity(props),
        filter: `blur(${getBlur(props)}px)`,
    },
}))`
    transition: all 0.3s ease-out;
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
    (props) => <IntroElement {...props} $firstItem={props.$itemIndex === 0}> Apple Watch vibration guided meditation in 33 phases.</IntroElement>,
    (props) => <IntroElement {...props} $firstItem={props.$itemIndex === 0}><div>1 vibration {<VibrationGroup/>}</div> Focus on your breath</IntroElement>,
    (props) => <IntroElement {...props} $firstItem={props.$itemIndex === 0}><div>2 vibrations {<VibrationGroup amount={2}/>}</div>Switch the attention to your body</IntroElement>,
    (props) => <IntroElement {...props} $firstItem={props.$itemIndex === 0}><div>3 vibrations {<VibrationGroup amount={3}/>}</div>Express gratefulness</IntroElement>,
    (props) => <IntroElement {...props} $firstItem={props.$itemIndex === 0}>Done {<VibrationGroup/>}</IntroElement>,
]

export default introItems