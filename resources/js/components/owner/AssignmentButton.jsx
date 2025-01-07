import React from 'react';
import axios from 'axios';
import { useAuth } from '../auth/AuthContext'; // 引入 useAuth 鉤子

const AssignmentButton = ({ uid }) => {
    const { user } = useAuth(); // 使用 useAuth 來取得 user 狀態
    
    const handleTakeCase = async () => {
        if (!user) {
            alert('請先登入才能委託。');
            return;
        }
        
        try {
            const response = await axios.post('/assignment', { uid });
            console.log('assignment response:', response.data.message);
            // 這裡可以添加一些提示或通知用戶已經成功接案
            alert('委託邀請成功等待接案者通知');
        } catch (error) {
            console.error('Error taking case:', error);
        }
    };

    return (
        <a className="otakecase" href="#" onClick={handleTakeCase}>委託</a>
    );
};

export default AssignmentButton;
