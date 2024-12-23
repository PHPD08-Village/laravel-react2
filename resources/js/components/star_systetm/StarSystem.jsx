import React, { useState } from 'react';
import axios from 'axios';

const StarSystem = ({ userId }) => {
    const [uid, setUid] = useState(userId || null);
    const [professionalism, setProfessionalism] = useState(null);
    const [responseSpeed, setResponseSpeed] = useState(null);
    const [cooperation, setCooperation] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        // 計算平均評分
        const averating = (professionalism + responseSpeed + cooperation) / 3;

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/star', {
                uid,
                averating,
                count: 1 // 新增一條評論時，count 設置為 1
            });
            alert(response.data.message);
        } catch (error) {
            console.error('There was an error!', error);
        }
    };

    return (
        <div className="mainContent">
            <div className="pathLink">
                <img src="/img/Icon/Start.png" alt="icon" />
                <a href="#">我的案件</a>
                <label htmlFor=""> &gt; </label>
                <a href="#">評價回饋</a>
            </div>

            <div className="explain">
                <h2>評價接案者</h2>
                <ul>
                    <li>
                        交易完成後，您可以給予「優良」、「普通」或「差勁」的評價，並留下意見評語。
                    </li>
                    <li>
                        「優良」代表五顆星、「普通」代表三顆星、「差勁」代表一顆星。
                    </li>
                    <li>
                        評價一旦送出便無法修改，請謹慎給予。
                    </li>
                    <li>
                        所有評價都會記錄在會員的「評價頁面」，供其他會員做參考。
                    </li>
                </ul>
            </div>
            <hr />
            <div className="staruserInfo">
                <img src="/img/Icon/Male User.png" alt="avatar" />
                <div className="staruserInfoText">
                    <h3 id="caseName" name="caseName">獨立品牌網頁設計</h3>
                    <p id="userName" name="userName">陳曉白快樂工作室</p>
                    <p id="caseDate" name="caseDate">2024/10/30</p>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="ratingSystem">
                <input type="hidden" name="uid" value={uid || ''} />
                <div className="rating">
                    <div className="starPro">
                        <p>對方專業度：</p>
                        <div className="ratingStar">
                            <input type="radio" name="star1" id="star15" value="5" onChange={() => setProfessionalism(5)} />
                            <label htmlFor="star15"></label>
                            <input type="radio" name="star1" id="star14" value="4" onChange={() => setProfessionalism(4)} />
                            <label htmlFor="star14"></label>
                            <input type="radio" name="star1" id="star13" value="3" onChange={() => setProfessionalism(3)} />
                            <label htmlFor="star13"></label>
                            <input type="radio" name="star1" id="star12" value="2" onChange={() => setProfessionalism(2)} />
                            <label htmlFor="star12"></label>
                            <input type="radio" name="star1" id="star11" value="1" onChange={() => setProfessionalism(1)} />
                            <label htmlFor="star11"></label>
                        </div>
                    </div>
                    <div className="starReply">
                        <p>對方回覆速度：</p>
                        <div className="ratingStar">
                            <input type="radio" name="star2" id="star25" value="5" onChange={() => setResponseSpeed(5)} />
                            <label htmlFor="star25"></label>
                            <input type="radio" name="star2" id="star24" value="4" onChange={() => setResponseSpeed(4)} />
                            <label htmlFor="star24"></label>
                            <input type="radio" name="star2" id="star23" value="3" onChange={() => setResponseSpeed(3)} />
                            <label htmlFor="star23"></label>
                            <input type="radio" name="star2" id="star22" value="2" onChange={() => setResponseSpeed(2)} />
                            <label htmlFor="star22"></label>
                            <input type="radio" name="star2" id="star21" value="1" onChange={() => setResponseSpeed(1)} />
                            <label htmlFor="star21"></label>
                        </div>
                    </div>
                    <div className="starCoor">
                        <p>對方整體配合度：</p>
                        <div className="ratingStar">
                            <input type="radio" name="star3" id="star35" value="5" onChange={() => setCooperation(5)} />
                            <label htmlFor="star35"></label>
                            <input type="radio" name="star3" id="star34" value="4" onChange={() => setCooperation(4)} />
                            <label htmlFor="star34"></label>
                            <input type="radio" name="star3" id="star33" value="3" onChange={() => setCooperation(3)} />
                            <label htmlFor="star33"></label>
                            <input type="radio" name="star3" id="star32" value="2" onChange={() => setCooperation(2)} />
                            <label htmlFor="star32"></label>
                            <input type="radio" name="star3" id="star31" value="1" onChange={() => setCooperation(1)} />
                            <label htmlFor="star31"></label>
                        </div>
                    </div>
                    <p>(評價一旦送出便無法修改，請謹慎給予)</p>
                </div>
                <button type="submit" id="submitStar" name="submitStar">送出</button>
            </form>
        </div>
    );
};

export default StarSystem;

{/* <input type="hidden" name="uid" value={uid} /> */ } {/* 隱藏的用戶 ID 欄位用來綁定評價與特定用戶 */ }