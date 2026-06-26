import React from 'react'
import styled, { keyframes } from 'styled-components'

const tiltVibration = keyframes`
        0% {
            transform: skewX(0deg);
        }

        10% {
            transform: skewX(30deg);
        }

        15% {
            transform: skewX(-30deg);
        }

        20% {
            transform: skewX(25deg)
        }

        25% {
            transform: skewX(-25deg)
        }

        30% {
            transform: skewX(20deg)
        }

        35% {
            transform: skewX(-20deg)
        }

        40% {
            transform: skewX(15deg)
        }

        45% {
            transform: skewX(-15deg);
        }

        50% {
            transform: skewX(10deg);
        }

        60% {
            transform: skewX(-10deg);
        }

        70% {
            transform: skewX(5deg);
        }

        80% {
            transform: skewX(-5deg);
        }

        100% {
            transform: skewX(0deg)
        }
    `

const VibrationBox = styled.div`
        display:inline-flex;
        width:inherit;
        background-color:white;
        padding: 2px 4px;
        border-radius: 8px;
        animation: ${props => props.active ? `${tiltVibration} .5s ease-in` : "none"};
    `

export default function Vibration({style, active}) {

    return (
        <VibrationBox active={false} style={style}>pzz</VibrationBox>
    )
}