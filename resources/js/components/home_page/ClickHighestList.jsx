import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { IonIcon } from '@ionic/react';
import { chevronForwardOutline, chevronBackOutline } from 'ionicons/icons'; // 確保這裡正確導入

const ClickHighestList = () => {
    const [cliHighestCases, setCliHighestCases] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        axios.get('/get-clickhighest-projects')
            .then(response => {
                setCliHighestCases(response.data);
            })
            .catch(error => {
                console.error('最新案件獲取失敗', error);
            });
    }, []);

    const nextClickHigh = () => {
        if (currentIndex < cliHighestCases.length - 3) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const prevClickHigh = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    }

    return (
        <React.Fragment>
            <div className="clickHighestCase">
                {/* <!-- 左箭頭 --> */}
                <button id="clickHighestCaseLeft" onClick={prevClickHigh}>
                    <ion-icon name="chevron-back-outline"></ion-icon>
                    <IonIcon icon={chevronBackOutline} />
                </button>
                <div className="card">
                    {/* 將 cliHighestCases 陣列分割，並根據 currentIndex 取得當前顯示的三個案件 */}
                    {cliHighestCases.slice(currentIndex, currentIndex + 3).map(clickHighest => (
                        // 使用 ClickHighestCard 元件顯示每個案件，並傳遞 clickHighest 資料和唯一的 key
                        <ClickHighestCard clickHighest={clickHighest} key={clickHighest.pid} />
                    ))}
                </div>
                {/* <!-- 右箭頭 --> */}
                <button id="clickHighestCaseRight" onClick={nextClickHigh}>
                    {/* <ion-icon name="chevron-forward-outline"></ion-icon> */}
                    <IonIcon icon={chevronForwardOutline} />
                </button>
            </div>
        </React.Fragment>
    )
}



const ClickHighestCard = ({ clickHighest }) => {
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
    const averatingRaw = clickHighest.averating ?? 0;
    const count = clickHighest.count ?? 0;
    // 將評價資料轉換為浮點數，並取小數點後一位
    const averating = parseFloat(averatingRaw).toFixed(1);

    // 判斷星星數量
    // 這裡不需要解構賦值，因為不會有其他元件需要使用這個函式，故不需要大括號
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
        <div className="cardSingle">
            <div className="cardHeader">
                <div className="userInfo">
                    <img src={clickHighest.profile_picture} alt="avatar" />
                    <div className="userName">
                        <div className="userNameText">
                            <h4>{clickHighest.username}</h4>
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
                <label id="clickCount">{clickHighest.click_count}點閱率</label>
            </div>
            <div className="cardContent">
                <Link to={`/detail`}>{clickHighest.title}</Link>
                <ul className="caseInfo">
                    <li className="row">
                        <img src="/img/Icon/Us Dollar Circled.png" alt="dolar icon" />
                        <label>{Math.floor(clickHighest.budget)}</label>
                    </li>
                    <li className="row">
                        <img src="/img/Icon/Location.png" alt="location icon" />
                        <label>{clickHighest.location}</label>
                    </li>
                    <li className="row">
                        <img src="/img/Icon/Time.png" alt="time icon" />
                        <label>{formatDate(clickHighest.completion_time)}</label>
                    </li>
                </ul>
                <p>{clickHighest.details}</p>
            </div>
            <div className="cardFooter">
                <label>{timeDifference(new Date(clickHighest.updated_at).toLocaleDateString())}</label>
                <button id="talk1" name="talk1">聊聊</button>
                <a href="#" id="catchCase1" name="catchCase1">接案</a>
            </div>
        </div>
    );
}

export default ClickHighestList;





{/* <ion-icon name="star-outline"></ion-icon>
<ion-icon name="star"></ion-icon>
<ion-icon name="star-half"></ion-icon> */}