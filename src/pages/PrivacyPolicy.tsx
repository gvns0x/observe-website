import React from 'react'
import styled from 'styled-components'

function PrivacyPolicy() {

    const Wrapper = styled.div`
        background-color: red;
        max-width: 700px;
        width:100%;
        display:flex;
`
    return (
        <div style={{
            width: "100%",
            backgroundColor: "blue",
            display: "flex",
            justifyContent: "center"
        }}>
            <Wrapper>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>
                    <h1>Privacy Policy</h1>
                    <h4>Observe</h4>
                </div>
            </Wrapper>
        </div>
    )
}

export default PrivacyPolicy