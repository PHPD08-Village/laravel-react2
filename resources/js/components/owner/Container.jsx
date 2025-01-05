import React, { useState, useRef } from 'react';
import Options from './Options';
import Maincontainer from './Maincontainer';
import Floatingbuttons from '../allpage/Floatingbuttons';

const Container = () => {
    const searchboxRef = useRef(null);
    const [selectedStars, setSelectedStars] = useState([]);

    const handleKeywordClick = (keyword) => {
        if (searchboxRef.current) {
            searchboxRef.current.addKeywordFromOutside(keyword);
        }
    };

    // 將篩選條件傳遞給 Maincontainer 元件
    const handleStarFilterChange = (newSelectedStars) => {
        setSelectedStars(newSelectedStars);
        if (searchboxRef.current) {
            searchboxRef.current.addKeywordFromOutside(`stars:${newSelectedStars.join(',')}`);
        }
    };

    const handleBudgetChange = (minBudget, maxBudget) => {
        if (searchboxRef.current) {
            searchboxRef.current.addKeywordFromOutside(`budget:${minBudget}-${maxBudget}`);
        }
    };

    return (
        <div>
            {/* <!-- container --> */}
            <div className="container">
                <Options onKeywordClick={handleKeywordClick} onFilterChange={handleStarFilterChange} onBudgetChange={handleBudgetChange} />
                <Maincontainer ref={searchboxRef} selectedStars={selectedStars} />
                <Floatingbuttons />
            </div>
        </div>
    );
};

export default Container;
