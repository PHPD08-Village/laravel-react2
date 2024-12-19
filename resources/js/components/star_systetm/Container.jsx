import React, { useEffect } from 'react';

import StarSystem from './StarSystem'
import Space from './Space'

function submitRating() {
    const starProElement = document.querySelector('input[name="star1"]:checked');
    const starReplyElement = document.querySelector('input[name="star2"]:checked');
    const starCoorElement = document.querySelector('input[name="star3"]:checked');

    if (!starProElement || !starReplyElement || !starCoorElement) {
        alert('請確保所有評分項目都已選取');
        return;
    }

    const starPro = parseInt(starProElement.value);
    const starReply = parseInt(starReplyElement.value);
    const starCoor = parseInt(starCoorElement.value);

    const aveRating = ((starPro + starReply + starCoor) / 3).toFixed(1);

    alert(`您已評價 ${aveRating} 星`)
}

const StarPage = () => {
    useEffect(() => {
        const submitBtn = document.getElementById('submitStar');
        if (submitBtn) {
            submitBtn.addEventListener('click', submitRating)
        }
        // 在組件被卸載時清除事件監聽器
        return () => {
            if (submitBtn) {
                submitBtn.removeEventListener('click', submitRating)
            }
        };
    }, []);

    return (
        <div className="container">
            <StarSystem />
            <Space />
        </div>
    );
}

export default StarPage;
