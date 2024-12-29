import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { IonIcon } from '@ionic/react';
import { chevronBackOutline, chevronForwardOutline, star, starHalf, starOutline } from 'ionicons/icons';



function SelectTaker() {
    const [applicants, setApplicants] = useState([]);
    const [selectedPid, setSelectedPid] = useState(8);
    // const [selectedTitle, setSelectedTitle] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    // useEffect(() => {
    //     axios.get(`http://127.0.0.1:8000/api/get-project-title/${selectedPid}`)
    //         .then(response => {
    //             setSelectedTitle(response.data.title);
    //             console.log('成功獲取案件標題', response.data.title)
    //         })
    //         .catch(error => {
    //             console.error('最新案件獲取失敗', error);
    //         });
    // }, []);

    useEffect(() => {
        console.log(`開始獲取 pid 為 ${selectedPid} 的應徵者資料`)
        axios.get(`http://127.0.0.1:8000/api/get-project-applicants/${selectedPid}`)
            .then(response => {
                setApplicants(response.data);
                console.log('成功獲取應徵者資料', response.data)
            })
            .catch(error => {
                console.error('應徵者資料獲取失敗', error);
            });
    }, [selectedPid])

    const assignTaker = (takerUid) => {
        axios.post(`http://127.0.0.1:8000/api/assign-taker/${selectedPid}`, { taker_uid: takerUid })
            .then(response => {
                console.log('成功分配 taker', response.data.message);
                // 顯示成功訊息或更新狀態 
                alert(`已成功委託 ${response.data.username}`)
            })
            .catch(error => {
                console.error('分配 taker 失敗', error);
            });
    };

    const sendThanksNote = (applicantUid) => {
        const thanksMessage = "感謝您的應徵！經考慮後認為足下之專長或設計風格非我司所需，謝謝您的應徵！";
        const userConfirmed = window.confirm(`是否要發出感謝函: ${thanksMessage}`);
        if (userConfirmed) {
            axios.post(`http://127.0.0.1:8000/api/send-thanks-note/${selectedPid}`, {
                applicant_uid: applicantUid,
                message: thanksMessage
            })
                .then(response => {
                    console.log('成功發送感謝函', response.data.message);
                    alert(`已成功發送感謝函給 ${response.data.username}`);
                    setApplicants(
                        prevApplicants => prevApplicants.filter(applicant => applicant.uid !== applicantUid))
                })
                .catch(error => {
                    console.error('發送感謝函失敗', error);
                });
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

    useEffect(() => {
        console.log("目前的 selectedPid 是：", selectedPid);
    }, [selectedPid])

    return (
        <div className="mainContent">
            {/* 路徑連結 */}
            <div className="path">
                <div className="pathLink">
                    <img src="/img/Icon/Start.png" alt="icon" />
                    <a href="#">我的案件</a>
                    <label htmlFor="">&gt;</label>
                    <a href="/casemng">案件管理</a>
                    <label htmlFor="">&gt;</label>
                    {/* 確認 applicants 是否有資料後再讀取 title */}
                    <a href="#">
                        {applicants.length > 0 ? applicants[0].title : '載入中...'}
                    </a>
                </div>
            </div>
            {/* content */}
            <div className="allTaker">
                {/* {applicants.slice(currentIndex, currentIndex + 3).map(applicant => ( */}
                {applicants.map(applicant => (
                    // 使用 LatestCard 元件顯示每個案件，並傳遞 latest 資料和唯一的 key
                    <CaseApplicants
                        // 大括號內的 applicant 是來自 map 的參數，代表目前正在處理的物件
                        applicant={applicant}
                        key={applicant.aid}
                        // 大括號內的 assignTaker 是 SelectTaker 元件裡的 assignTaker 函數
                        assignTaker={assignTaker}
                        // 大括號內的 sendThanksNote 是 SelectTaker 元件裡的 sendThanksNote 函數
                        sendThanksNote={sendThanksNote}
                    />
                ))}
                {/* {selectedPid && <CaseApplicants pid={selectedPid} />} */}

                {/* content1 */}
                {/* <div className="content">
                    <div className="content1">
                        <div style={{ flex: '1' }}></div>
                        <div className="companyphoto">
                            <img src="/img/company1.png" alt="" />
                        </div>
                        <div className="companyname">
                            <h4 style={{ margin: '5px' }}>快樂狗勾有限公司</h4>
                            <img src="/img/Icon/Green_Circle.png" alt="online" />
                        </div>
                        <div className="companystar">
                            <div className="userStar">
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <img src="/img/Icon/Star 5.png" alt="半顆星" />
                                <label id="starValue">4.5/5</label>
                                <label id="starValueTotal">(100)</label>
                            </div>
                        </div>
                    </div>
                    <div className="content2">
                        <div className="title">
                            <h2>案件報價：$20,000 - $50,000</h2>
                        </div>
                        <div className="location">地區：台灣/台北市信義區區區</div>
                        <div className="casecontent">
                            快樂狗狗為一個新上市的品牌，需要設計一個具有品牌風格的網站，
                            專注於提供優質、健康、和有趣的狗狗用品和有趣的狗狗用品和有趣的狗狗用品和有趣的狗狗用品和有趣的狗狗用品和有趣的狗狗用品和有趣的狗狗用品...更多
                        </div>
                        <div className="require">
                            <p>需求語言：</p>
                            <div>
                                <p>HTML</p>
                                <p>C++</p>
                                <p>CSS</p>
                                <p>Java</p>
                                <p>PHP</p>
                            </div>
                        </div>
                    </div>
                    <div className="content3">
                        <div className="time">3分鐘前應徵</div>
                        <div className="content3btn">
                            <a className="casechat" href="#">聊聊</a>
                            <a className="takecase" href="#">委託</a>
                            <a className="thanksCard" href="#">感謝函</a>
                        </div> */}
                {/* <div style="flex: 0.7;"></div> */}
                {/* </div>
                </div>
                <hr /> */}

                {/* tab */}
                <div className="tab">
                    <a href="">(箭頭)最前頁</a>
                    <a href="">(箭頭)上一頁</a>
                    <a style={{ color: '#464646', backgroundColor: '#FFA500', border: '1px solid #000000' }} href="">1</a>
                    <a href="">2</a>
                    <a href="">3</a>
                    <p style={{ margin: '5px 10px' }}>...</p>
                    <a href="">7</a>
                    <a href="">8</a>
                    <a href="">下一頁(箭頭)</a>
                    <a href="">最後頁(箭頭)</a>
                </div>
            </div>

        </div >
    )
}

const CaseApplicants = ({ applicant, assignTaker, sendThanksNote }) => {
    const [selectedPid, setSelectedPid] = useState(8);



    // 設置幾分鐘前更新
    const timeDifference = (timestamp) => {
        const now = moment();
        const appliedAt = moment(timestamp);
        const diffInMinutes = now.diff(appliedAt, 'minutes');

        // console.log(`現在時間: ${ now.format() }`);
        // console.log(`更新時間: ${ appliedAt.format() }`);
        // console.log(`相差分鐘數: ${ diffInMinutes }`);

        if (diffInMinutes < 60) {
            return `${diffInMinutes} 分鐘前應徵`;
        } else if (diffInMinutes < 1440) {
            const diffInHours = Math.floor(diffInMinutes / 60)
            return `${diffInHours} 小時前應徵`;
        } else {
            const diffInDays = Math.floor(diffInMinutes / 1440);
            return `${diffInDays} 天前應徵`;
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
        if (text) {
            return { __html: text.replace(/\n/g, '<br>') };
        }
        // 如果 text 是 undefined 則返回空字串
        return { __html: '' }
    };

    // 將金額加逗號
    // const budget = parseInt(applicant.budget);
    // const formattedBudget = isNaN(budget) ? '非數值' : budget.toLocaleString();

    // 獲取評價資料，若不存在則設置為 0
    // 這邊的 user 源頭是 Publish Model 的 user() 方法，所以這邊的 user 是 User Model 的資料，而 star 是 User Model 的 star() 方法，所以這邊的 star 是 Star Model 的資料
    // const averatingRaw = applicants.user.star?.averating ?? 0;
    const averatingRaw = applicant.averating ?? 0;
    const count = applicant.count ?? 0;
    const click_count = applicant.click_count ?? 0;
    // 將評價資料轉換為浮點數，並取小數點後一位
    const averating = parseFloat(averatingRaw).toFixed(1);

    // 判斷星星數量
    // 這裡不需要解構賦值，因為不會有其他元件需要使用這個函式，故不需要大括號
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
        <>
            <div className="content">
                <div className="content1">
                    <div style={{ flex: '1' }}></div>
                    <div className="companyphoto">
                        <img src={applicant.headshot} alt="" />
                    </div>
                    {/* <div className="companyname">
                                        <h4 style={{ margin: '5px' }}>{applicant.username}</h4>
                                        <img src="/img/Icon/Green_Circle.png" alt="online" />
                                    </div> */}
                    <div className="companystar">
                        <div className="userStar">
                            {decideStar(averating)}
                            <label id="starValue">{averating}/5</label>
                            <label id="starValueTotal">({count})</label>
                        </div>
                    </div>
                </div>
                <div className="content2">
                    <div className="title">
                        <h2>{applicant.username}</h2>
                        <span className="location">
                            地區：{applicant.location}
                        </span>
                    </div>
                    <div className="userEmail">聯絡方式：{applicant.email}</div>
                    {/* <div className="selectBudget">案件價格：{formattedBudget}</div> */}
                    <div className="casecontent" dangerouslySetInnerHTML={createMarkup(applicant.introduction)} />
                    <div className="require">
                        <p>專長語言：</p>
                        <div>
                            <p>HTML</p>
                            <p>C++</p>
                            <p>CSS</p>
                            <p>Java</p>
                            <p>PHP</p>
                        </div>
                    </div>
                </div>
                <div className="content3">
                    <div className="time">{timeDifference(applicant.applied_at)}</div>
                    <div className="content3btn">
                        {/* <a className="casechat" href="#">聊聊</a> */}
                        <a className="takecase" onClick={() => assignTaker(applicant.uid)}>委託</a>
                        <a className="thanksCard" onClick={() => sendThanksNote(applicant.uid)}>感謝函</a>
                    </div>
                    {/* <div style="flex: 0.7;"></div> */}
                </div>
            </div>
            <hr />
        </>
    );
}


export default SelectTaker