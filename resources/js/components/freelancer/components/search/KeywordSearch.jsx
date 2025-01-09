// freelancer2/components/filters/KeywordSearch.jsx
import React, { useContext, useState } from 'react';
import { AppfreelancerContext } from '../../AppProvider';

const KeywordSearch = () => {
    const { setKeywords, keywords, totalResultsCount  } = useContext(AppfreelancerContext);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSearch = () => {
        if (inputValue.trim() !== '' && !keywords.includes(inputValue.trim())) {
            setKeywords([...keywords, inputValue.trim()]);
        }
        setInputValue(''); // 清空輸入框
    };

    return (
        <>
            <div className="fsearch">
                <p>目前查詢到 {totalResultsCount} 筆資料</p>
                <input
                    type="text"
                    placeholder="請輸入關鍵字"
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                />
                <button onClick={handleSearch}><img src="/img/Search.png" alt="fsearch" /></button>
            </div>
        </>
    );
};

export default KeywordSearch;
