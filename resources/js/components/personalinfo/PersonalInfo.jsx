import React from 'react';

import Floatingbuttons from '../allpage/Floatingbuttons'
// import MyLayout from '../layouts/MyLayout';
// import '../../../css/personalinfo.css';

function PersonalInfo() {
    return (
        <div className="pcontainer">
            <div className="pinfo">
                {/* 左側自介 */}
                <div className="pleft">
                    <p>Hi I am</p>
                    <p>Crazy Girl Jinx</p>
                    <p>Frontend</p>
                    <p>Engineer</p>
                    <p>
                        是一名擁有5年經驗的軟體工程師。我專注於後端開發和系統架構設計，特別擅長於使用Java和Python開發高效、可擴展的應用程式。<br />
                        在過去的工作中，我參與了多個大型項目的開發，從需求分析、系統設計到實施和維護，都積累了豐富的經驗。我熱衷於解決複雜的技術挑戰，並且具備良好的團隊合作和溝通能力，能夠在跨部門合作中有效推動項目進展。<br />
                        此外，我對學習和應用新技術保持著濃厚的興趣，近期我學習了Docker和Kubernetes，並在實際項目中成功應用了這些技術來提升系統的可靠性和可維護性。<br />
                        在工作之餘，我也喜歡參與開源項目和技術社群，分享知識並從中獲得啟發。我相信，不斷學習和積極實踐是提升自己專業技能的最佳方式。<br />
                        感謝您考慮我的申請，期待有機會與您深入交流。
                    </p>
                </div>
                {/* 右側頭貼 */}
                <div className="pright">
                    <img src="../imgs/jinx_face.png" alt="Jinx Face" />
                    <div className="pstar">
                        <p>
                            <img src="../imgs/Star 4.png" alt="Star" />
                            <img src="../imgs/Star 4.png" alt="Star" />
                            <img src="../imgs/Star 4.png" alt="Star" />
                            <img src="../imgs/Star 4.png" alt="Star" />
                            <img src="../imgs/Star 4.png" alt="Star" />
                        </p>
                        <span>5/5</span>
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
            <h2>作品集</h2>
            <p>累積設計經驗：2-3年</p>
            {/* 作品標籤 */}
            <div className="pworkTag">
                <a href="#">All</a>
                <a href="#">UI/UX</a>
                <a href="#">網頁設計</a>
                <a href="#">IOS/Android</a>
                <a href="#">平面設計</a>
            </div>
            <div className="pwork">
                {/* 作品卡片 */}
                <div className="pworkCard">
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
            </div>
            {/* 已完成專案 */}
            <h2>已完成專案</h2>
            <div className="pproject">
                <div>
                    <span>2024/10/10</span>
                    <span>XXX公司網頁設計</span>
                    <span>案主：XXX有限公司</span>
                    {/* 語言標籤 */}
                    <div className="ptag">
                        <span>CSS</span>
                        <span>SQL</span>
                        <span>JavaScript</span>
                        <span>PHP</span>
                    </div>
                </div>
                <div>
                    <span>2024/10/10</span>
                    <span>XXX公司網頁設計</span>
                    <span>案主：XXX有限公司</span>
                    {/* 語言標籤 */}
                    <div className="ptag">
                        <span>CSS</span>
                        <span>SQL</span>
                        <span>JavaScript</span>
                        <span>PHP</span>
                    </div>
                </div>
                <div>
                    <span>2024/10/10</span>
                    <span>XXX公司網頁設計</span>
                    <span>案主：XXX有限公司</span>
                    {/* 語言標籤 */}
                    <div className="ptag">
                        <span>CSS</span>
                        <span>SQL</span>
                        <span>JavaScript</span>
                        <span>PHP</span>
                    </div>
                </div>
                <div>
                    <span>2024/10/10</span>
                    <span>XXX公司網頁設計</span>
                    <span>案主：XXX有限公司</span>
                    {/* 語言標籤 */}
                    <div className="ptag">
                        <span>CSS</span>
                        <span>SQL</span>
                        <span>JavaScript</span>
                        <span>PHP</span>
                    </div>
                </div>
                {/* 換頁按鈕 */}
                <div className="pchangeBtn">
                    <button id="lastPage">&lt;</button>
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button id="nextPage">&gt;</button>
                </div>
            </div>
            <Floatingbuttons />
        </div>
    );
}

export default PersonalInfo;
