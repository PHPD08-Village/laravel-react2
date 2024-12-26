import React from 'react';
import { IonIcon } from '@ionic/react';
import { star, starHalf, starOutline } from 'ionicons/icons';

const Star = ({ item }) => {

    const decideStar = (averating) => {
        const starArray = [];

        const createStarElements = (filled, half) => {
            for (let i = 0; i < filled; i++) {
                starArray.push(
                    <span className="fstar-wrapper" key={`filled-${i}`}>
                        <IonIcon icon={starOutline} className="fstar-outline" />
                        <IonIcon icon={star} className="fstar-filled" />
                    </span>
                );
            }
            if (half) {
                starArray.push(
                    <span className="fstar-wrapper" key={`half-${filled}`}>
                        <IonIcon icon={starOutline} className="fstar-outline" />
                        <IonIcon icon={starHalf} className="fstar-filled" />
                    </span>
                );
                filled++;
            }
            for (let i = filled; i < 5; i++) {
                starArray.push(
                    <span className="fstar-wrapper" key={`outline-${i}`}>
                        <IonIcon icon={starOutline} className="fstar-outline" />
                    </span>
                );
            }
        };


        if (averating >= 4.5) {
            createStarElements(5, false); // 確保評分在 4.5 到 5 之間顯示完整的 5 顆金色星星
        } else if (averating >= 4.5) {
            createStarElements(4, true);
        } else if (averating >= 4.0) {
            createStarElements(4, false);
        } else if (averating >= 3.5) {
            createStarElements(3, true);
        } else if (averating >= 3.0) {
            createStarElements(3, false);
        } else if (averating >= 2.5) {
            createStarElements(2, true);
        } else if (averating >= 2.0) {
            createStarElements(2, false);
        } else if (averating >= 1.5) {
            createStarElements(1, true);
        } else if (averating >= 1.0) {
            createStarElements(1, false);
        } else if (averating >= 0.5) {
            createStarElements(0, true);
        } else {
            createStarElements(0, false);
        }
        return <>{starArray}</>;
    };

    const averatingNumber = (num) => {
        const number = parseFloat(num); // 確保 num 是數字類型
        return Number.isNaN(number) ? "0.0" : number.toFixed(1); // 確保顯示小數點和零
    };

    // console.log(item.averating);
    const averating = item.averating
    const averatingnum = averatingNumber(item.averating)
    // console.log(`原始數字: ${averating}`);
    // console.log(`四捨五入到小數點第一位:${averatingnum}`);


    return (
        <>
            {decideStar(item.averating)}
            {averatingnum}/5
        </>
    );
};

export default Star;
