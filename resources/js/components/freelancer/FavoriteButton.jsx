import React from 'react';
import axios from 'axios';

const FavoriteButton = ({ pid }) => {
    const handleAddFavorite = async () => {
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
