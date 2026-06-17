import React, { useState, useEffect } from "react";
import Range from '../../utils'
import styles from './Intro.module.css'

export default function Intro({ scrollNumber }) {
    const [list, setList] = useState([])
    const [shownItems, setShownItems] = useState([])

    const items = [
        <p className={styles.makeItRed}>1</p>,
        <p>2</p>,
        <p>3</p>,
        <p>4</p>,
        <p>5</p>,
        <p>6</p>,
        <p>7</p>,
        <p>8</p>,
        <p>9</p>,
        <p>10</p>,
    ]


    let unlockedItems = []
    let startPosition = 10
    let step = 50

    for(let i = 0; i < items.length + 1; i++) {
        if(scrollNumber >= startPosition) {
            unlockedItems.push(items[i]);
        }
        
        startPosition = startPosition + step
    }
    console.log(unlockedItems)
    const visible = unlockedItems.slice(-3)
    

    // useEffect(() => {
    //     let cutItems = items.slice(0,3)
        
    //     if (scrollNumber >= 100) {
    //       setShownItems(cutItems)
    //     } else {
    //       setShownItems([])
    //     }
    
    //   }, [scrollNumber])

    return (
        <>
            {visible}
        </>
    )
}