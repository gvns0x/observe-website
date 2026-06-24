import React from 'react'
import styled from 'styled-components'

export default function Vibration() {

    const Vibration = styled.div`
        display:inline-flex;
        width:inherit;
        background-color:white;
        padding: 2px 4px;
        border-radius: 8px;
    `

    return (
        <Vibration>test</Vibration>
    )
}