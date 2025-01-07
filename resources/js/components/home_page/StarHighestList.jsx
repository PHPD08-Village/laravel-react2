import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { IonIcon } from '@ionic/react';
import { chevronBackOutline, chevronForwardOutline, star, starHalf, starOutline } from 'ionicons/icons';
import moment from 'moment';

function StarHighestList() {
    const [freelancers, setFreelancers] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        axios.get('/get-starhighest-taker')
            .then(response => {
                if (Array.isArray(response.data)) {
                    setFreelancers(response.data);
                } else {
                    console.error('獲取最高評價接案者的 API 不是陣列', response.data);
                }
            })
            .catch(error => {
                console.error('最高評價用戶獲取失敗', error);
            });
    }, []);

    // 委託接案者
    const assignTaker = (takerUid) => {
        axios.post(`http://127.0.0.1:8000/api/assign-taker/${selectedPid}`, { taker_uid: takerUid })
            .then(response => {
                console.log('成功委託 taker', response.data.message);
                // 顯示成功訊息或更新狀態 
                alert(`已成功委託 ${response.data.username}`)
            })
            .catch(error => {
                console.error('分配 taker 失敗', error);
            });
    };

    const nextFreelancer = () => {
        // 當 currentIndex 小於 freelancers 陣列的長度減 3 時，才能往下一個滑動
        // 這邊的 currentIndex 是指目前顯示的第一個案件的索引，所以當 currentIndex 小於 freelancers 陣列的長度減 3 時，代表還有案件可以顯示
        if (currentIndex < freelancers.length - 3) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const prevFreelancer = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <div className="homestarHighestTaker">
            {/* <!-- 左箭頭 --> */}
            <button id="starHighestTakerLeft" onClick={prevFreelancer}>
                <IonIcon icon={chevronBackOutline} />
            </button>
            <div className="homecard">
                {/* <!-- 每一個案件卡片 --> */}
                {Array.isArray(freelancers) && freelancers.slice(currentIndex, currentIndex + 3).map(starHighest => (
                    // 使用 StarHighestCard 元件顯示每個案件，並傳遞 starHighest 資料和唯一的 key
                    <StarHighestCard starHighest={starHighest} key={starHighest.uid} />
                ))}
            </div>
            {/* <!-- 右箭頭 --> */}
            <button id="starHighestTakerRight" onClick={nextFreelancer}>
                <IonIcon icon={chevronForwardOutline} />
            </button>
        </div>
    );
}

const StarHighestCard = ({ starHighest }) => {
    // 設置幾分鐘前更新
    const timeDifference = (timestamp) => {
        const now = moment();
        const updatedAt = moment(timestamp);
        const diffInMinutes = now.diff(updatedAt, 'minutes');

        // console.log(`現在時間: ${now.format()}`);
        // console.log(`更新時間: ${updatedAt.format()}`);
        // console.log(`相差分鐘數: ${diffInMinutes}`);

        if (diffInMinutes < 60) {
            return `${diffInMinutes} 分鐘前更新`;
        } else if (diffInMinutes < 1440) {
            const diffInHours = Math.floor(diffInMinutes / 60)
            return `${diffInHours} 小時前更新`;
        } else if (diffInMinutes < 10080) {
            // 小於 7 天會顯示幾天前更新
            const diffInDays = Math.floor(diffInMinutes / 1440);
            return `${diffInDays} 天前更新`;
        } else {
            return `${updatedAt.format('YYYY-MM-DD')} 更新`
        }
    };

    // 格式化日期字串
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    // 獲取評價資料，若不存在則設置為 0
    // 因為在後端的查詢中已經將 averating 及 count 屬性直接選擇出來並包含在每個 starHighest 物件中，所以不是使用 starHighest.star?.averating 的方式取得
    const averatingRaw = starHighest.averating ?? 0;
    // const count = starHighest.star?.count ?? 0;
    const count = (starHighest.count === null) ? 0 : starHighest.count;
    // 當使用 toFixed(1) 方法時，會將數字轉換為固定的小數位數的字串，而不是浮點數。這意味著 const averating = parseFloat(averatingRaw).toFixed(1); 的結果會是一個字串，這在之後的數值比較中可能會產生問題，特別是在某些條件判斷時（例如四捨五入的條件判斷），所以若要方便，外面直接再包一個 parseFloat最快。但由於這樣整數會變成顯示 4 而不是 4.0，所以這裡不使用這個方法
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
                <div className="homeimgGroup">
                    <img className="homebackImg" src={starHighest.profile_back_img ?? '/img/Person/Background.jpg'}
                        alt="user background img" />
                    <img className="homeavatar" src={starHighest.headshot ?? '/img/Icon/Male User.png'}
                        alt="avatar" />
                </div>
                <div className="hometakerUserName">
                    <div className="homeuserNameText">
                        <h4> {starHighest.nickname} </h4>
                        <img src="/img/Icon/Green_Circle.png" alt="上線中" />
                        <img className="homekeep" id="nokeep" src="/img/Icon/未收藏.png" alt="空心" />
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
            <div className="homecardContent">
                <div className="homequantityInfo">
                    <div id="workNum">
                        <label>作品：</label>
                        <a href="#">{starHighest.portfolio}</a>
                    </div>
                    <div id="successTimes">
                        <label>成交：</label>
                        <a href="#">{starHighest.num_of_succeed}</a>
                    </div>
                    <div className="homelocation">
                        <img src="/img/Icon/Location.png" alt="location icon" />
                        <label>{starHighest.location}</label>
                    </div>
                </div>
                <div className="homecodeLang">
                    <label>擅長語言：</label>
                    <div className="homecodeLangA">
                        <label href="#">HTML</label>
                        <label href="#">CSS</label>
                        <label href="#">C++</label>
                        <label href="#">Java</label>
                        <label href="#">PHP</label>
                    </div>
                </div>
            </div>
            <div className="homecardFooter">
                {/* 這裡可以的話要放上次上線時間 */}
                <label></label>
                <button id="talk1" name="talk1">聊聊</button>
                <button href="#" id="entrust1" name="entrust1">委託</button>
            </div>
        </div>
    );
}

export default StarHighestList;