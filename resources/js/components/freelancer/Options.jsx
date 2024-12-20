import React from 'react';
import Price from '../../../../public/img/price.png'

const Options = () => (
    // <!-- options -->
    <div className="foptions">
        {/* <!-- code type --> */}
        <div className="fcode">
            <h3>篩選條件</h3>
            <hr />
            <h3>程式分類</h3>
            <p>全端工程師 Full Stack Engineer</p>
            <p>前端工程師 Front-End Engineer</p>
            <p>後端工程師 Back-End Engineer</p>
            <p>行動應用開發工程師 Mobile App Developer</p>
            <p>資料工程師 Data Engineer</p>
            <p>遊戲開發工程師 Game Developer</p>
            <p>安全工程師 Security Engineer</p>
            <p>DevOps工程師 DevOps Engineer</p>
            <p>嵌入式系統工程師 Embedded Systems Engineer</p>
        </div>
        <hr />
        {/* <!-- filter --> */}
        <div className="ffilter">
            <h3>企業相關篩選</h3>
            <p>評價</p>
            <p>今日更新</p>
            <p>24HR內回覆</p>
            <p>案件需求時間</p>
        </div>
        <hr />
        {/* <!-- price --> */}
        <div className="fprice">
            <h3>案件價錢</h3>
            <img src={Price} alt="" />
        </div>
        <hr />
        {/* <!-- Keywords --> */}
        <h3>關鍵字</h3>
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
);

export default Options;
