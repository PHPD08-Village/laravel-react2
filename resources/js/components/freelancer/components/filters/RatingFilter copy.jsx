// freelancer2/components/filters/RatingFilter.jsx
import React, { useContext } from 'react';
import { FreelancerContext } from '../../FreelancerProvider';

const RatingFilter = () => {
    const { buttonKeywords, setButtonKeywords, filterData, keywords } = useContext(FreelancerContext);

    const handleRatingClick = (range) => {
        const newButtonKeywords = buttonKeywords.includes(range)
            ? buttonKeywords.filter((keyword) => keyword !== range)
            : [...buttonKeywords, range];
        setButtonKeywords(newButtonKeywords);
        filterData([...keywords, ...newButtonKeywords]);
    };

    const isSelected = (range) => buttonKeywords.includes(range);

    return (
        <div>
            <button
                className={isSelected('1-1.9') ? 'selected' : ''}
                onClick={() => handleRatingClick('1-1.9')}
            >
                1~1.9
            </button>
            <button
                className={isSelected('2-2.9') ? 'selected' : ''}
                onClick={() => handleRatingClick('2-2.9')}
            >
                2~2.9
            </button>
            <button
                className={isSelected('3-3.9') ? 'selected' : ''}
                onClick={() => handleRatingClick('3-3.9')}
            >
                3~3.9
            </button>
            <button
                className={isSelected('4-4.9') ? 'selected' : ''}
                onClick={() => handleRatingClick('4-4.9')}
            >
                4~4.9
            </button>
            <button
                className={isSelected('5') ? 'selected' : ''}
                onClick={() => handleRatingClick('5')}
            >
                5
            </button>
        </div>
    );
};

export default RatingFilter;
