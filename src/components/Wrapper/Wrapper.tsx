import type { CSSProperties, ReactNode } from 'react'
import styled from 'styled-components'

type WrapperProps = {
    children: ReactNode
    parentStyle?: CSSProperties
    childStyle?: CSSProperties
}

const ParentContainer = styled.div`
    width:100%;
    display:flex;
    flex-direction: column;
    align-items:center;
    padding: 0px 24px;
`

const ChildContainer = styled.div`
    max-width: 700px;
    width:100%;
    display:flex;
    gap:24px;
    flex-direction:column;
    padding: 40px 0px;
`

function Wrapper({children, parentStyle, childStyle}: WrapperProps) {
    return(
        <ParentContainer style={parentStyle}>
            <ChildContainer style={childStyle}>
            {children}
            </ChildContainer>
        </ParentContainer>
    )
}

export default Wrapper