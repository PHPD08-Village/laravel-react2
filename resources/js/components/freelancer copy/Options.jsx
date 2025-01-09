import React, { useState } from 'react';
import { IonIcon } from '@ionic/react';
import { star } from 'ionicons/icons';

import BudgetFilter from './BudgetFilter'; // 確保路徑正確

const Options = ({ onKeywordClick, onFilterChange, onBudgetChange }) => {
    const [selectedKeyword, setSelectedKeyword] = useState('');
    const [selectedStars, setSelectedStars] = useState([]);

    const handleKeywordClick = (keyword) => {
        setSelectedKeyword(keyword);
        // console.log(`Selected keyword: ${keyword}`);
        if (onKeywordClick) {
            onKeywordClick(keyword);
        }
    };

    const handleStarClick = (rating) => {
        const newSelectedStars = [...selectedStars];
        const index = newSelectedStars.indexOf(rating);
        if (index !== -1) {
            newSelectedStars.splice(index, 1);
        } else {
            newSelectedStars.push(rating);
        }
        setSelectedStars(newSelectedStars);
        onFilterChange(newSelectedStars);
    };

    const renderStars = (count) => {
        return Array.from({ length: count }).map((_, index) => (
            <IonIcon
                key={index}
                icon={star}
                className="star-icon" // 使用 CSS 類來應用樣式
            />
        ));
    };

    return (
        <div className="foptions">
            <div>
                <h2>篩選條件</h2>
                <hr />
                <h3>程式分類</h3>
                <div className="fkeywords">
                    <a href="#" onClick={() => handleKeywordClick('HTML')}>HTML</a>
                    <a href="#" onClick={() => handleKeywordClick('C++')}>C++</a>
                    <a href="#" onClick={() => handleKeywordClick('UI')}>UI</a>
                    <a href="#" onClick={() => handleKeywordClick('UX')}>UX</a>
                    <a href="#" onClick={() => handleKeywordClick('JavaScript')}>JavaScript</a>
                    <a href="#" onClick={() => handleKeywordClick('Python')}>Python</a>
                    <a href="#" onClick={() => handleKeywordClick('SQL')}>SQL</a>
                    <a href="#" onClick={() => handleKeywordClick('Java')}>Java</a>
                    <a href="#" onClick={() => handleKeywordClick('PHP')}>PHP</a>
                </div>
            </div>
            <hr />
            <div className="ffilter">
                <h3>評價</h3>
                <div className="star-filter">
                    {[1, 2, 3, 4, 5].map((rating) => (
                        <div
                            key={rating}
                            onClick={() => handleStarClick(rating)}
                            className="star-container"
                        >
                            <div className={`stars ${selectedStars.includes(rating) ? 'selected' : ''}`}>
                                {renderStars(rating)}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <hr />
            {/* 添加預算篩選器 */}
            <div className="fprice">
                <h3>案件預算
                </h3>
                <BudgetFilter onBudgetChange={onBudgetChange} />
            </div>
        </div>
    );
};

export default Options;
