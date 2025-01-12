import React from 'react';
import { Link } from 'react-router-dom';

import { useUser } from './UserProvider';

const UserProfile = () => {
    const { userData } = useUser();

    if (!userData) {
        return <div>資料載入中...</div>;
    }

    return (
        <div className="top-bar">
            <div className="avatar-info">
                <div className="avatar-upload">
                    <input type="file" id="avatarInput" accept="image/*" hidden />
                    <label htmlFor="avatarInput" className="avatar-box">
                        {/* 目前無法顯示照片我滿頭問號 */}
                        <img src={userData.headshot || "./imgs/dphoto.jpg"} alt="大頭貼" className="avatar-img" /> 
                    </label>
                </div>
                <div className="avatar-details">
                    <span>你好！{userData.username}</span>
                    <span>會員編號：000{userData.uid}</span>
                </div>
            </div>
            <button className="top-bar-button"><Link to="/publish" className='alink'>刊登新服務</Link></button>
        </div>
    );
};

export default UserProfile;
