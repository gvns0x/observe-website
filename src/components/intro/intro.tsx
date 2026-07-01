import React from "react";
import itemsData from './introItems'

export default function Intro({ scrollNumber, startPosition, step, blurInterval }) {
    const [opacity, setOpacity] = React.useState(1)
    const [blur, setBlur] = React.useState(0)
    
    // Where intro should start 
    const endOfIntroScroll = 20 + blurInterval + startPosition + (itemsData.length - 1) * step
    // Amount of scroll that will influence styles
    const scrollInterval = 200

    React.useEffect(() => {
        if(scrollNumber >= endOfIntroScroll) {
            setOpacity((endOfIntroScroll + scrollInterval - scrollNumber)/scrollInterval)
            setBlur((scrollNumber - endOfIntroScroll)/scrollInterval)
        }
        
    },[scrollNumber])
    

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

    // Scroll position at which each item starts
    const slotStart = startPosition + itemIndex * step
    const nextSlotStart = startPosition + (itemIndex + 1) * step

    // Item is what we'll render. It's always the item in the itemIndex in the array
    const Item = itemsData[itemIndex]

    return (
        <div style={{opacity: `${opacity}`, filter: `blur(${blur}px)`}}>
            {<Item
                
                slotStart={slotStart}
                scrollNumber={scrollNumber}
                itemIndex={itemIndex}
                nextSlotStart={nextSlotStart}
                step={step}
                blurInterval={blurInterval}
            />}
        </div>
    )
}