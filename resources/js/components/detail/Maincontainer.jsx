import React from 'react'

const Maincontainer = () => {
    return (
        <div className='detail'>
            <div className='detailtab'>
                <h3>首頁&ensp; &gt; &ensp;我要接案&ensp; &gt; &ensp;獨立品牌網頁製作</h3>
            </div>
            <div className='casedetail'>
                <div className='descrip'>
                    <div className='casedescrip'>
                        <div className='title'>
                            <h1>獨立品牌網頁製作</h1>
                            <p>2024.10.10更新</p>
                        </div>
                        <hr />
                        <div className='regulation'>
                            <p>預算金額：$1000 ~ $50,000</p>
                            <p>執行地點：可遠端</p>
                            <p>預計完成日：無指定時間</p>
                        </div>
                        <hr />
                        <div className='description'>
                            <h4>案件說明：</h4>
                            <p>1.完成期限：before 12/13 </p>
                            <p>2.功能需求：開發兩到三個按鈕進行計算 </p>
                            <p>3.需具備技術：Javascript </p>
                            <p>4.細節說明：詳談</p>
                        </div>
                    </div>
                    <div className="information">
                        <h3>案主資訊</h3>
                        <hr />
                        <div>
                            <img src="" alt="" />
                            <p>陳先生</p>
                        </div>
                        <p>XXXXXXX@gmail.com</p>
                        <p>回覆率：90%</p>
                        <p>最後上線時間：2小時前</p>
                        <div className="detailbtn">
                            <div><a href="#">接案</a></div>
                            <div><a href="#">聊聊</a></div>
                        </div>
                    </div>
                </div>
                <div className='remind'>
                    <h4>※提醒：</h4>
                    <h4>1.雙方避免私下交易，預防詐騙與合作糾紛，否則產生任何問題，出任務將無法保障您的權益。</h4>
                    <h4>2.為保障交易安全，建議使用「合約管理」進行交易。</h4>
                </div>
            </div>
        </div>
    )
}

export default Maincontainer