import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// const StarSystem = ({ userId }) => {
const StarSystem = ({ userId, caseId }) => {
    // const [uid, setUid] = useState('1');
    const [uid, setUid] = useState(userId); // 用戶 ID
    const [caseInfo, setCaseInfo] = useState(null); // 評價對象的用戶 ID
    const [professionalism, setProfessionalism] = useState(null);
    const [responseSpeed, setResponseSpeed] = useState(null);
    const [cooperation, setCooperation] = useState(null);
    // 重新導向至新頁面的內建函數
    const navigate = useNavigate();

    useEffect(() => {
        setUid(userId); // 確認用戶 ID 已經設置
        // 當組件加載時請求用戶資料
        const fetchCaseInfo = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/case/${caseId}`);
                setCaseInfo(response.data);
            } catch (error) {
                console.error('發案用戶資料請求失敗', error);
                alert('發案用戶資料獲取失敗，請稍後再試');
            }
        };
        fetchCaseInfo();
    }, [caseId, userId]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!professionalism || !responseSpeed || !cooperation) {
            // if (!starProElement || !starReplyElement || !starCoorElement) {
            alert('請確保所有評分項目都已選取');
            // 當評分項目沒有全部選取時，不執行後續程式碼
            return;
        }

        alert('評價提交中...');

        // 計算平均評分
        const averating = ((professionalism + responseSpeed + cooperation) / 3).toFixed(5);

        // alert(`您已評價 ${averating} 星`)

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/star', {
                uid,        // 評價者的用戶 ID
                targetUserId: caseInfo.publisher_uid, // 評價對象的用戶 ID     
                averating,
                count: 1, // 新增一條評論時，count 設置為 1
                caseId,     // 傳遞案件 ID 以便後端進行檢查
            });
            alert(response.data.message);

            // 當收到評價成功的回應時，導向首頁
            if (response.data.message === '評價已成功提交') {
                navigate('/');
            }
        } catch (error) {
            console.error('提交評價時出錯', error);
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

            <form onSubmit={handleSubmit} className="ratingSystem">
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
                {caseInfo && (
                    <div className="staruserInfo">
                        <img src={caseInfo.profile_picture} alt="avatar" />
                        <div className="staruserInfoText">
                            <h3 id="caseName" name="caseName">{caseInfo.title}</h3>
                            <p id="userName" name="userName">{caseInfo.username}</p>
                            <p id="caseDate" name="caseDate">{caseInfo.publish_date}</p>
                        </div>
                    </div>
                )}
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