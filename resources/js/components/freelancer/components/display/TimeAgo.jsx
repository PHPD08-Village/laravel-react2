// freelancer2/components/TimeAgo.jsx
import React from 'react';

const TimeAgo = ({ date }) => {
    const formatTimeDifference = (updatedTime) => {
        const now = new Date();
        const updatedAt = new Date(updatedTime);
        const diff = Math.floor((now - updatedAt) / 1000); // 獲取時間差（秒）

        const minutes = Math.floor(diff / 60);
        const hours = Math.floor(diff / 3600);
        const days = Math.floor(diff / 86400);

        if (days > 0) return `${days}天前更新`;
        if (hours > 0) return `${hours}小時前更新`;
        if (minutes > 0) return `${minutes}分鐘前更新`;

        return '剛剛更新';
    };

    return (
        <div className="ftime">{formatTimeDifference(date)}</div>
    );
};

export default TimeAgo;
