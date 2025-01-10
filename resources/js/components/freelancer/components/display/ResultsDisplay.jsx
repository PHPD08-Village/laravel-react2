// freelancer2/components/ResultsDisplay.jsx
import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { FreelancerContext } from '../../FreelancerProvider';

import UserDetails from './UserDetails';
import CaseDetails from './CaseDetails';
import TimeAgo from './TimeAgo'; // 時間差
import FavoriteButton from './FavoriteButton';
import TakeCaseButton from './TakeCaseButton';
import ApplyCount from './ApplyCount';

const ResultsDisplay = () => {
    const { filteredResults, isLoading } = useContext(FreelancerContext);
    const navigate = useNavigate();

    useEffect(() => {
        // console.log('Rendering ResultsDisplay:', filteredResults); // 添加調試輸出
    }, [filteredResults]);

    const handleNavigation = async (result) => {
        try {
            // 更新瀏覽次數
            await axios.post('/click-count', { pid: result.pid, click_count: result.click_count + 1 });

            // 導航至詳細頁面
            navigate("/detail", { state: { pid: result.pid } });
        } catch (error) {
            console.error('Error updating view count:', error);
        }
    };

    if (isLoading) {
        return <div>加載中...</div>; // 顯示加載狀態
    }

    if (!filteredResults || !filteredResults.length) {
        return <div>暫無數據</div>; // 確保沒有數據時顯示合適的提示
    }
    console.log(filteredResults);

    return (
        <>
            {filteredResults.map((result, index) => (
                <div key={index} className={`fcontent`}>
                    <UserDetails result={result} handleNavigation={handleNavigation} />
                    <CaseDetails result={result} handleNavigation={handleNavigation} />
                    <div className="fcontent3">
                        <div className="ftime"><TimeAgo date={result.updated_at} /></div>
                        <div className="fcontent3btn">
                            <FavoriteButton pid={result.pid} /> {/* 收藏 */}
                            <TakeCaseButton pid={result.pid} /> {/* 接案 */}
                        </div>
                        <ApplyCount count={result.apply_count} /> {/* 競爭人數 */}
                        <div className="ffrequency">{result.click_count} 瀏覽次數</div>
                        <div style={{ flex: 1.5 }}></div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default ResultsDisplay;
