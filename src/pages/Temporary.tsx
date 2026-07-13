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
    max-width: 640px;
`

const FixedHeader = styled.div`
    position:fixed;
    top:0;
    padding: 24px 0px;
`

function Temporary() {

    return (
        <Wrapper parentStyle={{ justifyContent: "center"}} childStyle={{ alignItems: "center", justifyContent: "center", gap: "56px" }}>
            <FixedHeader>
                <img src={Logo} alt="Observe app logo, a marble circle" style={{ width: "40px" }} />
            </FixedHeader>
            <img src={HeroWatch} style={{ width: "24vh" }} alt="Observe app in an Apple Watch. Shows a breakdown of the 3 different meditation phases: breath, body, and gratitude." />
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "24px" }}>
                <HeroTitle>Vibration-guided meditation in three phases.</HeroTitle>
                <p>Coming soon</p>
            </div>


        </Wrapper>
    )
}

export default Temporary