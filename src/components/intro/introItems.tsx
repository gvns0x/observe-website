import styles from './Intro.module.css'
import styled from 'styled-components'

const IntroElement = styled.p`
    color: ${props => props.active ? "red" : "blue"};
    filter: blur(${props => props.scrollNumber > 300 ? "24" : "0" };


`

const introItems = [
    ({active, scrollNumber, itemIndex}) => <IntroElement itemIndex={itemIndex} scrollNumber={scrollNumber}>I want to know</IntroElement>,
    ({active, scrollNumber, itemIndex}) => <IntroElement scrollNumber={scrollNumber}>if this actually reads</IntroElement>,
    ({active, scrollNumber, itemIndex}) => <IntroElement scrollNumber={scrollNumber}>well, because</IntroElement>,
    ({active, scrollNumber, itemIndex}) => <IntroElement scrollNumber={scrollNumber}>I'm not so sure</IntroElement>,
    ({active, scrollNumber, itemIndex}) => <IntroElement scrollNumber={scrollNumber}>that as I scroll</IntroElement>,
    ({active, scrollNumber, itemIndex}) => <IntroElement scrollNumber={scrollNumber}>it really works</IntroElement>,
    ({active, scrollNumber, itemIndex}) => <IntroElement scrollNumber={scrollNumber}>7</IntroElement>,
    ({active, scrollNumber, itemIndex}) => <IntroElement scrollNumber={scrollNumber}>8</IntroElement>,
    ({active, scrollNumber, itemIndex}) => <IntroElement scrollNumber={scrollNumber}>9</IntroElement>,
    ({active, scrollNumber, itemIndex}) => <IntroElement scrollNumber={scrollNumber}>10</IntroElement>,
]

export default introItems