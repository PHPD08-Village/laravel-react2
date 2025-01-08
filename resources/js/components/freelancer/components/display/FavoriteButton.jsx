// 相對接案單純

import React from 'react';
import axios from 'axios';
import { useAuth } from '../../../auth/AuthContext'; // 引入 useAuth 鉤子

const FavoriteButton = ({ pid }) => {
    const { user } = useAuth(); // 使用 useAuth 來取得 user 狀態
    
    const handleAddFavorite = async () => {
        if (!user) {
            alert('請先登入才能收藏案件。');
            return;
        }
        
        try {
            const response = await axios.post('/add-casefavorite', { pid });
            console.log('Add favorite response:', response.data.message);
            alert('案件收藏成功');
        } catch (error) {
            console.error('Error adding favorite:', error);
        }
    };

    return (
        <button className="fcollect" onClick={handleAddFavorite}>收藏</button>
    );
};

export default FavoriteButton;
