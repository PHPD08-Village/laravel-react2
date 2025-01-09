import React, { useState } from 'react';

const BudgetFilter = ({ onBudgetChange }) => {
    const [minBudget, setMinBudget] = useState(0);
    const [maxBudget, setMaxBudget] = useState(1000000);

    const handleMinBudgetChange = (e) => {
        const newMinBudget = Number(e.target.value);
        setMinBudget(newMinBudget);
        onBudgetChange(newMinBudget, maxBudget);
    };

    const handleMaxBudgetChange = (e) => {
        const newMaxBudget = Number(e.target.value);
        setMaxBudget(newMaxBudget);
        onBudgetChange(minBudget, newMaxBudget);
    };

    return (
        <div className="budget-filter">
            <p>預算區間 0 ~ 1000000</p>
            <div className="slider-container">
                <input
                    type="range"
                    min="0"
                    max="1000000"
                    value={minBudget}
                    onChange={handleMinBudgetChange}
                    // className="slider"
                />
                <input
                    type="range"
                    min="0"
                    max="1000000"
                    value={maxBudget}
                    onChange={handleMaxBudgetChange}
                    // className="slider"
                />
            </div>
            <div>
                <span>最小預算: {minBudget}</span>
                <span>最大預算: {maxBudget}</span>
            </div>
        </div>
    );
};

export default BudgetFilter;
