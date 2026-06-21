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
    ({scrollNumber, slotStart, itemIndex, nextSlotStart, step, blurInterval}) => <IntroElement slotStart={slotStart} scrollNumber={scrollNumber} itemIndex={itemIndex} nextSlotStart={nextSlotStart} step={step} blurInterval={blurInterval}>I want to know</IntroElement>,
    ({scrollNumber, slotStart, itemIndex, nextSlotStart, step, blurInterval}) => <IntroElement slotStart={slotStart} scrollNumber={scrollNumber} itemIndex={itemIndex} nextSlotStart={nextSlotStart} step={step} blurInterval={blurInterval}>if this actually reads</IntroElement>,
    ({scrollNumber, slotStart, itemIndex, nextSlotStart, step, blurInterval}) => <IntroElement slotStart={slotStart} scrollNumber={scrollNumber} itemIndex={itemIndex} nextSlotStart={nextSlotStart} step={step} blurInterval={blurInterval}>well, because</IntroElement>,
    ({scrollNumber, slotStart, itemIndex, nextSlotStart, step, blurInterval}) => <IntroElement slotStart={slotStart} scrollNumber={scrollNumber} itemIndex={itemIndex} nextSlotStart={nextSlotStart} step={step} blurInterval={blurInterval}>I'm not so sure</IntroElement>,
    ({scrollNumber, slotStart, itemIndex, nextSlotStart, step, blurInterval}) => <IntroElement slotStart={slotStart} scrollNumber={scrollNumber} itemIndex={itemIndex} nextSlotStart={nextSlotStart} step={step} blurInterval={blurInterval}>that as I scroll</IntroElement>,
    ({scrollNumber, slotStart, itemIndex, nextSlotStart, step, blurInterval}) => <IntroElement slotStart={slotStart} scrollNumber={scrollNumber} itemIndex={itemIndex} nextSlotStart={nextSlotStart} step={step} blurInterval={blurInterval}>it really works</IntroElement>,
    ({scrollNumber, slotStart, itemIndex, nextSlotStart, step, blurInterval}) => <IntroElement slotStart={slotStart} scrollNumber={scrollNumber} itemIndex={itemIndex} nextSlotStart={nextSlotStart} step={step} blurInterval={blurInterval}>7</IntroElement>,
    ({scrollNumber, slotStart, itemIndex, nextSlotStart, step, blurInterval}) => <IntroElement slotStart={slotStart} scrollNumber={scrollNumber} itemIndex={itemIndex} nextSlotStart={nextSlotStart} step={step} blurInterval={blurInterval}>8</IntroElement>,
    ({scrollNumber, slotStart, itemIndex, nextSlotStart, step, blurInterval}) => <IntroElement slotStart={slotStart} scrollNumber={scrollNumber} itemIndex={itemIndex} nextSlotStart={nextSlotStart} step={step} blurInterval={blurInterval}>9</IntroElement>,
    ({scrollNumber, slotStart, itemIndex, nextSlotStart, step, blurInterval}) => <IntroElement slotStart={slotStart} scrollNumber={scrollNumber} itemIndex={itemIndex} nextSlotStart={nextSlotStart} step={step} blurInterval={blurInterval}>10</IntroElement>,
]

export default introItems