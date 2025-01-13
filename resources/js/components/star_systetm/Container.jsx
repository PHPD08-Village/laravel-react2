import React, { useEffect } from 'react';

import StarSystem from './StarSystem'
import Floatingbuttons from '../allpage/Floatingbuttons'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';

const StarPage = () => {
    // const { user } = useAuth();
    const navigate = useNavigate();

    // useEffect(() => {
    //     if (!user) {
    //         alert('請先登入才能進行評價。');
    //         navigate('/')
    //         return;
    //     }
    // }, [user, navigate]);

    // // 確保在 user 尚未被定義或認證之前，不會渲染組件
    // if (!user) {
    //     return null;
    // }

    return (
        <div className="container">
            <StarSystem />
            <Floatingbuttons />
        </div>
    );
}

export default StarPage;
