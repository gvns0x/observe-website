import React, { useState, useEffect } from "react";
import Range from '../../utils'
import styles from './Intro.module.css'
import introItems from './introItems'

export default function Intro({ scrollNumber, startPosition, step }) {
    const [list, setList] = useState([])
    const [shownItems, setShownItems] = useState([])

    let unlockedItems = []

    for(let i = 0; i < introItems.length; i++) {
        if(scrollNumber >= startPosition) {
            unlockedItems.push(
                React.cloneElement(introItems[i], {
                    key:i,
                    className: styles.makeItRed
                })

            );
        }
        startPosition = startPosition + step
    }
    // console.log(unlockedItems)
    const visible = unlockedItems.slice(-1)

    return (
        <>
            {visible}
        </>
    )
}