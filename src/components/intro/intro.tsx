import React from "react";
import itemsData from './introItems'

export default function Intro({ scrollNumber, startPosition, step }) {

    // Get the index of the item to show, based on the current scrollNumber
    // Does not account for if the index is above the length of the array of items
    // To consider that, we check the minimum number in itemIndex 👇
    const currentIndex: number = Math.floor((scrollNumber - startPosition) / step)

    // If the scrollNumber is indicating an index bigger than the length of the array of items
    // then use the index for the last item of the array of items.
    // This means that if we scroll a lot, always render the last item of the array.
    const itemIndex = Math.min(currentIndex, itemsData.length - 1)

    if (currentIndex < 0) {
        return null
    }

    const Item = itemsData[itemIndex]

    return (
        <>
            {<Item active="true" itemIndex={itemIndex} scrollNumber={scrollNumber}/>}
        </>
    )
}