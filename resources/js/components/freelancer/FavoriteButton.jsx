import React from 'react';
import axios from 'axios';
import { useAuth } from '../auth/AuthContext'; // 引入 useAuth 鉤子

const FavoriteButton = ({ pid }) => {
    const { user } = useAuth(); // 使用 useAuth 來取得 user 狀態
    
    const handleAddFavorite = async () => {
        if (!user) {
            alert('請先登入才能收藏案件。');
            return;
        }
        
        try {
            const response = await axios.post('/add-favorite', { pid });
            console.log('Add favorite response:', response.data.message);
            // 這裡可以添加一些提示或通知用戶已經成功收藏
            alert('收藏成功');
        } catch (error) {
            console.error('Error adding favorite:', error);
        }
    };

    return (
        <a className="fcollect" href="#" onClick={handleAddFavorite}>收藏</a>
    );
};

export default FavoriteButton;
