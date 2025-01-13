// Userstype.jsx
import React, { useState } from 'react';
import { useUser } from './UserProvider';

const Userstype = () => {
    const { userRole, setUserRole, section, setSection } = useUser();

    const handleRoleChange = (userRole, section) => { // 儲存點擊 接案者 or 業主
        setUserRole(userRole);
        setSection(section);
    };

    const handleSectionChange = (section) => {
        setSection(section); // 儲存點擊區塊狀態
    };

    return (
        <div className="sidebar">
            {/* <!-- 切換按鈕 --> */}
            <div className="switcher">
                {/* 業主 */}
                <button className={`switch-btn ${userRole === '業主' ? 'active' : ''}`} onClick={() => handleRoleChange('業主', '訊息通知')}>業主</button>                
                {/* 接案者 */}
                <button className={`switch-btn ${userRole === '接案者' ? 'active' : ''}`} onClick={() => handleRoleChange('接案者', '訊息通知')}>接案者</button>
            </div>
            {/* 透過上面的按鈕來判斷顯示的內容 */}
            {userRole === '接案者' ? (
                // 點擊 接案者
                <div className="menu">
                    <div className="menu-item">
                        <h3>帳戶管理</h3>
                        <hr />
                        <ul>
                            <li id="edit-profile" className={`sidebar-item ${section === '編輯個人資料' ? 'active' : ''}`} onClick={() => handleSectionChange('編輯個人資料')}>編輯個人資料</li>
                            <li id="case-info" className={`sidebar-item ${section === '訊息通知' ? 'active' : ''}`} onClick={() => handleSectionChange('訊息通知')}>訊息通知</li>
                        </ul>
                    </div>
                    <div className="menu-item">
                        <h3>我的工作室</h3>
                        <hr />
                        <ul>
                            <li id="portfolio" className={`sidebar-item ${section === '作品專區' ? 'active' : ''}`} onClick={() => handleSectionChange('作品專區')}>作品專區</li>
                            {/* <li id="my-services" className={`sidebar-item ${section === '我的刊登服務' ? 'active' : ''}`} onClick={() => handleSectionChange('我的刊登服務')}>我的刊登服務</li> */}
                        </ul>
                    </div>
                    <div className="menu-item">
                        <h3>案件管理</h3>
                        <hr />
                        <ul>
                            <li id="saved-jobs" className={`sidebar-item ${section === '已收藏案件' ? 'active' : ''}`} onClick={() => handleSectionChange('已收藏案件')}>已收藏案件</li>
                        </ul>
                    </div>
                </div>
            ) : (
                // 點擊 如果不是接案者 則印出業主
                <div className="menu">
                    <div className="menu-item">
                        <h3>帳戶管理</h3>
                        <hr />
                        <ul>
                            <li className={`sidebar-item ${section === '編輯個人資料' ? 'active' : ''}`} onClick={() => handleSectionChange('編輯個人資料')}>編輯個人資料</li>
                            <li id="case-info" className={`sidebar-item ${section === '訊息通知' ? 'active' : ''}`} onClick={() => handleSectionChange('訊息通知')}>訊息通知</li>
                        </ul>
                    </div>
                    <div className="menu-item">
                        <h3>案件管理</h3>
                        <hr />
                        <ul>
                            <li className={`sidebar-item ${section === '審核中' ? 'active' : ''}`} onClick={() => handleSectionChange('審核中')}>審核中</li>
                            <li className={`sidebar-item ${section === '刊登中' ? 'active' : ''}`} onClick={() => handleSectionChange('刊登中')}>刊登中</li>
                            <li className={`sidebar-item ${section === '已完成/已關閉案件' ? 'active' : ''}`} onClick={() => handleSectionChange('已完成/已關閉案件')}>已完成/已關閉案件</li>
                        </ul>
                    </div>
                    <div className="menu-item">
                        <h3>人才管理</h3>
                        <hr />
                        <ul>
                            <li className={`sidebar-item ${section === '已收藏人才' ? 'active' : ''}`} onClick={() => handleSectionChange('已收藏人才')}>已收藏人才</li>
                        </ul>
                    </div>
                </div>
                // 點擊 業主
            )}
        </div>
    );
};

export default Userstype;












