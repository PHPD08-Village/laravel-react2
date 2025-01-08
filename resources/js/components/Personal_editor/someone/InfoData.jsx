import React from 'react';
import { Link } from 'react-router-dom';
import Floatingbuttons from '../Floating';
import InfoSideBar from './InfoSideBar';
import InfoBar from './InfoBar';

function infoData() {
  return (
    <div className="ifcontainer">
    {/* <!-- 標題快捷列 --> */}
    <h3 className="infoTitle">
        <img src="https://github.com/PHPD08-Village/PHPD08-Team/blob/main/img/Icon/Start.png?raw=true"
            alt="startIcon" />
        <span>首頁</span>
        <span>&gt;</span>
        <span>我是案主</span>
        <span>&gt;</span>
        <span>我的帳戶</span>
    </h3>

    {/* <!-- 資料框框 --> */}
    <div className="data">
        {/* <!--左側欄位  --> */}
        {/* <div className="leftCol">
            <div className="leftColTwo">
                <div className="leftColOne">
                    <button className="infoBtn active"><Link to="/infodata" className="alink">案主</Link></button>
                    <button className="infoBtn"><Link to="/personal_editor" className="alink">接案者</Link></button>
                </div>
                <div>
                    <h3>帳戶管理</h3>
                    <hr />
                    <span className="leftItem">編輯個人資料</span>
                </div>
                <div>
                    <h3>案件管理</h3>
                    <hr />
                    <ul>
                        <li className="leftItem"><Link to="/infocase" className="alink">審核中</Link></li>
                        <li className="leftItem"><Link to="/infocasepub" className="alink">刊登中</Link></li>
                    </ul>
                    <span className="leftItem"><Link to="/infoclosecase" className="alink">已完成/已關閉案件</Link></span>
                </div>
                <div>
                    <h3>人才管理</h3>
                    <hr />
                    <span className="leftItem"><Link to="/infocollect" className="alink">已收藏人才</Link></span>
                </div>
            </div>
        </div> */}
        <InfoSideBar />
        {/* <!-- 右側欄位 --> */}
        <div className="rightCol">
            {/* <div className="rightColOne">
                <div>
                    <img src="./imgs/bird.png" alt="使用者大頭照" />
                </div>
                <div>
                    <span>你好！ XXX</span>
                    <span>會員編號：00001</span>
                </div>
                <div>
                    <a href="">
                        <img src="./imgs/file.png" alt="" />
                        <span>刊登新案件</span>
                    </a>
                </div>
            </div> */}
            <InfoBar/>
            <div className="irightColTwo">
                <div className="isection icaseNotify">
                    <h3>案件訊息通知</h3>
                    <div>
                        <ul>
                            <li>獨立品牌網頁設計</li>
                            <li>獨立品牌網頁設計</li>
                            <li>獨立品牌網頁設計</li>
                            <li>獨立品牌網頁設計</li>
                        </ul>
                        <a href="#">...更多</a>
                    </div>

                </div>
                <div className="isection isystemNotify">
                    <h3>系統通知</h3>
                    <div>
                        <ul>
                            <li>尚無通知</li>
                        </ul>
                    </div>
                </div>
                <div className="isection irecords">
                    <h3>瀏覽紀錄</h3>
                    <div>
                        <ul>
                            <li>陳曉明</li>
                            <li>王小白</li>
                            <li>李兔兔</li>
                            <li>快樂修狗</li>
                        </ul>
                        <a href="#">...更多</a>
                    </div>

                </div>
                <div className="isection ifeedback">
                    <h3>問題回報</h3>
                    <p>您對我們所提供的服務還滿意嗎？歡迎您提出建議給我們。</p>
                    <form>
                        <textarea rows="4" cols="50" placeholder="請在此輸入文字"></textarea>
                        <button type="button">送出</button>
                    </form>

                </div>
            </div>
            
        </div>
    </div>
    <Floatingbuttons />
    </div>
  )
}

export default infoData