// 點擊接案會同時新增publish表的apply_count欄位 詳細請看web.php關聯的控制器

import React from 'react';
import axios from 'axios';
import { useAuth } from '../../../auth/AuthContext'; // 引入 useAuth 鉤子

const TakeCaseButton = ({ pid }) => {
    const { user } = useAuth(); // 使用 useAuth 來取得 user 狀態
    
    const handleTakeCase = async () => {
        if (!user) {
            alert('請先登入才能接案。');
            return;
        }
        
        try {
            const response = await axios.post('/take-case', { pid });
            console.log('Take case response:', response.data.message);
            // 這裡可以添加一些提示或通知用戶已經成功接案
            alert('接案成功等待業主通知');
        } catch (error) {
            console.error('Error taking case:', error);
        }
    };

    return (
        <button className="ftakecase" onClick={handleTakeCase}>接案</button>
    );
};

export default TakeCaseButton;
