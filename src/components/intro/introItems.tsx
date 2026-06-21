import styles from './Intro.module.css'
import styled from 'styled-components'

const IntroElement = styled.p`
    opacity: ${props => Math.min(1,1 - (props.scrollNumber - props.blurScrollStart) / 20)};
    transition: opacity .5s ease-out;
`

const introItems = [
    ({active, scrollNumber, itemIndex, blurScrollStart, blurScrollStop}) => <IntroElement blurScrollStart={blurScrollStart} scrollNumber={scrollNumber}>I want to know</IntroElement>,
    ({active, scrollNumber, itemIndex, blurScrollStart, blurScrollStop}) => <IntroElement blurScrollStart={blurScrollStart} scrollNumber={scrollNumber}>if this actually reads</IntroElement>,
    ({active, scrollNumber, itemIndex, blurScrollStart, blurScrollStop}) => <IntroElement blurScrollStart={blurScrollStart} scrollNumber={scrollNumber}>well, because</IntroElement>,
    ({active, scrollNumber, itemIndex, blurScrollStart, blurScrollStop}) => <IntroElement blurScrollStart={blurScrollStart} scrollNumber={scrollNumber}>I'm not so sure</IntroElement>,
    ({active, scrollNumber, itemIndex, blurScrollStart, blurScrollStop}) => <IntroElement blurScrollStart={blurScrollStart} scrollNumber={scrollNumber}>that as I scroll</IntroElement>,
    ({active, scrollNumber, itemIndex, blurScrollStart, blurScrollStop}) => <IntroElement blurScrollStart={blurScrollStart} scrollNumber={scrollNumber}>it really works</IntroElement>,
    ({active, scrollNumber, itemIndex, blurScrollStart, blurScrollStop}) => <IntroElement blurScrollStart={blurScrollStart} scrollNumber={scrollNumber}>7</IntroElement>,
    ({active, scrollNumber, itemIndex, blurScrollStart, blurScrollStop}) => <IntroElement blurScrollStart={blurScrollStart} scrollNumber={scrollNumber}>8</IntroElement>,
    ({active, scrollNumber, itemIndex, blurScrollStart, blurScrollStop}) => <IntroElement blurScrollStart={blurScrollStart} scrollNumber={scrollNumber}>9</IntroElement>,
    ({active, scrollNumber, itemIndex, blurScrollStart, blurScrollStop}) => <IntroElement blurScrollStart={blurScrollStart} scrollNumber={scrollNumber}>10</IntroElement>,
]

export default introItems