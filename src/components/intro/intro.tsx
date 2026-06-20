import React, { useState, useEffect } from "react";
import itemsData from './introItems'

export default function Intro({ scrollNumber, startPosition, step }) {

    const currentIndex: number = Math.floor((scrollNumber - startPosition) / step)

    const itemIndex = Math.min(currentIndex, itemsData.length - 1)

    if (currentIndex < 0) {
        return null
    }

    

    return (
        <>
            {itemsData[itemIndex]}
        </>
    )
}