import React from 'react'
import styled from 'styled-components'

import Wrapper from '../components/Wrapper/Wrapper'

import HeroWatch from '../assets/herowatch.png'


const HeroTitle = styled.h1`
    line-height: 95%;
    background: linear-gradient(to bottom, #5B564A, #3C362C);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
`

const HeroBlock = styled.div`
    display:flex;
    flex-direction:row;
    gap: 32px;
    justify-content: center;
    align-items: center;
    font-size:16px;
`

function Temporary() {

    const heroImageStyle = {
        width: "24vh",
    }

    return(
        <Wrapper>
        <img src={HeroWatch} style={heroImageStyle}/>
            <HeroTitle>Apple Watch vibration guided meditation in 3 phases.</HeroTitle>
            <HeroBlock>
                <p>Breath</p>
                <p>Body</p>
                <p>Gratitude</p>
            </HeroBlock>
        </Wrapper>
    )
}

export default Temporary