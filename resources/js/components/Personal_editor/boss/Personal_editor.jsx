import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import { useAuth } from '../../auth/AuthContext';
import Floating from '../Floating';
import { initializePersonalEditor } from '../../../JS or jQuery/personal_editor'; // 引入 JavaScript 文件
// import Breadcrumb from './Breadcrumb';
// import Sidebar from './Sidebar';
// import TopBar from './TopBar';
// import ContentArea from './ContentArea';

const Personal_editor = () => {
    const { user } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            alert('請先登入');
            navigate('/login'); // 如果未登入，重定向到登入頁面
        } else {
            initializePersonalEditor(); // 初始化個人編輯器
        }
    }, [user, navigate]);

    return user ? (
        <>
            <Breadcrumb />
            <div className="container">
                <Sidebar />
                <ContentArea />
            </div>
            <Floating />
        </>
    ) : null; // 如果未登入，不渲染任何內容
}

export default Personal_editor;




// (麵包屑導航)
const Breadcrumb = () => (
    <div className="breadcrumb">
        <img src="./img/Icon/Start.png" alt="" />
        <a href="#">首頁</a><img src="./img/Icon/Forward.png" alt="" />
        <a href="#">我是接案者</a><img src="./img/Icon/Forward.png" alt="" />
        <a href="#">作品專區</a><img src="./img/Icon/Forward.png" alt="" />
        <span>影片圖片類</span>
    </div>
);

// (側邊欄)
const Sidebar = () => (
    <div className="sidebar">
        {/* <!-- 切換按鈕 --> */}
        <div className="switcher">
            <button id="client-btn" className="switch-btn"><Link to="/Someonedata" className="alink">案主</Link></button>
            <button id="freelancer-btn" className="switch-btn active"><Link to="/personal_editor" className="alink">接案者</Link></button>
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
);

// (頂部欄)
const TopBar = () => (
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
);

// (內容區域)
const ContentArea = () => (
    <div id="rows-container" className="rows-container">
        <TopBar />
    </div>
);












