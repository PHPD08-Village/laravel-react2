import React, { useEffect } from 'react';
import Floating from './Floating';

// import '../../JS or jQuery/Personal_editor'

// 個人資訊編輯頁面(測試中)
const Personal_editor = () => {
    useEffect(() => {
        const sidebarItems = document.querySelectorAll(".sidebar-item");
        const rowsContainer = document.getElementById("rows-container");
        const freelancerBtn = document.getElementById("freelancer-btn");

        // 更新右側內容
        function refreshContent(itemName) {
            const topBarHTML = `
            <div class="top-bar">
                <div class="avatar-info">
                    <div class="avatar-upload">
                        <input type="file" id="avatarInput" accept="image/*" hidden>
                        <label for="avatarInput" class="avatar-box">
                            <img src="./img/Person/avatar.jpg" alt="大頭貼" class="avatar-img">
                        </label>
                    </div>
                    <div class="avatar-details">
                        <span>你好！XXXX</span>
                        <span>會員編號：XXXX</span>
                    </div>
                </div>
                <button class="top-bar-button">刊登新服務</button>
            </div>
        `;

            rowsContainer.innerHTML = topBarHTML + (contentMapping[itemName] || `
            <div class="info-box">
                <h3>${itemName}</h3>
                <hr>
                <p>暫無內容。</p>
            </div>
        `);
        }

        // 清除高亮样式
        function clearHighlight() {
            sidebarItems.forEach((item) => {
                item.classList.remove("active");
            });
        }

        // 點擊左側項目處理邏輯
        sidebarItems.forEach((item) => {
            item.addEventListener("click", () => {
                const itemName = item.textContent.trim();
                clearHighlight();
                item.classList.add("active");
                refreshContent(itemName);
            });
        });

        // 點擊接案者按鈕
        freelancerBtn.addEventListener("click", () => {
            clearHighlight();
            refreshContent("接案資料");
            document.getElementById("case-info").classList.add("active");
        });

        // 頁面初始化
        function initializePage() {
            refreshContent("接案資料");
            document.getElementById("case-info").classList.add("active");
        }

        initializePage();
    }, []);

    return (
        <>
            {/* <!-- Breadcrumb 路徑 --> */}
            <div className="breadcrumb">
                <img src="./img/Icon/Start.png" alt="" />
                <a href="#">首頁</a><img src="./img/Icon/Forward.png" alt="" />
                <a href="#">我是接案者</a><img src="./img/Icon/Forward.png" alt="" />
                <span>作品專區&ensp; &gt; &ensp;影片圖片類</span>
            </div>
            {/* <!-- 主要網頁內容 --> */}

            {/* <!-- 右側內容 --> */}
            <div className="container">
                {/* <!-- 左側列表 --> */}
                <div className="sidebar">
                    {/* <!-- 切換按鈕 --> */}
                    <div className="switcher">
                        <button id="client-btn" className="switch-btn">案主</button>
                        <button id="freelancer-btn" className="switch-btn active">接案者</button>
                    </div>
                    <div className="menu">
                        <div className="menu-item">
                            <p>帳戶管理</p>
                            <hr />
                            <ul>
                                <li id="edit-profile" className="sidebar-item">編輯個人資料</li>
                            </ul>
                        </div>
                        <div className="menu-item">
                            <p>我的工作室</p>
                            <hr />
                            <ul>
                                <li id="case-info" className="sidebar-item">接案資料</li>
                                <li id="portfolio" className="sidebar-item">作品專區</li>
                                <li id="my-services" className="sidebar-item">我的刊登服務</li>
                            </ul>
                        </div>
                        <div className="menu-item">
                            <p>案件管理</p>
                            <hr />
                            <ul>
                                <li id="saved-jobs" className="sidebar-item">已收藏案件</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* <!-- 右側內容 --> */}
                <div id="rows-container" className="rows-container">
                    <div className="top-bar">
                        <div className="avatar-info">
                            <div className="avatar-upload">
                                <input type="file" id="avatarInput" accept="image/*" hidden />
                                <label htmlFor="avatarInput" className="avatar-box">
                                    <img src="./img/Person/avatar.jpg" alt="大頭貼" className="avatar-img" />
                                </label>
                            </div>
                            <div className="avatar-details">
                                <span>你好！XXXX</span>
                                <span>會員編號：XXXX</span>
                            </div>
                        </div>
                        <button className="top-bar-button">刊登新服務</button>
                    </div>
                </div>
            </div>
            <Floating />
        </>
    )
}

export default Personal_editor