import styles from './Intro.module.css'
import styled from 'styled-components'

const IntroElement = styled.p`
    opacity: ${props => Math.min(1,(props.scrollNumber - props.slotStart) / 20 )};
    filter: blur(${props => props.scrollNumber < (props.step * props.itemIndex + (props.nextSlotStart - props.slotStart)/2)
        ? (((props.slotStart+props.blurInterval) - props.scrollNumber)/(props.blurInterval*1.5))
        : 0}px);
    transition: all .3s ease-out;
`


const introItems = [
    ({scrollNumber, slotStart, itemIndex, nextSlotStart, step, blurInterval}) => <IntroElement slotStart={slotStart} scrollNumber={scrollNumber} itemIndex={itemIndex} nextSlotStart={nextSlotStart} step={step} blurInterval={blurInterval}>Vibration guided meditation.</IntroElement>,
    ({scrollNumber, slotStart, itemIndex, nextSlotStart, step, blurInterval}) => <IntroElement slotStart={slotStart} scrollNumber={scrollNumber} itemIndex={itemIndex} nextSlotStart={nextSlotStart} step={step} blurInterval={blurInterval}>1 vibration PZZ</IntroElement>,
    ({scrollNumber, slotStart, itemIndex, nextSlotStart, step, blurInterval}) => <IntroElement slotStart={slotStart} scrollNumber={scrollNumber} itemIndex={itemIndex} nextSlotStart={nextSlotStart} step={step} blurInterval={blurInterval}>Focus on your breath</IntroElement>,
    ({scrollNumber, slotStart, itemIndex, nextSlotStart, step, blurInterval}) => <IntroElement slotStart={slotStart} scrollNumber={scrollNumber} itemIndex={itemIndex} nextSlotStart={nextSlotStart} step={step} blurInterval={blurInterval}>2 vibrations PZZ PZZ</IntroElement>,
    ({scrollNumber, slotStart, itemIndex, nextSlotStart, step, blurInterval}) => <IntroElement slotStart={slotStart} scrollNumber={scrollNumber} itemIndex={itemIndex} nextSlotStart={nextSlotStart} step={step} blurInterval={blurInterval}>Switch the attention to your body</IntroElement>,
    ({scrollNumber, slotStart, itemIndex, nextSlotStart, step, blurInterval}) => <IntroElement slotStart={slotStart} scrollNumber={scrollNumber} itemIndex={itemIndex} nextSlotStart={nextSlotStart} step={step} blurInterval={blurInterval}>3 vibrations PZZ PZZ PZZ</IntroElement>,
    ({scrollNumber, slotStart, itemIndex, nextSlotStart, step, blurInterval}) => <IntroElement slotStart={slotStart} scrollNumber={scrollNumber} itemIndex={itemIndex} nextSlotStart={nextSlotStart} step={step} blurInterval={blurInterval}>Express gratefulness</IntroElement>,
    ({scrollNumber, slotStart, itemIndex, nextSlotStart, step, blurInterval}) => <IntroElement slotStart={slotStart} scrollNumber={scrollNumber} itemIndex={itemIndex} nextSlotStart={nextSlotStart} step={step} blurInterval={blurInterval}>Last vibration</IntroElement>,
    ({scrollNumber, slotStart, itemIndex, nextSlotStart, step, blurInterval}) => <IntroElement slotStart={slotStart} scrollNumber={scrollNumber} itemIndex={itemIndex} nextSlotStart={nextSlotStart} step={step} blurInterval={blurInterval}>Done.</IntroElement>,
]

export default introItems