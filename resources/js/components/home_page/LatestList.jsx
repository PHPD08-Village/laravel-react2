import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { IonIcon } from '@ionic/react';
import { chevronBackOutline, chevronForwardOutline, star, starHalf, starOutline } from 'ionicons/icons';

const LatestList = () => {
    const currentUser = { uid: 9 }   // 獲取當前登錄用戶的 uid
    const [latestCases, setLatestCases] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/get-latest-projects')
            .then(response => {
                setLatestCases(response.data);
            })
            .catch(error => {
                console.error('最新案件獲取失敗', error);
            });
    }, []);



    const handleApply = async (pid) => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/apply-case', {
                uid: currentUser.uid,
                pid: pid
            });
            console.log(response.data.message);
            alert('應徵送出成功！')
        } catch (error) {
            console.error('應徵送出失敗，請稍後再試', error);
        }
    };

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
            <div className="homelatestCase">
                <button id="latestCaseLeft" onClick={prevLatest}>
                    <IonIcon icon={chevronBackOutline} />
                </button>
                <div className="homecard">
                    {/* 將 latestCases 陣列分割，並根據 currentIndex 取得當前顯示的三個案件 */}
                    {latestCases.slice(currentIndex, currentIndex + 3).map(latest => (
                        // 使用 LatestCard 元件顯示每個案件，並傳遞 latest 資料和唯一的 key
                        <LatestCard latest={latest} key={latest.pid} handleApply={handleApply} />
                    ))}
                </div>
                <button id="latestCaseRight" onClick={nextLatest}>
                    <IonIcon icon={chevronForwardOutline} />
                </button>
            </div>
        </React.Fragment>
    )
}



const LatestCard = ({ latest, handleApply }) => {
    // 設置幾分鐘前更新
    // 設置幾分鐘前更新
    const timeDifference = (timestamp) => {
        const now = moment();
        const updatedAt = moment(timestamp);
        const diffInMinutes = now.diff(updatedAt, 'minutes');

        // console.log(`現在時間: ${now.format()}`);
        // console.log(`更新時間: ${updatedAt.format()}`);
        // console.log(`相差分鐘數: ${diffInMinutes}`);

        if (diffInMinutes < 60) {
            return `${diffInMinutes} 分鐘前新增`;
        } else if (diffInMinutes < 1440) {
            const diffInHours = Math.floor(diffInMinutes / 60)
            return `${diffInHours} 小時前新增`;
        } else if (diffInMinutes < 10080) {
            // 小於 7 天會顯示幾天前更新
            const diffInDays = Math.floor(diffInMinutes / 1440);
            return `${diffInDays} 天前新增`;
        } else {
            return `${updatedAt.format('YYYY-MM-DD')} 新增`
        }
    };


    // 格式化日期字串
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    // 偵測到資料庫中的文字換行時就換行
    // 這邊設置一個函式，return 的東西需要放在標籤中，並使用 dangerouslySetInnerHTML 屬性
    const createMarkup = (text) => {
        return { __html: text.replace(/\n/g, '<br>') };
    };

    // 將金額加逗號
    const [budget, setBudget] = useState('0');
    useEffect(() => {
        let dbbudget = Math.floor(Number(latest.budget));
        setBudget(dbbudget.toLocaleString());
    }, [latest.budget])


    // 獲取評價資料，若不存在則設置為 0
    // 這邊的 user 源頭是 Publish Model 的 user() 方法，所以這邊的 user 是 User Model 的資料，而 star 是 User Model 的 star() 方法，所以這邊的 star 是 Star Model 的資料
    // const averatingRaw = latest.user.star?.averating ?? 0;
    const averatingRaw = latest.averating ?? 0;
    const count = latest.count ?? 0;
    const click_count = latest.click_count ?? 0;
    // 將評價資料轉換為浮點數，並取小數點後一位
    const averating = parseFloat(averatingRaw).toFixed(1);

    // 判斷星星數量
    // 這裡不需要解構賦值，因為不會有其他元件需要使用這個函式，故不需要大括號
    // AI 重構教的
    const decideStar = (averating) => {
        const starArray = [];
        const starFilled = <IonIcon icon={star} className="star-filled" />;
        const starHalfIcon = <IonIcon icon={starHalf} className="star-filled" />;
        const starOutlineIcon = <IonIcon icon={starOutline} className="star-outline" />;

        const createStarElements = (filled, half, outline) => {
            for (let i = 0; i < filled; i++) {
                starArray.push(
                    <span className="star-wrapper" key={i}>
                        {starOutlineIcon}
                        {starFilled}
                    </span>
                );
            }
            if (half) {
                starArray.push(
                    <span className="star-wrapper" key={filled}>
                        {starOutlineIcon}
                        {starHalfIcon}
                    </span>
                );
                filled++;
            }
            for (let i = filled; i < 5; i++) {
                starArray.push(
                    <span className="star-wrapper" key={i}>
                        {starOutlineIcon}
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
        <div className="homecardSingle">
            <div className="homecardHeader">
                <div className="homeuserInfo">
                    <img src={latest.headshot ?? '/img/Icon/Male User.png'} alt="avatar" />
                    <div className="homeuserName">
                        <div className="homeuserNameText">
                            <h4>{latest.nickname}</h4>
                            <img src="/img/Icon/Green_Circle.png" alt="上線中" />
                        </div>
                        <div className="homeUserStar">
                            <div className="homestarDiv">
                                {decideStar(averating)}
                            </div>
                            <label id="starValue">{averating}/5</label>
                            <label id="starValueTotal">({count})</label>
                        </div>
                    </div>
                </div>
                <label id="clickCount">{click_count}點閱率</label>
            </div>
            {/* <Link to={`/detail/${latest.pid}`}> */}
            {/* <Link to={`/detail`}> */}
            <div className="homecardContent">
                <Link to={`/detail`}>{latest.title}</Link>
                <ul className="homecaseInfo">
                    <li className="homerow">
                        <img src="/img/Icon/Us Dollar Circled.png" alt="dolar icon" />
                        <label>{budget}</label>
                    </li>
                    <li className="homerow">
                        <img src="/img/Icon/Location.png" alt="location icon" />
                        <label>{latest.location}</label>
                    </li>
                    <li className="homerow">
                        <img src="/img/Icon/Time.png" alt="time icon" />
                        <label>{formatDate(latest.completion_time)}</label>
                    </li>
                </ul>
                <p dangerouslySetInnerHTML={createMarkup(latest.details)} />
            </div>
            {/* </Link> */}
            <div className="homecardFooter">
                <label>{timeDifference(new Date(latest.updated_at).toISOString())}</label>
                <button id="talk1" name="talk1">聊聊</button>
                {/* 用箭頭函式確保 按鈕被點擊時 handleApply 才被調用 */}
                {/* <a onClick={() => handleApply(latest.uid, latest.pid)} id="catchCase1" name="catchCase1">接案</a> */}
                <button onClick={() => handleApply(latest.pid)} id="catchCase1" name="catchCase1">接案</button>
            </div>
        </div>
    );
}

export default LatestList;