import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { IonIcon } from '@ionic/react';
import { chevronForwardOutline, chevronBackOutline } from 'ionicons/icons'; // 確保這裡正確導入

const LatestList = () => {
    const [latestCases, setLatestCases] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        axios.get('/get-latest-projects')
            .then(response => {
                setLatestCases(response.data);
            })
            .catch(error => {
                console.error('最新案件獲取失敗', error);
            });
    }, []);

    const nextLatest = () => {
        if (currentIndex < latestCases.length - 3) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const prevLatest = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    }

    return (
        <React.Fragment>
            <div className="latestCase">
                <button id="latestCaseLeft" onClick={prevLatest}>
                    {/* <ion-icon name="chevron-back-outline"></ion-icon> */}
                    <IonIcon icon={chevronBackOutline} />
                </button>
                <div className="card">
                    {/* 將 latestCases 陣列分割，並根據 currentIndex 取得當前顯示的三個案件 */}
                    {Array.isArray(latestCases) && latestCases.length > 0 ? (
                        latestCases.slice(currentIndex, currentIndex + 3).map(latest => (
                            // 使用 LatestCard 元件顯示每個案件，並傳遞 latest 資料和唯一的 key
                            <LatestCard latest={latest} key={latest.pid} />
                        ))
                    ) : (
                        <p>目前沒有最新案件</p>
                    )}
                </div>
                <button id="latestCaseRight" onClick={nextLatest}>
                    {/* <ion-icon name="chevron-forward-outline"></ion-icon> */}
                    <IonIcon icon={chevronForwardOutline} />
                </button>
            </div>
        </React.Fragment>
    );

}



