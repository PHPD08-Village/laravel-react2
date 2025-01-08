// freelancer2/components/SelectedKeywords.jsx
import React, { useContext } from 'react';
import { AppfreelancerContext } from '../../AppProvider';

const SelectedKeywords = () => {
    const { keywords, removeKeyword, buttonKeywords } = useContext(AppfreelancerContext);

    return (
        <div>
            {keywords.filter(keyword => !buttonKeywords.includes(keyword)).map((keyword, index) => (
                <div key={index} style={{ display: 'inline-block', margin: '5px', padding: '5px', border: '1px solid #ccc', borderRadius: '5px' }}>
                    {keyword} <button onClick={() => removeKeyword(index)}>X</button>
                </div>
            ))}
        </div>
    );
};

export default SelectedKeywords;
