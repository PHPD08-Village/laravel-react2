import React, { useEffect } from 'react';
import Floating from './Floating';
import { initializePersonalEditor } from '../../JS or jQuery/Personal_editor'; // 引入 JavaScript 文件
import { contentMapping } from '../../JS or jQuery/contentMapping'; // 引入 contentMapping

// 個人資訊編輯頁面
const Personal_editor = () => {
    useEffect(() => {
        initializePersonalEditor();
    }, []);

    return (
        <>
            {/* <!-- Breadcrumb 路徑 --> */}
            <div className="breadcrumb">
                <img src="./img/Icon/Start.png" alt="" />
                <a href="#">首頁</a><img src="./img/Icon/Forward.png" alt="" />
                <a href="#">我是接案者</a><img src="./img/Icon/Forward.png" alt="" />
                <a href="#">作品專區</a><img src="./img/Icon/Forward.png" alt="" />
                <span>影片圖片類</span>
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
    );
}

export default Personal_editor;
