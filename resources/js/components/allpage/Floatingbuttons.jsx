import React, { useEffect, useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import moment from 'moment';

import { initializeScrollTopButton, initializeFormSubmission } from '../../JS or jQuery/floatingbuttons';

const Floatingbuttons = () => {
    const [notifications, setNotifications] = useState([]);
    const [showNotifications, setShowNotifications] = useState(false);
    const [userId, setUserId] = useState(12); // 假設使用者的 id
    const notificationBoxRef = useRef(null)
    const notificationBtnRef = useRef(null)
    const navigate = useNavigate();

    useEffect(() => {
        initializeScrollTopButton();
        initializeFormSubmission();
    }, []);


    // 獲取通知資料的函式
    const fetchNotification = async () => {
        try {
            // console.log(`開始獲取 uid 為 ${userId} 的通知資料`)
            const response = await axios.get(`http://127.0.0.1:8000/api/get-notification/${userId}`)
            setNotifications(response.data);
            // console.log('成功獲取通知資料', response.data)
        } catch (error) {
            console.error('通知資料獲取失敗', error);
            // alert('通知資料獲取失敗，請稍後再試');
        }
    }

    // 獲取通知資料
    useEffect(() => {
        if (userId) {
            fetchNotification();
        }
    }, [userId])

    // useEffect(() => {
    //     axios.get(`/api/notifications/${userId}`)
    //         .then(response => {
    //             setNotifications(response.data);
    //         }).catch(error => {
    //             console.error('Error fetching notifications:', error);
    //         });
    // }, [userId]);

    // 設置通知框的關閉
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                notificationBoxRef.current && !notificationBoxRef.current.contains(event.target) &&
                notificationBoxRef.current && !notificationBtnRef.current.contains(event.target)) {
                setShowNotifications(false);
            }
        };
        if (showNotifications) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showNotifications]);

    // 設定通知框的顯示
    const toggleNotifications = () => {
        setShowNotifications(!showNotifications);
        fetchNotification()
    };

    // 案件完成通知的按鈕事件
    const handleRatingClick = (pid, uid) => {
        navigate(`/star`, { state: { caseId: pid, userId: uid } });
    };

    // 設置幾分鐘前更新
    const timeDifference = (timestamp) => {
        const now = moment();
        const updatedAt = moment(timestamp);
        const diffInMinutes = now.diff(updatedAt, 'minutes');

        // console.log(`現在時間: ${now.format()}`);
        // console.log(`更新時間: ${updatedAt.format()}`);
        // console.log(`相差分鐘數: ${diffInMinutes}`);

        if (diffInMinutes < 60) {
            return `${diffInMinutes} 分鐘前更新`;
        } else if (diffInMinutes < 1440) {
            const diffInHours = Math.floor(diffInMinutes / 60)
            return `${diffInHours} 小時前更新`;
        } else if (diffInMinutes < 10080) {
            // 小於 7 天會顯示幾天前更新
            const diffInDays = Math.floor(diffInMinutes / 1440);
            return `${diffInDays} 天前更新`;
        } else {
            return `${updatedAt.format('YYYY-MM-DD')} 更新`
        }
    };

    return (
        // <!-- 懸浮按鈕區域 -->
        <>
            <div className="space">
                <div></div>
                <div className="floating-buttons">
                    <Link to="/personal_editor">
                        <button className="floating-btn" id="profile-btn" title="個人資料">
                            <img src="/img/Icon/Male User.png" alt="個人資料" />
                        </button>
                    </Link>
                    <div>
                        <button className="floating-btn" id="notification-btn" title="通知"
                            onClick={toggleNotifications}
                            ref={notificationBtnRef}>
                            <img src="/img/Icon/Alarm.png" alt="通知" />
                        </button>
                    </div>
                    {/* <button className="floating-btn" id="chat-btn" title="聊天">
                    <img src="/img/Icon/Chat Message.png" alt="聊天" />
                </button> */}
                    <button className="floating-btn" id="scroll-top-btn" title="返回頂部">
                        <img src="/img/Icon/Upward Arrow.png" alt="返回頂部" />
                    </button>
                </div>
            </div>

            {/* 通知彈出視窗 */}
            {showNotifications && (
                <div className="notification-box" tabIndex="0" ref={notificationBoxRef}>
                    <h3>Notifications</h3>
                    <ul>
                        {notifications.map(notification => (
                            <li key={notification.nid}>
                                <h4>{notification.nickname}</h4>
                                <p>{notification.message}</p>
                                <div>

                                    {/* 如果 message 包含 '完成案件'，顯示評價按鈕 */}
                                    {notification.message.includes('點擊按鈕') && (
                                        <button className="rating-btn"
                                            onClick={() => handleRatingClick(notification.pid, notification.target_uid)} >
                                            評價此案件
                                        </button>)}
                                    <label>{timeDifference(new Date(notification.created_at).toISOString())}</label>
                                </div>
                            </li>))}
                    </ul>
                </div>
            )}
        </>
    );
}

export default Floatingbuttons;
