import React, { useEffect, useState } from 'react';
import axios from 'axios';  // 用於進行 HTTP 請求
import { useLocation } from 'react-router-dom';
import moment from 'moment';

import Container from '../components/detail/Container';
import '../../css/detail.css';

const Detail = () => {
    const location = useLocation(); // 用於獲取路由的 location 對象
    const { pid } = location.state || {};
    const [item, setItem] = useState(null); // 用來存儲獲取的數據
    const [error, setError] = useState(''); // 用來存儲獲取的錯誤消息

    const timeDifference = (timestamp) => {
        const now = moment();
        const updatedAt = moment(timestamp);
        const diffInMinutes = now.diff(updatedAt, 'minutes');
        const diffInHours = now.diff(updatedAt, 'hours');
        const diffInDays = now.diff(updatedAt, 'days');

        if (diffInMinutes < 60) {
            return `${diffInMinutes} 分鐘前更新`;
        } else if (diffInHours < 24) {
            return `${diffInHours} 小時前更新`;
        } else {
            return `${diffInDays} 天前更新`;
        }
    };
    // 使用 useEffect 保證只在 pid 變化時重新獲取數據
    useEffect(() => {  // 在組件加載時獲取數據
        if (pid) { // 當 pid 存在時，使用 Axios 進行 GET 請求以獲取數據
            const fetchData = async () => {
                try {
                    const response = await axios.get('/get-userinfo-publish');
                    let data = response.data;

                    const foundItem = data.find(d => d.pid === pid);
                    if (foundItem) {
                        setItem(foundItem);
                    } else {
                        setError('No item found for the given PID');
                    }
                } catch (error) {
                    setError('Error fetching data');
                    console.error('Error fetching data', error);
                }
            };
            fetchData();
        }
    }, [pid]);

    if (error) {
        return <div>{error}</div>;
    }

    if (!item) {
        return <div>加載中...</div>;
    }

    return (
        <div>
            {/* 傳遞 item 和 timeDifference 作為屬性 */}
            <Container item={item} timeDifference={timeDifference} />
        </div>
    );
};

export default Detail;
