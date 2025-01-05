import React, { useState } from 'react';

const Options = ({ onKeywordClick }) => {
    const [selectedKeyword, setSelectedKeyword] = useState('');

    const handleKeywordClick = (keyword) => {
        setSelectedKeyword(keyword);
        console.log(`Selected keyword: ${keyword}`);
        if (onKeywordClick) {
            onKeywordClick(keyword);
        }
        // 這裡可以執行其他你需要的操作，例如將關鍵字傳遞給父元件或觸發其他邏輯
    };


    return (
        <div className="foptions">
            {/* <!-- 程式分類篩選 --> */}
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
            {/* <!-- 其他篩選 --> */}
            <div className="ffilter">
                <h3>企業相關篩選</h3>
                <div>
                    <p>評價</p>
                    <button>5顆星</button>
                    <button>4顆星</button>
                    <button>3顆星</button>
                    <button>2顆星</button>
                    <button>1顆星</button>
                </div>
                <hr />
                <a href="#">今日更新</a>
                <a href="#">24HR內回覆</a>
                <a href="#">案件需求時間</a>
            </div>
            <hr />
            {/* <!-- 價格篩選 --> */}
            <div className="fprice">
                <h3>案件價錢</h3>
                <p>價格區間0~1000000 每一萬做一個區間 以橫式拉條的方式來篩選</p>
                <img src="/img/price.png" alt="" />
            </div>
        </div>
    );
};

export default Options;
