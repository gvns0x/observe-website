import styles from './Intro.module.css'
import styled from 'styled-components'

const IntroElement = styled.p`
    opacity: ${props => Math.min(1,(props.scrollNumber - props.slotStart) / 20 )};
    transition: opacity .3s ease-out;
`

const introItems = [
    ({scrollNumber, slotStart, itemIndex}) => <IntroElement slotStart={slotStart} scrollNumber={scrollNumber} itemIndex={itemIndex}>I want to know</IntroElement>,
    ({scrollNumber, slotStart, itemIndex}) => <IntroElement slotStart={slotStart} scrollNumber={scrollNumber} itemIndex={itemIndex}>if this actually reads</IntroElement>,
    ({scrollNumber, slotStart, itemIndex}) => <IntroElement slotStart={slotStart} scrollNumber={scrollNumber} itemIndex={itemIndex}>well, because</IntroElement>,
    ({scrollNumber, slotStart, itemIndex}) => <IntroElement slotStart={slotStart} scrollNumber={scrollNumber} itemIndex={itemIndex}>I'm not so sure</IntroElement>,
    ({scrollNumber, slotStart, itemIndex}) => <IntroElement slotStart={slotStart} scrollNumber={scrollNumber} itemIndex={itemIndex}>that as I scroll</IntroElement>,
    ({scrollNumber, slotStart, itemIndex}) => <IntroElement slotStart={slotStart} scrollNumber={scrollNumber} itemIndex={itemIndex}>it really works</IntroElement>,
    ({scrollNumber, slotStart, itemIndex}) => <IntroElement slotStart={slotStart} scrollNumber={scrollNumber} itemIndex={itemIndex}>7</IntroElement>,
    ({scrollNumber, slotStart, itemIndex}) => <IntroElement slotStart={slotStart} scrollNumber={scrollNumber} itemIndex={itemIndex}>8</IntroElement>,
    ({scrollNumber, slotStart, itemIndex}) => <IntroElement slotStart={slotStart} scrollNumber={scrollNumber} itemIndex={itemIndex}>9</IntroElement>,
    ({scrollNumber, slotStart, itemIndex}) => <IntroElement slotStart={slotStart} scrollNumber={scrollNumber} itemIndex={itemIndex}>10</IntroElement>,
]

export default introItems