import React from "react";
import Range from '../../utils'

export default function Intro({ scrollNumber }) {

    const items = [
        <p>1</p>,
        <p>2</p>,
        <p>3</p>
    ]

    function itemsRender() {

        let itemsRender = []
        let startPosition = 10
        let positionIncrem = 100

        for(let i = 0; i < items.length + 1; i++) {
            itemsRender.push(scrollNumber >= startPosition && items[i]);
            startPosition += positionIncrem
            console.log(startPosition)
        }
        
        return itemsRender
    }

    return (
        <>
            {itemsRender()}
        </>
    )
}