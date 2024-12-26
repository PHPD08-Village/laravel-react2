import React from 'react';

// 此為備份
const Options = () => (
    // <!-- 篩選條件 -->
    <div className="foptions">
        {/* <!-- 程式分類篩選 --> */}
        <div>
            <h2>篩選條件</h2>
            <hr />
            <h3>程式分類</h3>
            <div className="fkeywords">
                <a href="#">HTML</a>
                <a href="#">C++</a>
                <a href="#">UI</a>
                <a href="#">UX</a>
                <a href="#">JavaScript</a>
                <a href="#">Python</a>
                <a href="#">SQL</a>
                <a href="#">Java</a>
                <a href="#">PHP</a>
            </div>
        </div>
        <hr />
        {/* <!-- 其他篩選 --> */}
        <div className="ffilter">
            <h3>企業相關篩選</h3>
            <a href="">評價</a>
            <a href="">今日更新</a>
            <a href="">24HR內回覆</a>
            <a href="">案件需求時間</a>
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

export default Options;
