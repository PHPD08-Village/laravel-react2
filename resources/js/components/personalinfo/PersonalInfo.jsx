import React, { useState, useEffect } from 'react';
import Floatingbuttons from '../allpage/Floatingbuttons';
import UserProject from './UserProject'; // 引入 UserProject 組件
import Personalworks from './Personalworks'; // 引入 Personalworks 組件
import Floating from '../Personal_editor/Floating';

function PersonalInfo({ userId }) {
    const [userdata, setUserdata] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchUser = async () => {
        try {
          const response = await axios.get(`http://127.0.0.1:8000/api/userdata/6`); //${userId}
          if (response.status === 200) {
            setUserdata(response.data);
            console.log('Fetched user:', response.data);
          } else {
            throw new Error('Oops! 發生錯誤!');
          }
          setLoading(false);
        } catch (error) {
          setError(error.message);
          console.error('Error fetching user:', error);
          setLoading(false);
        }
      };
      fetchUser();
    }, [userId]);
  
    if (loading) {
      return <div>正在載入中... Loading...</div>;
    }

    return (
        <div className="pcontainer">
            <div className="pinfo">
                {/* 左側自介 */}
                <div className="pleft">
                    <p>你好，我是</p>
                    <p>{userdata.data.username || "使用者"}</p>
                    <p>{userdata.data.job_title || "前端工程師"}</p>
                    <p></p>
                    <p>
                        我是一名擁有多年經驗的軟體工程師，專注於網頁設計與前端開發，熟悉使用 HTML、CSS、JavaScript 以及 PHP 進行網站與應用程式的開發。<br />
                        在過去的工作中，我參與了多個完整的網站建置專案，從需求分析、設計響應式介面，到實現互動功能與後端資料串接，累積了豐富的實戰經驗。特別是對於打造 用戶友好的網站介面 與 高效的後端邏輯，有深刻的理解與實踐。<br />
                        我熱衷於解決複雜的技術挑戰，並且具備優秀的團隊合作與溝通能力，能有效協調跨部門資源來完成項目目標。近期，我也將學習重點放在現代網頁技術上，如 React.js 和 Laravel，結合這些技術於開發流程中，提升系統的效能與可維護性。<br />
                        在工作之餘，我也喜歡參與開源項目和技術社群，分享知識並從中獲得啟發。我相信，不斷學習和積極實踐是提升自己專業技能的最佳方式。
                        感謝您考慮我的申請，期待有機會與您深入交流。
                    </p>
                </div>
                {/* 右側頭貼 */}
                <div className="pright">
                    <img src={userdata.data.headshot || "./imgs/dphoto.jpg"} onError={(e) => (e.target.src = "./imgs/dphoto.jpg")} alt="頭貼" />
                    <div className="pstar">
                        <p>
                            <img src="../imgs/Star 4.png" alt="Star" />
                            <img src="../imgs/Star 4.png" alt="Star" />
                            <img src="../imgs/Star 4.png" alt="Star" />
                            <img src="../imgs/Star 4.png" alt="Star" />
                            {/* <img src="../img/star_system/star.svg" style={{width:36 }} alt="Star" /> */}
                            <img src="https://github.com/PHPD08-Village/PHPD08-Team/blob/main/img/Icon/Star%205.png?raw=true" style={{width:22 }} alt="Star" />
                        </p>
                        <span>4.3/5</span>
                    </div>
                    {/* 排版 */}
                    <div className="pckBtn">
                        <div className="pcheck">
                            {/* 驗證項目 */}
                            <div className="pitem">
                                <img src="../imgs/checked.png" alt="Checked" />
                                <span>手機已驗證</span>
                            </div>
                            <div className="pitem">
                                <img src="../imgs/checked.png" alt="Checked" />
                                <span>信箱已驗證</span>
                            </div>
                        </div>
                        {/* <a href="#" className="peditBtn">編輯個人資料</a> */}
                    </div>
                </div>
            </div>
            {/* 作品集 */}
            {/* <h2>作品集</h2> */}
            {/* <p>累積設計經驗：2-3年</p> */}
            {/* 作品標籤 */}
            {/* <div className="pworkTag">
                <a href="#">All</a>
                <a href="#">UI/UX</a>
                <a href="#">網頁設計</a>
                <a href="#">IOS/Android</a>
                <a href="#">平面設計</a>
            </div> */}
            {/* <div className="pwork"> */}
                {/* 作品卡片 */}
                {/* <div className="pworkCard">
                    <img src="../imgs/VALTWArcane06.jpg" alt="Work 1" />
                    <div>
                        <span>網頁設計</span>
                        <span>2020/07/07</span>
                    </div>
                    <p>XXX 公司登入頁面設計</p>
                </div>
                <div className="pworkCard">
                    <img src="../imgs/VALTWArcane07.jpg" alt="Work 2" />
                    <div>
                        <span>網頁設計</span>
                        <span>2020/07/07</span>
                    </div>
                    <p>XXX企業首頁設計</p>
                </div>
                <div className="pworkCard">
                    <img src="../imgs/VALTWArcane23.jpg" alt="Work 3" />
                    <div>
                        <span>網頁設計</span>
                        <span>2020/07/07</span>
                    </div>
                    <p>XXX公司網頁設計</p>
                </div>
            </div> */}
            <Personalworks/>
            {/* 已完成專案 */}
            {/* <UserProject /> 使用 UserProject 組件 */}
            {/* <Floating /> */}
        </div>
    );
}

export default PersonalInfo;
