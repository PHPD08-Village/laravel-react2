import React from 'react'

// 印出評價星星數
const Star = ({item}) => {
    const decideStar = (averating) => {
        const starArray = [];
        const starFilled = <ion-icon name="star" className="fstar-filled"></ion-icon>;
        const starHalf = <ion-icon name="star-half" className="fstar-filled"></ion-icon>;
        const starOutline = <ion-icon name="star-outline" className="fstar-outline"></ion-icon>;

        // console.log(item);
        console.log(item.averating);
        // console.log(decideStar(item.averating));
        const createStarElements = (filled, half, outline) => {
            for (let i = 0; i < filled; i++) {
                starArray.push(
                    <span className="fstar-wrapper" key={i}>
                        {starOutline}
                        {starFilled}
                    </span>
                );
            }
            if (half) {
                starArray.push(
                    <span className="fstar-wrapper" key={filled}>
                        {starOutline}
                        {starHalf}
                    </span>
                );
                filled++;
            }
            for (let i = filled; i < 5; i++) {
                starArray.push(
                    <span className="fstar-wrapper" key={i}>
                        {starOutline}
                    </span>
                );
            }
        };

        if (averating >= 4.5 && averating < 5) {
            createStarElements(4, true, 0);
        } else if (averating >= 3.5 && averating < 4.5) {
            createStarElements(3, true, 1);
        } else if (averating >= 2.5 && averating < 3.5) {
            createStarElements(2, true, 2);
        } else if (averating >= 1.5 && averating < 2.5) {
            createStarElements(1, true, 3);
        } else if (averating >= 0.5 && averating < 1.5) {
            createStarElements(0, true, 4);
        } else if (averating === 5) {
            createStarElements(5, false, 0);
        } else {
            createStarElements(0, false, 5);
        }
        return <>{starArray}</>;
    };

    return (
        <>
            {decideStar(item.averating)}
            {item.averating}
        </>
    )
}

export default Star



