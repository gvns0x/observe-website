import React from 'react'
import styled from 'styled-components'

import Wrapper from '../components/Wrapper/Wrapper'

import HeroWatch from '../assets/herowatch.png'
import Logo from '../assets/logo.png'


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

    return (
        <Wrapper childStyle={{ alignItems: "center", justifyContent: "center", gap: "56px" }}>
            <div style={{display:"flex", flexDirection:"column", alignItems:"center", gap:"24px"}}>
                <img src={Logo} alt="Observe app logo, a marble circle" style={{width: "40px"}} />
                
                <HeroTitle>Apple Watch vibration guided meditation in 3 phases.</HeroTitle>
                <p>Coming soon</p>
            </div>
            <img src={HeroWatch} style={{width: "24vh"}} alt="Observe app in an Apple Watch. Shows a breakdown of the 3 different meditation phases: breath, body, and gratitude." />

        </Wrapper>
    )
}

export default Temporary