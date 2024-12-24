import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';

const LatestList = () => {
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
                    <ion-icon name="chevron-back-outline"></ion-icon>
                </button>
                <div className="card">
                    {/* 將 latestCases 陣列分割，並根據 currentIndex 取得當前顯示的三個案件 */}
                    {latestCases.slice(currentIndex, currentIndex + 3).map(latest => (
                        // 使用 LatestCard 元件顯示每個案件，並傳遞 latest 資料和唯一的 key
                        <LatestCard latest={latest} key={latest.cid} />
                    ))}
                </div>
                <button id="latestCaseRight" onClick={nextLatest}>
                    <ion-icon name="chevron-forward-outline"></ion-icon>
                </button>
            </div>
        </React.Fragment>
    )
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
    const averating = latest.user.star?.averating ?? 0;
    const count = latest.user.star?.count ?? 0;

    return (
        <div className="cardSingle">
            <div className="cardHeader">
                <div className="userInfo">
                    <img src={latest.user.profile_picture} alt="avatar" />
                    <div className="userName">
                        <div className="userNameText">
                            <h4>{latest.user.username}</h4>
                            <img src="/img/Icon/Green_Circle.png" alt="上線中" />
                        </div>
                        <div className="userStar">
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <img src="/img/Icon/Star 5.png" alt="半顆星" />
                            <label id="starValue">{averating}/5</label>
                            <label id="starValueTotal">({count})</label>
                        </div>
                    </div>
                </div>
                <label id="clickCount">{latest.click_count}點閱率</label>
            </div>
            <div className="cardContent">
                <a href="#">{latest.title}</a>
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
            <div className="cardFooter">
                <label>{timeDifference(new Date(latest.updated_at).toLocaleDateString())}</label>
                <button id="talk1" name="talk1">聊聊</button>
                <a href="#" id="catchCase1" name="catchCase1">接案</a>
            </div>
        </div>
    );
}


export default LatestList;