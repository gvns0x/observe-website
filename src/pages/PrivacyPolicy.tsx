import React from 'react'
import styled from 'styled-components'

function PrivacyPolicy() {

    const Wrapper = styled.div`
        background-color: red;
        max-width: 700px;
        width:100%;
        display:flex;
        gap:24px;
        flex-direction:column;
`

    const PrivacyItem = styled.div`
        display:inline-flex;
        flex-direction:column;
        text-align:left;
        gap: 0px;
    `

    return (
        <div style={{
            width: "100%",
            backgroundColor: "blue",
            display: "flex",
            justifyContent: "center"
        }}>
            <Wrapper>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", textAlign: "left" }}>
                    <h1>Privacy Policy</h1>
                    <h5>Observe</h5>
                </div>
                <PrivacyItem>
                    <h3>Title</h3>
                    <p>Paragraph</p>
                </PrivacyItem>
                <PrivacyItem>
                    <h3>Title</h3>
                    <p>Paragraph</p>
                </PrivacyItem>
            </Wrapper>
        </div>
    )
}

export default PrivacyPolicy