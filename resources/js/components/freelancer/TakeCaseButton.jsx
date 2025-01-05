import React from 'react';
import axios from 'axios';

const TakeCaseButton = ({ pid }) => {
    const handleTakeCase = async () => {
        try {
            const response = await axios.post('/take-case', { pid });
            console.log('Take case response:', response.data.message);
            alert('接案成功等待業主通知');
            // 這裡可以添加一些提示或通知用戶已經成功接案
        } catch (error) {
            console.error('Error taking case:', error);
        }
    };

    return (
        <a className="ftakecase" href="#" onClick={handleTakeCase}>接案</a>
    );
};

export default TakeCaseButton;
