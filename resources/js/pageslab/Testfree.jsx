import React from 'react'
import Testfreelance from './Testfreelance'

const Testfree = () => {
    return (
        <div className="fmaincontainer">
            {/* <!-- content --> */}
            <div>
                {/* <!-- contentone --> */}
                <div className="fcontentone">
                    <div className="fcontent1">
                        <a href="/detail">
                            <div className="fhot"><img src="https://github.com/PHPD08-Village/PHPD08-Team/blob/main/img/Icon/Crown.png?raw=true" alt="hot" /></div>
                            <div style={{ flex: 1 }}></div>
                            <div className="fcompanyphoto">
                                <img src="/img/company1.png" alt="company1" />
                            </div>
                            <div className="fcompanyname">
                                <h4 style={{ margin: '5px' }}>快樂狗勾有限公司</h4>
                            </div>
                            <div className="fcompanystar">
                                <div></div>
                                <div className="fgreen">
                                    <img src="/img/Green Circle.png" alt="green" />
                                </div>
                                <div className="fstar">
                                    <img src="/img/Star 5.png" alt="star" />
                                </div>
                            </div>
                        </a>
                    </div>
                    <Testfreelance />
                    <div className="fcontentnew">
                        <img src="https://github.com/PHPD08-Village/PHPD08-Team/blob/main/img/Icon/New.png?raw=true" alt="new" />
                    </div>
                    <div className="fcontent3">
                        <div className="ftime">3分鐘前更新</div>
                        <div className="fcontent3btn">
                            <a className="fcollect" href="#">收藏</a>
                            <a className="ftakecase" href="#">接案</a>
                        </div>
                        <div className="fpeople">0~5 人爭取中</div>
                        <div className="ffrequency">7777 瀏覽次數</div>
                        <div style={{ flex: 1.5 }}></div>
                    </div>
                </div>
                {/* <!-- content2 --> */}
                {/* <div className="fcontent">
                    <div className="fcontent1">
                        <div style={{ flex: 1 }}></div>
                        <div className="fcompanyphoto">
                            <img src="/img/company2.png" alt="" />
                        </div>
                        <div className="fcompanyname">
                            <h4 style={{ margin: '5px' }}>快樂狗勾有限公司</h4>
                        </div>
                        <div className="fcompanystar">
                            <div></div>
                            <div className="fgreen">
                                <img src="/img/Red Circle.png" alt="green" />
                            </div>
                            <div className="fstar">
                                <img src="/img/Star 5.png" alt="star" />
                            </div>
                        </div>
                    </div>
                    <div className="fcontent2">
                        <div className="ftitle">
                            <h1>獨立品牌網頁設計</h1>
                        </div>
                        <div className="fset">
                            <div className="fdate">
                                <h4>案件時間：2025/01/01-2025/04/30</h4>
                            </div>
                            <div className="fcaseprice">
                                <h4>案件預算：$20,000 - $50,000</h4>
                            </div>
                        </div>
                        <div className="flocation">地區：台灣/台北市信義區</div>
                        <div className="fcasecontent">
                            快樂狗勾為一個新上市的品牌，需要設計一個具有品牌風格的網站，
                            專注於提供優質、健康、和有趣的狗狗用品...更多
                        </div>
                        <div className="frequire">
                            <p style={{ margin: '16px 4px' }}>需求語言：</p>
                            <div>
                                <p>HTML</p>
                                <p>C++</p>
                                <p>CSS</p>
                                <p>Java</p>
                                <p>PHP</p>
                            </div>
                        </div>
                    </div>
                    <div className="fcontentnew">
                        <img src="https://github.com/PHPD08-Village/PHPD08-Team/blob/main/img/Icon/Fire.png?raw=true" alt="Fire" />
                    </div>
                    <div className="fcontent3">
                        <div className="ftime">3分鐘前更新</div>
                        <div className="fcontent3btn">
                            <a className="fcollect" href="#">收藏</a>
                            <a className="ftakecase" href="#">接案</a>
                        </div>
                        <div className="fpeople">0~5 人爭取中</div>
                        <div className="ffrequency">7777 瀏覽次數</div>
                        <div style={{ flex: 1.5 }}></div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Testfree