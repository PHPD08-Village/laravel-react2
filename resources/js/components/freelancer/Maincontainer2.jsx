import React from 'react';
import { Link } from 'react-router-dom';

import Search from './Search2';

const Maincontainer = () => (
    <div className="fmaincontainer">
        {/* <!-- tab(還沒加回去) --> */}
        {/* <!-- 關鍵字搜尋 --> */}
        <div className="fsearch">
            <input type="text" placeholder="請輸入關鍵字" maxLength="10" />
            <button><img src="/img/Search.png" alt="fsearch" /> </button>
        </div>
        {/* <!-- order --> */}
        <div className="forder">
            <p style={{ flex: 5 }}>顯示 5-5 of 共 2222 筆資料</p>
            <a href="#">最近更新</a>
            <a href="#">點閱率最高</a>
            <a href="#">企業評價最高</a>
            <a href="#">應徵人數</a>
        </div>
        {/* <!-- content --> */}
        <div>
            <Search />
        </div>
        {/* <!-- tab --> */}
        <div className="ftab">
            <a href="#"><img src="/img/left.png" alt="" /></a>
            <a href="#"><div className="fLeftnext"><img src="/img/leftnext.png" alt="" /><p>上一頁</p></div></a>
            <a style={{ color: ' #464646', backgroundColor: '#FFA500', border: '1px solid #000000' }} href="#">1</a>
            <a href="#">2</a>
            <a href="#">3</a>
            <p>...</p>
            <a href="#">7</a>
            <a href="#">8</a>
            <a href="#"><div className="fRightnext"><p>下一頁</p><img src="/img/rightnext.png" alt="" /></div></a>
            <a href="#"><img src="/img/right.png" alt="" /></a>
        </div>
    </div>
);

export default Maincontainer;
