import React,  { useState, useEffect }  from 'react'

const CaseInformation = () => {
    const [feedback, setFeedback] = useState(""); // 儲存用戶輸入
    const [isSubmitted, setIsSubmitted] = useState(false); // 控制提交狀態
    const handleSubmit = (e) => {
          e.preventDefault(); // 防止表單自動刷新
          if (!feedback.trim()) {
            alert("請輸入文字！");
            return;
          }
      
          // Google Form 的 formResponse URL
          const googleFormUrl =
            "https://docs.google.com/forms/u/0/d/18fsEIEc7_gjzpoMmDU3i5ADZ5SvDMHTMAU6-hlHJZ1g/previewResponse"; // Google Form URL
      
          // Google Form 的欄位對應
          const formData = new FormData();
          formData.append("entry.603269443", feedback); // 替換成對應的欄位 ID
      
          // 使用 fetch 提交表單
          fetch(googleFormUrl, {
            method: "POST",
            mode: "no-cors", // 避免 CORS 問題
            body: formData,
          })
            .then(() => {
              setFeedback(""); // 清空文字框
              setIsSubmitted(true);
              alert("已送出!");
            })
            .catch((error) => {
              console.error("表單提交失敗:", error);
              alert("送出失敗，請稍後再試。");
            });
        };     



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
                    <textarea 
                        placeholder="請在此輸入文字" value={feedback}
                        onChange={(e) => setFeedback(e.target.value)} ></textarea>
                    <button type="submit" className="submit-btn" onClick={handleSubmit}>送出</button>
                    {isSubmitted && <p style={{ color: "green" }}>感謝您的提交！</p>}
                </div>
            </div>
        </>
    )
}

export default CaseInformation