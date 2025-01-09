// freelancer2/components/filters/RatingFilter.jsx
import React, { useContext } from 'react';
import { IonIcon } from '@ionic/react';
import { star } from 'ionicons/icons';

import { AppfreelancerContext } from '../../AppProvider';

const RatingFilter = () => {
    const { buttonKeywords, setButtonKeywords, filterData, keywords } = useContext(AppfreelancerContext);

    const handleRatingClick = (range) => {
        const newButtonKeywords = buttonKeywords.includes(range)
            ? buttonKeywords.filter((keyword) => keyword !== range)
            : [...buttonKeywords, range];
    
        setButtonKeywords(newButtonKeywords);
    };
    
    

    const isSelected = (range) => buttonKeywords.includes(range);

    const renderStars = (count) => {
        return Array.from({ length: count }).map((_, index) => (
            <IonIcon
                key={index}
                icon={star}
                className="star-icon"
            />
        ));
    };

    return (
        <div>
            <h3>評價</h3>
            <div className="star-filter">
                {[1, 2, 3, 4, 5].map((range) => (
                    <div
                        key={range}
                        onClick={() => handleRatingClick(`${range}-${range}.9`)}
                        className="star-container"
                    >
                        <div className={`stars ${isSelected(`${range}-${range}.9`) ? 'selected' : ''}`}>
                            {renderStars(range)}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RatingFilter;
