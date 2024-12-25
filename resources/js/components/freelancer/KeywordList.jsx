import React from 'react';

const KeywordList = ({ keywords, handleRemoveKeyword }) => {
    return (
        <div>
            {keywords.map((keyword, index) => (
                <div key={index} style={{ display: 'inline-block', margin: '5px', padding: '5px', border: '1px solid #ccc', borderRadius: '5px' }}>
                    {keyword}
                    <button onClick={() => handleRemoveKeyword(keyword)} style={{ marginLeft: '10px' }}>X</button>
                </div>
            ))}
        </div>
    );
}

export default KeywordList;
