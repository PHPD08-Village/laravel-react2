import React from 'react'

const CaseInformation = () => {
    return (
        <>
            <div className="top-row">
                <div className="info-box">
                    <h3>訊息通知</h3>
                    <hr />
                    <ul>
                        <li><a href="#">獨立設計網站專案</a></li>
                        <li><a href="#">建立網頁開發項目</a></li>
                        <li><a href="#">圖形設計專案</a></li>
                    </ul>
                    <a href="#" className="more-link">...更多</a>
                </div>
                <div className="info-box">
                    <h3>系統通知 <span className="notification-icon">🔔</span></h3>
                    <hr />
                    <ul>
                        <li><a href="#">尚無通知</a></li>
                    </ul>
                </div>
            </div>
            <div className="bottom-row">
                <div className="info-box">
                    <h3>瀏覽紀錄 <span className="view-icon">👁️</span></h3>
                    <hr />
                    <ul>
                        <li><a href="#">專案一</a></li>
                        <li><a href="#">專案二</a></li>
                        <li><a href="#">專案三</a></li>
                    </ul>
                    <a href="#" className="more-link">...更多</a>
                </div>
                <div className="feedback-box">
                    <h3>問題回報</h3>
                    <hr />
                    <p>您對目前使用的服務滿意嗎？歡迎您提出建議或意見。</p>
                    <textarea placeholder="請在此輸入文字"></textarea>
                    <button type="submit" className="submit-btn">送出</button>
                </div>
            </div>
        </>
    )
}

export default CaseInformation