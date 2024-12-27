import React, { useEffect } from 'react';
import { initializeScrollTopButton, initializeFormSubmission } from '../../JS or jQuery/floatingbuttons';

const Floatingbuttons = () => {

    useEffect(() => {
        initializeScrollTopButton();
        initializeFormSubmission();
    }, []);

    return (
        // <!-- 懸浮按鈕區域 -->
        <div className="space">
            <div></div>
            <div className="floating-buttons">
                <button className="floating-btn" id="profile-btn" title="個人資料">
                    <img src="/img/Icon/Male User.png" alt="個人資料" />
                </button>
                <button className="floating-btn" id="notification-btn" title="通知">
                    <img src="/img/Icon/Alarm.png" alt="通知" />
                </button>
                <button className="floating-btn" id="chat-btn" title="聊天">
                    <img src="/img/Icon/Chat Message.png" alt="聊天" />
                </button>
                <button className="floating-btn" id="scroll-top-btn" title="返回頂部">
                    <img src="/img/Icon/Upward Arrow.png" alt="返回頂部" />
                </button>
            </div>
        </div>
    );
}

export default Floatingbuttons;