const LatestCard = ({ latest }) => {
    // 設置幾分鐘前更新
    const timeDifference = (timestamp) => {
        const now = moment();
        const updatedAt = moment(timestamp);
        const diffInMinutes = now.diff(updatedAt, 'minutes');
        const diffInHours = now.diff(updatedAt, 'hours');
        const diffInDays = now.diff(updatedAt, 'days');

        if (diffInMinutes < 60) {
            return `${diffInMinutes} 分鐘前更新`;
        } else if (diffInHours < 24) {
            return `${diffInHours} 小時前更新`;
        } else {
            return `${diffInDays} 天前更新`;
        }
    };


    // 格式化日期字串
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    // 獲取評價資料，若不存在則設置為 0
    // 這邊的 user 源頭是 Publish Model 的 user() 方法，所以這邊的 user 是 User Model 的資料，而 star 是 User Model 的 star() 方法，所以這邊的 star 是 Star Model 的資料
    // const averatingRaw = latest.user.star?.averating ?? 0;
    const averatingRaw = latest.averating ?? 0;
    const count = latest.count ?? 0;
    // 將評價資料轉換為浮點數，並取小數點後一位
    const averating = parseFloat(averatingRaw).toFixed(1);

    // 判斷星星數量
    // 這裡不需要解構賦值，因為不會有其他元件需要使用這個函式，故不需要大括號
    // 我自己寫的
    // const decideStar = (averating) => {
    //     const starArray = [];
    //     let starFilled = <ion-icon name="star" className="star-filled"></ion-icon>;
    //     let starHalf = <ion-icon name="star-half" className="star-filled"></ion-icon>;
    //     let starOutline = <ion-icon name="star-outline" className="star-outline"></ion-icon>;

    //     if (4 < averating && averating < 5) {
    //         for (let i = 0; i < 4; i++) {
    //             starArray.push(
    //                 <span className='star-wrapper' key={i}>
    //                     {starOutline}
    //                     {starFilled}
    //                 </span>
    //             );
    //         }
    //         starArray.push(
    //             <span className='star-wrapper' key={4}>
    //                 {starOutline}
    //                 {starHalf}
    //             </span>
    //         );
    //         return <>{starArray}</>

    //     } else if (3 < averating && averating < 4) {
    //         for (let i = 0; i < 3; i++) {
    //             starArray.push(
    //                 <span className='star-wrapper' key={i}>
    //                     {starOutline}
    //                     {starFilled}
    //                 </span>
    //             );
    //         }
    //         starArray.push(
    //             <span className='star-wrapper' key={3}>
    //                 {starOutline}
    //                 {starHalf}
    //             </span>
    //         );
    //         starArray.push(
    //             <span className='star-wrapper' key={4}>
    //                 {starOutline}
    //             </span>
    //         );
    //         return <>{starArray}</>
    //     } else if (2 < averating && averating < 3) {
    //         for (let i = 0; i < 2; i++) {
    //             starArray.push(
    //                 <span className='star-wrapper' key={i}>
    //                     {starOutline}
    //                     {starFilled}
    //                 </span>
    //             );
    //         }
    //         starArray.push(
    //             <span className='star-wrapper' key={2}>
    //                 {starOutline}
    //                 {starHalf}
    //             </span>
    //         );
    //         for (let i = 3; i < 5; i++) {
    //             starArray.push(
    //                 <span className='star-wrapper' key={i}>
    //                     {starOutline}
    //                 </span>
    //             );
    //         }
    //         return <>{starArray}</>
    //     } else if (1 < averating && averating < 2) {
    //         for (let i = 0; i < 1; i++) {
    //             starArray.push(
    //                 <span className='star-wrapper' key={i}>
    //                     {starOutline}
    //                     {starFilled}
    //                 </span>
    //             );
    //         }
    //         starArray.push(
    //             <span className='star-wrapper' key={1}>
    //                 {starOutline}
    //                 {starHalf}
    //             </span>
    //         );
    //         for (let i = 2; i < 5; i++) {
    //             starArray.push(
    //                 <span className='star-wrapper' key={i}>
    //                     {starOutline}
    //                 </span>
    //             );
    //         }
    //         return <>{starArray}</>
    //     } else if (0 < averating && averating < 1) {
    //         starArray.push(
    //             <span className='star-wrapper' key={0}>
    //                 {starOutline}
    //                 {starHalf}
    //             </span>
    //         );
    //         for (let i = 1; i < 5; i++) {
    //             starArray.push(
    //                 <span className='star-wrapper' key={i}>
    //                     {starOutline}
    //                 </span>
    //             );
    //         }
    //         return <>{starArray}</>
    //     } else if (averating == 5) {
    //         for (let i = 0; i < 5; i++) {
    //             starArray.push(
    //                 <span className='star-wrapper' key={i}>
    //                     {starOutline}
    //                     {starFilled}
    //                 </span>
    //             );
    //         }
    //         return <>{starArray}</>
    //     } else if (averating == 4) {
    //         for (let i = 0; i < 4; i++) {
    //             starArray.push(
    //                 <span className='star-wrapper' key={i}>
    //                     {starOutline}
    //                     {starFilled}
    //                 </span>
    //             );
    //         }
    //         starArray.push(
    //             <span className='star-wrapper' key={4}>
    //                 {starOutline}
    //             </span>
    //         );
    //         return <>{starArray}</>
    //     } else if (averating == 3) {
    //         for (let i = 0; i < 3; i++) {
    //             starArray.push(
    //                 <span className='star-wrapper' key={i}>
    //                     {starOutline}
    //                     {starFilled}
    //                 </span>
    //             );
    //         }
    //         for (let i = 3; i < 5; i++) {
    //             starArray.push(
    //                 <span className='star-wrapper' key={i}>
    //                     {starOutline}
    //                 </span>
    //             );
    //         }
    //         return <>{starArray}</>
    //     } else if (averating == 2) {
    //         for (let i = 0; i < 2; i++) {
    //             starArray.push(
    //                 <span className='star-wrapper' key={i}>
    //                     {starOutline}
    //                     {starFilled}
    //                 </span>
    //             );
    //         }
    //         for (let i = 2; i < 5; i++) {
    //             starArray.push(
    //                 <span className='star-wrapper' key={i}>
    //                     {starOutline}
    //                 </span>
    //             );
    //         }
    //         return <>{starArray}</>
    //     } else if (averating == 1) {
    //         for (let i = 0; i < 1; i++) {
    //             starArray.push(
    //                 <span className='star-wrapper' key={i}>
    //                     {starOutline}
    //                     {starFilled}
    //                 </span>
    //             );
    //         }
    //         for (let i = 1; i < 5; i++) {
    //             starArray.push(
    //                 <span className='star-wrapper' key={i}>
    //                     {starOutline}
    //                 </span>
    //             );
    //         }
    //         return <>{starArray}</>
    //     } else {
    //         for (let i = 0; i < 5; i++) {
    //             starArray.push(
    //                 <span className='star-wrapper' key={i}>
    //                     {starOutline}
    //                 </span>
    //             );
    //         }
    //         return <>{starArray}</>
    //     }
    // };

    // AI 重構教的
    const decideStar = (averating) => {
        const starArray = [];
        const starFilled = <ion-icon name="star" className="star-filled"></ion-icon>;
        const starHalf = <ion-icon name="star-half" className="star-filled"></ion-icon>;
        const starOutline = <ion-icon name="star-outline" className="star-outline"></ion-icon>;

        const createStarElements = (filled, half, outline) => {
            for (let i = 0; i < filled; i++) {
                starArray.push(
                    <span className="star-wrapper" key={i}>
                        {starOutline}
                        {starFilled}
                    </span>
                );
            }
            if (half) {
                starArray.push(
                    <span className="star-wrapper" key={filled}>
                        {starOutline}
                        {starHalf}
                    </span>
                );
                filled++;
            }
            for (let i = filled; i < 5; i++) {
                starArray.push(
                    <span className="star-wrapper" key={i}>
                        {starOutline}
                    </span>
                );
            }
        };

        // 四捨五入至小數點後第一位，以確保這個參數的數字只到小數點後第一位
        const roundedAverating = Math.round(averating * 10) / 10;

        if (roundedAverating > 4 && roundedAverating < 5) {
            createStarElements(4, true, 0);
        } else if (roundedAverating > 3 && roundedAverating < 4) {
            createStarElements(3, true, 1);
        } else if (roundedAverating > 2 && roundedAverating < 3) {
            createStarElements(2, true, 2);
        } else if (roundedAverating > 1 && roundedAverating < 2) {
            createStarElements(1, true, 3);
        } else if (roundedAverating > 0 && roundedAverating < 1) {
            createStarElements(0, true, 4);
        } else if (roundedAverating === 5) {
            createStarElements(5, false, 0);
        } else if (roundedAverating === 4) {
            createStarElements(4, false, 1);
        } else if (roundedAverating === 3) {
            createStarElements(3, false, 2);
        } else if (roundedAverating === 2) {
            createStarElements(2, false, 3);
        } else if (roundedAverating === 1) {
            createStarElements(1, false, 4);
        } else {
            createStarElements(0, false, 5);
        }
        console.log(starArray);
        return <>{starArray}</>;
    };


    return (
        <div className="cardSingle">
            <div className="cardHeader">
                <div className="userInfo">
                    <img src={latest.profile_picture} alt="avatar" />
                    <div className="userName">
                        <div className="userNameText">
                            <h4>{latest.username}</h4>
                            <img src="/img/Icon/Green_Circle.png" alt="上線中" />
                        </div>
                        <div className="userStar">
                            <div className="starDiv">
                                {decideStar(averating)}
                            </div>
                            <label id="starValue">{averating}/5</label>
                            <label id="starValueTotal">({count})</label>
                        </div>
                    </div>
                </div>
                <label id="clickCount">{latest.click_count}點閱率</label>
            </div>
            {/* <Link to={`/detail/${latest.cid}`}> */}
            {/* <Link to={`/detail`}> */}
            <div className="cardContent">
                <Link to={`/detail`}>{latest.title}</Link>
                <ul className="caseInfo">
                    <li className="row">
                        <img src="/img/Icon/Us Dollar Circled.png" alt="dolar icon" />
                        <label>{Math.floor(latest.budget)}</label>
                    </li>
                    <li className="row">
                        <img src="/img/Icon/Location.png" alt="location icon" />
                        <label>{latest.location}</label>
                    </li>
                    <li className="row">
                        <img src="/img/Icon/Time.png" alt="time icon" />
                        <label>{formatDate(latest.completion_time)}</label>
                    </li>
                </ul>
                <p>{latest.details}</p>
            </div>
            {/* </Link> */}
            <div className="cardFooter">
                <label>{timeDifference(new Date(latest.updated_at).toLocaleDateString())}</label>
                <button id="talk1" name="talk1">聊聊</button>
                <a href="#" id="catchCase1" name="catchCase1">接案</a>
            </div>
        </div>
    );
}

export default LatestList;