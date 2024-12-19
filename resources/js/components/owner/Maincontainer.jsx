import React from 'react';
import Hanber from '../../../../public/img/hanber.png'
import Tick from '../../../../public/img/Tick Box.png'
import Left from '../../../../public/img/left.png'
import Leftnext from '../../../../public/img/leftnext.png'
import Rightnext from '../../../../public/img/rightnext.png'
import Right from '../../../../public/img/right.png'
import Green from '../../../../public/img/Green Circle.png'
import Red from '../../../../public/img/Red Circle.png'
import Star from '../../../../public/img/Star 5.png'
import Company1 from '../../../../public/img/company1.png'
import Company2 from '../../../../public/img/company2.png'
import Company3 from '../../../../public/img/company3.png'
import Company4 from '../../../../public/img/company4.png'
import Company5 from '../../../../public/img/company5.png'
import Fire from '../../../../public/img/Fire.png'


const Maincontainer = () => (
    <div className="omaincontainer">
        {/* <!-- tab/search --> */}
        <div className="osearch">
            <div className="osearchtab">
                <h2>缺工&ensp; &gt; &ensp;HTML</h2>
            </div>
            {/* <!-- search keyword --> */}
            <div className="okeyword">
                <a href="#">
                    <img src="https://github.com/PHPD08-Village/PHPD08-Team/blob/main/img/Icon/Search.png?raw=true" alt="search" />
                </a>
                <p style={{ fontsize: '30px' }}>|</p>
                <p>search keyword</p>
            </div>
            <div className="ospace"></div>
            {/* <!-- hanber --> */}
            {/* <!-- 觸發彈出框的按鈕 --> */}
            <div className="ohanber">
                {/* <!-- 觸發彈出框的連結 --> */}
                {/* <!-- 彈出框結構 --> */}
                <a href="#" id="openModalBtn" className="oopen-modal-btn" onClick={(e) => { e.preventDefault(); openModal(); }}>
                    <img src={Hanber} style={{ width: '40px' }} alt="Hanber" />
                </a>
            </div>
        </div>
        {/* <!-- order --> */}
        <div className="oorder">
            <p style={{ flex: 5 }}>顯示 5-5 of 共 2222 筆資料</p>
            <a href="#">最近更新</a>
            <a href="#">點閱率最高</a>
            <a href="#">企業評價最高</a>
            <a href="#">應徵人數</a>
        </div>
        {/* <!-- content --> */}
        <div>
            {/* <!-- contentone --> */}
            <div className="ocontentone">
                <div className="ocontent1">
                    <a href="/personalinfo">
                        <div className="ohot"><img src="https://github.com/PHPD08-Village/PHPD08-Team/blob/main/img/Icon/Crown.png?raw=true" alt="hot" /></div>
                        <div style={{ flex: 1 }}></div>
                        <div className="ocompanyphoto">
                            <img src={Company1} alt="company1" />
                        </div>
                        <div className="ocompanyname">
                        </div>
                        <div className="ocompanystar">
                            <div></div>
                            <div className="ogreen">
                                <img src={Green} alt="green" />
                            </div>
                            <div className="ostar">
                                <img src={Star} alt="star" />
                            </div>
                            <p>評論數</p>
                        </div>
                    </a>
                </div>
                <div className="ocontent2">
                    <a href="/personalinfo">
                        <div className="otitle">
                            <div>
                                <h1>王曉明</h1>
                                <p>手機已驗證</p>
                                <img src={Tick} alt="tick" />
                                <p>信箱已驗證</p>
                                <img src={Tick} alt="tick" />
                            </div>
                        </div>
                        <div className="oset">
                            <div className="odate">
                                <h4>工作年資：3~4年</h4>
                            </div>
                            <div className="ocaseprice">
                            </div>
                        </div>
                        <div className="olocation">地區：台灣/台北市信義區</div>
                        <div className="ocasecontent">
                            快樂狗勾為一個新上市的品牌，需要設計一個具有品牌風格的網站，
                            專注於提供優質、健康、和有趣的狗狗用品...更多
                        </div>
                        <div className="orequire">
                            <p style={{ margin: '16px 4px' }}>使用語言：</p>
                            <div>
                                <p>HTML</p>
                                <p>C++</p>
                                <p>CSS</p>
                                <p>Java</p>
                                <p>PHP</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="ocontentnew">
                    <img src="https://github.com/PHPD08-Village/PHPD08-Team/blob/main/img/Icon/New.png?raw=true" alt="new" />
                </div>
                <div className="ocontent3">
                    <div className="otime">3分鐘前更新</div>
                    <div className="ocontent3btn">
                        <a className="ocollect" href="#">收藏</a>
                        <a className="otakecase" href="#">委託</a>
                    </div>
                    <div className="opeople"><p>已完成專案件數：10 件</p></div>
                    <div className="ofrequency">7777 瀏覽次數</div>
                    <div style={{ flex: 1.5 }}></div>
                </div>
            </div>
            {/* <!-- content2 --> */}
            <div className="ocontent">
                <div className="ocontent1">
                    <div style={{ flex: 1 }}></div>
                    <div className="ocompanyphoto">
                        <img src={Company2} alt="company1" />
                    </div>
                    <div className="ocompanyname">
                    </div>
                    <div className="ocompanystar">
                        <div></div>
                        <div className="ogreen">
                            <img src={Red} alt="red" />
                        </div>
                        <div className="ostar">
                            <img src={Star} alt="star" />
                        </div>
                        <p>評論數</p>
                    </div>
                </div>
                <div className="ocontent2">
                    <div className="otitle">
                        <div>
                            <h1>王曉明</h1>
                            <p>手機已驗證</p>
                            <img src={Tick} alt="tick" />
                            <p>信箱已驗證</p>
                            <img src={Tick} alt="tick" />
                        </div>
                    </div>
                    <div className="oset">
                        <div className="odate">
                            <h4>工作年資：3~4年</h4>
                        </div>
                        <div className="ocaseprice">
                            {/* <h4>案件預算：$20,000 - $50,000</h4> */}
                        </div>
                    </div>
                    <div className="olocation">地區：台灣/台北市信義區</div>
                    <div className="ocasecontent">
                        快樂狗勾為一個新上市的品牌，需要設計一個具有品牌風格的網站，
                        專注於提供優質、健康、和有趣的狗狗用品...更多
                    </div>
                    <div className="orequire">
                        <p style={{ margin: '16px 4px' }}>使用語言：</p>
                        <div>
                            <p>HTML</p>
                            <p>C++</p>
                            <p>CSS</p>
                            <p>Java</p>
                            <p>PHP</p>
                        </div>
                    </div>
                </div>

                <div className="ocontentnew">
                    <img src={Fire} alt="new" />
                </div>
                <div className="ocontent3">
                    <div className="otime">3分鐘前更新</div>
                    <div className="ocontent3btn">
                        <a className="ocollect" href="#">收藏</a>
                        <a className="otakecase" href="#">委託</a>
                    </div>
                    <div className="opeople"><p>已完成專案件數：10 件</p></div>
                    <div className="ofrequency">7777 瀏覽次數</div>
                    <div style={{ flex: 1.5 }}></div>
                </div>
            </div>
            {/* <!-- content3 --> */}
            <div className="ocontent">
                <div className="ocontent1">
                    {/* <!-- <div className="ohot"><img src="../img/hot.png" alt="" /></div> --> */}
                    <div style={{ flex: 1 }}></div>
                    <div className="ocompanyphoto">
                        <img src={Company3} alt="" />
                    </div>
                    <div className="ocompanyname">
                    </div>
                    <div className="ocompanystar">
                        <div></div>
                        <div className="ogreen">
                            <img src={Green} alt="green" />
                        </div>
                        <div className="ostar">
                            <img src={Star} alt="star" />
                        </div>
                    </div>
                </div>
                <div className="ocontent2">
                    <div className="otitle">
                        <div>
                            <h1>王曉明</h1>
                            <p>手機已驗證</p>
                            <img src={Tick} alt="tick" />
                            <p>信箱已驗證</p>
                            <img src={Tick} alt="tick" />
                        </div>
                    </div>
                    <div className="oset">
                        <div className="odate">
                            <h4>工作年資：3~4年</h4>                        </div>
                        <div className="ocaseprice">
                            {/* <h4>案件預算：$20,000 - $50,000</h4> */}
                        </div>
                    </div>
                    <div className="olocation">地區：台灣/台北市信義區</div>
                    <div className="ocasecontent">
                        快樂狗勾為一個新上市的品牌，需要設計一個具有品牌風格的網站，
                        專注於提供優質、健康、和有趣的狗狗用品...更多
                    </div>
                    <div className="orequire">
                        <p style={{ margin: '16px 4px' }}>使用語言：</p>
                        <div>
                            <p>HTML</p>
                            <p>C++</p>
                            <p>CSS</p>
                            <p>Java</p>
                            <p>PHP</p>
                        </div>
                    </div>
                </div>
                <div className="ocontentnew"></div>
                <div className="ocontent3">
                    <div className="otime">3分鐘前更新</div>
                    <div className="ocontent3btn">
                        <a className="ocollect" href="#">收藏</a>
                        <a className="otakecase" href="#">委託</a>
                    </div>
                    <div className="opeople"><p>已完成專案件數：10 件</p></div>
                    <div className="ofrequency">7777 瀏覽次數</div>
                    <div style={{ flex: 1.5 }}></div>
                </div>
            </div>
            {/* <!-- content4 --> */}
            <div className="ocontent">
                <div className="ocontent1">
                    {/* <!-- <div className="ohot"><img src="../img/hot.png" alt="" /></div> --> */}
                    <div style={{ flex: 1.5 }}></div>
                    <div className="ocompanyphoto">
                        <img src={Company4} alt="" />
                    </div>
                    <div className="ocompanyname">
                    </div>
                    <div className="ocompanystar">
                        <div></div>
                        <div className="ogreen">
                            <img src={Red} alt="red" />
                        </div>
                        <div className="ostar">
                            <img src={Star} alt="star" />
                        </div>
                    </div>
                </div>
                <div className="ocontent2">
                    <div className="otitle">
                        <div>
                            <h1>王曉明</h1>
                            <p>手機已驗證</p>
                            <img src={Tick} alt="tick" />
                            <p>信箱已驗證</p>
                            <img src={Tick} alt="tick" />
                        </div>
                    </div>
                    <div className="oset">
                        <div className="odate">
                            <h4>工作年資：3~4年</h4>                        </div>
                        <div className="ocaseprice">
                            {/* <h4>案件預算：$20,000 - $50,000</h4> */}
                        </div>
                    </div>
                    <div className="olocation">地區：台灣/台北市信義區</div>
                    <div className="ocasecontent">
                        快樂狗勾為一個新上市的品牌，需要設計一個具有品牌風格的網站，
                        專注於提供優質、健康、和有趣的狗狗用品...更多
                    </div>
                    <div className="orequire">
                        <p style={{ margin: '16px 4px' }}>使用語言：</p>
                        <div>
                            <p>HTML</p>
                            <p>C++</p>
                            <p>CSS</p>
                            <p>Java</p>
                            <p>PHP</p>
                        </div>
                    </div>
                </div>
                <div className="ocontentnew"></div>
                <div className="ocontent3">
                    <div className="otime">3分鐘前更新</div>
                    <div className="ocontent3btn">
                        <a className="ocollect" href="#">收藏</a>
                        <a className="otakecase" href="#">委託</a>
                    </div>
                    <div className="opeople"><p>已完成專案件數：10 件</p></div>
                    <div className="ofrequency">7777 瀏覽次數</div>
                    <div style={{ flex: 1.5 }}></div>
                </div>
            </div>
            {/* <!-- content5 --> */}
            <div className="ocontent">
                <div className="ocontent1">
                    {/* <!-- <div className="ohot"><img src="../img/hot.png" alt="" /></div> --> */}
                    <div style={{ flex: 1.5 }}></div>
                    <div className="ocompanyphoto">
                        <img src={Company5} alt="" />
                    </div>
                    <div className="ocompanyname">
                    </div>
                    <div className="ocompanystar">
                        <div></div>
                        <div className="ogreen">
                            <img src={Green} alt="green" />
                        </div>
                        <div className="ostar">
                            <img src={Star} alt="star" />
                        </div>
                    </div>
                </div>
                <div className="ocontent2">
                    <div className="otitle">
                        <div>
                            <h1>王曉明</h1>
                            <p>手機已驗證</p>
                            <img src={Tick} alt="tick" />
                            <p>信箱已驗證</p>
                            <img src={Tick} alt="tick" />
                        </div>
                    </div>
                    <div className="oset">
                        <div className="odate">
                            <h4>工作年資：3~4年</h4>                        </div>
                        <div className="ocaseprice">
                            {/* <h4>案件預算：$20,000 - $50,000</h4> */}
                        </div>
                    </div>
                    <div className="olocation">地區：台灣/台北市信義區</div>
                    <div className="ocasecontent">
                        快樂狗勾為一個新上市的品牌，需要設計一個具有品牌風格的網站，
                        專注於提供優質、健康、和有趣的狗狗用品...更多
                    </div>
                    <div className="orequire">
                        <p style={{ margin: '16px 4px' }}>使用語言：</p>
                        <div>
                            <p>HTML</p>
                            <p>C++</p>
                            <p>CSS</p>
                            <p>Java</p>
                            <p>PHP</p>
                        </div>
                    </div>
                </div>
                <div className="ocontentnew"></div>
                <div className="ocontent3">
                    <div className="otime">3分鐘前更新</div>
                    <div className="ocontent3btn">
                        <a className="ocollect" href="#">收藏</a>
                        <a className="otakecase" href="#">委託</a>
                    </div>
                    <div className="opeople"><p>已完成專案件數：10 件</p></div>
                    <div className="ofrequency">7777 瀏覽次數</div>
                    <div style={{ flex: 1.5 }}></div>
                </div>
            </div>
        </div>
        {/* <!-- tab --> */}
        <div className="otab">
            <a href="#"><img src={Left} alt="" /></a>
            <a href="#"><div className="oLeftnext"><img src={Leftnext} alt="" /><p>上一頁</p></div></a>
            <a style={{ color: ' #464646', backgroundColor: '#FFA500', border: '1px solid #000000' }} href="#">1</a>
            <a href="#">2</a>
            <a href="#">3</a>
            <p>...</p>
            <a href="#">7</a>
            <a href="#">8</a>
            <a href="#"><div className="oRightnext"><p>下一頁</p><img src={Rightnext} alt="" /></div></a>
            <a href="#"><img src={Right} alt="" /></a>
        </div>
    </div>
);

export default Maincontainer;
