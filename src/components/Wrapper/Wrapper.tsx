import React from 'react'
import styled from 'styled-components'

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

function Wrapper({children}) {
    return(
        <ParentContainer>
            <ChildContainer>
            {children}
            </ChildContainer>
        </ParentContainer>
    )
}

export default Wrapper