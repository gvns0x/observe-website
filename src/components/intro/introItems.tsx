import styles from './Intro.module.css'
import styled from 'styled-components'

const IntroElement = styled.p`
    opacity: ${props => Math.min(1,(props.scrollNumber - props.slotStart) / 20 )};
    filter: blur(${props => props.scrollNumber < (props.step * props.itemIndex + (props.nextSlotStart - props.slotStart)/2)
        ? (props.scrollNumber - props.nextSlotStart/1.5)/200
        : 0}px);
    transition: opacity .3s ease-out;
`


const introItems = [
    ({scrollNumber, slotStart, itemIndex, nextSlotStart, step}) => <IntroElement slotStart={slotStart} scrollNumber={scrollNumber} itemIndex={itemIndex} nextSlotStart={nextSlotStart} step={step}>I want to know</IntroElement>,
    ({scrollNumber, slotStart, itemIndex, nextSlotStart, step}) => <IntroElement slotStart={slotStart} scrollNumber={scrollNumber} itemIndex={itemIndex} nextSlotStart={nextSlotStart} step={step}>if this actually reads</IntroElement>,
    ({scrollNumber, slotStart, itemIndex, nextSlotStart, step}) => <IntroElement slotStart={slotStart} scrollNumber={scrollNumber} itemIndex={itemIndex} nextSlotStart={nextSlotStart} step={step}>well, because</IntroElement>,
    ({scrollNumber, slotStart, itemIndex, nextSlotStart, step}) => <IntroElement slotStart={slotStart} scrollNumber={scrollNumber} itemIndex={itemIndex} nextSlotStart={nextSlotStart} step={step}>I'm not so sure</IntroElement>,
    ({scrollNumber, slotStart, itemIndex, nextSlotStart, step}) => <IntroElement slotStart={slotStart} scrollNumber={scrollNumber} itemIndex={itemIndex} nextSlotStart={nextSlotStart} step={step}>that as I scroll</IntroElement>,
    ({scrollNumber, slotStart, itemIndex, nextSlotStart, step}) => <IntroElement slotStart={slotStart} scrollNumber={scrollNumber} itemIndex={itemIndex} nextSlotStart={nextSlotStart} step={step}>it really works</IntroElement>,
    ({scrollNumber, slotStart, itemIndex, nextSlotStart, step}) => <IntroElement slotStart={slotStart} scrollNumber={scrollNumber} itemIndex={itemIndex} nextSlotStart={nextSlotStart} step={step}>7</IntroElement>,
    ({scrollNumber, slotStart, itemIndex, nextSlotStart, step}) => <IntroElement slotStart={slotStart} scrollNumber={scrollNumber} itemIndex={itemIndex} nextSlotStart={nextSlotStart} step={step}>8</IntroElement>,
    ({scrollNumber, slotStart, itemIndex, nextSlotStart, step}) => <IntroElement slotStart={slotStart} scrollNumber={scrollNumber} itemIndex={itemIndex} nextSlotStart={nextSlotStart} step={step}>9</IntroElement>,
    ({scrollNumber, slotStart, itemIndex, nextSlotStart, step}) => <IntroElement slotStart={slotStart} scrollNumber={scrollNumber} itemIndex={itemIndex} nextSlotStart={nextSlotStart} step={step}>10</IntroElement>,
]

export default introItems