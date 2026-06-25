import React from 'react'
import styled, { keyframes } from 'styled-components'

const tiltVibration = keyframes`
        0% {
            transform: rotate(0.1turn);
        }

        100% {
            transform: rotate(0turn)
        }
    `

    const VibrationBox = styled.div`
        display:inline-flex;
        width:inherit;
        background-color:white;
        padding: 2px 4px;
        border-radius: 8px;
        animation: ${tiltVibration} .2s ease-in-out;
    `

export default function Vibration() {

    return (
        <VibrationBox>test</VibrationBox>
    )
}