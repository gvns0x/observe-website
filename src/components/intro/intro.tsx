import React, { useState, useEffect } from "react";
import Range from '../../utils'
import styles from './Intro.module.css'

export default function Intro({ scrollNumber }) {
    const [list, setList] = useState([])
    const [shownItems, setShownItems] = useState([])

    const items = [
        <p className={styles.makeItRed}>I want to know</p>,
        <p >if this actually reads</p>,
        <p>well, because</p>,
        <p>I'm not so sure</p>,
        <p>that as I scroll</p>,
        <p>it really works</p>,
        <p>7</p>,
        <p>8</p>,
        <p>9</p>,
        <p>10</p>,
    ]


    let unlockedItems = []
    let startPosition = 10
    let step = 200

    for(let i = 0; i < items.length; i++) {
        if(scrollNumber >= startPosition) {
            unlockedItems.push(
                {...items[i], key:i}
            );
        }
        console.log('source index: ', i, 'item: ', items[i])
        
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