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
    margin:0;
`

const HeroBlock = styled.div`
    display:flex;
    flex-direction:row;
    gap: 32px;
    justify-content: center;
    align-items: center;
    font-size:16px;
    color: #91877A;
`

function Temporary() {

    const heroImageStyle = {
        width: "24vh",
    }

    return (
        <Wrapper style={{alignItems:"center"}}>
            
            <div style={{display:"flex", flexDirection:"column", gap:"16px"}}>
            <HeroBlock>
                    <p>Breath</p>
                    <p>Body</p>
                    <p>Gratitude</p>
                </HeroBlock>
                <HeroTitle>Apple Watch vibration guided meditation in 3 phases.</HeroTitle>
                
            </div>
            <img src={HeroWatch} style={heroImageStyle} />
        </Wrapper>
    )
}

export default Temporary