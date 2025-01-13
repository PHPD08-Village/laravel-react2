import React, { useState, useEffect } from 'react'

function Personalworks() {
  // 用來儲存從 API 獲取的專案資料
  const [works, setWorks] = useState([]);
  // 用來儲存資料加載狀態
  const [loading, setLoading] = useState(true);
  // 用來處理錯誤
  const [error, setError] = useState(null);
  // 獲取資料
  let url = 'http://127.0.0.1:8000/api/personalworks'
  useEffect(() => {
    const fetchWorks = async () => {
      try {
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error('Oops! 發生錯誤!')
        }
        const data = await response.json()
        if (data && data.data) {
          setWorks(data.data)
          console.log('Fetched works:', data.data)
        } else {
          throw new Error('資料格式不正確')
        }
        setLoading(false)
      } catch (error) {
        setError(error.message)
        console.error('Error fetching works:', error)
        setLoading(false)
      }
    }
    fetchWorks()
  }, [])
  // const currentWorks = works.slice(0, 3) // 此頁面陣列資料範圍
  console.log('測試:', works[0]);

  return (
    <>
      {/* <!-- 作品集 --> */}
      <h2>作品集</h2>
      {/* <p>累積經驗：2-3年</p> */}
      {/* <!-- 作品標籤 --> */}
      {/* <div class="pworkTag">
        <a href="">All</a>
        <a href="">UI/UX</a>
        <a href="">網頁設計</a>
        <a href="">IOS/Android</a>
        <a href="">平面設計</a>
      </div> */}
      {/* 顯示加載中的提示 */}
      {loading && <p>載入中...</p>}

      {/* 顯示錯誤訊息 */}
      {error && <p>錯誤：{error}</p>}
      
      <div class="pwork">
        {/* <!-- 作品卡片 --> */}
        {works.slice(0, 3).map((work, index) => (
            <div class="pworkCard" key={index}>
              <img src={works.length > index ? work.work_image : '載入中...'} alt="" />
              <div>
                <span>{works.length > index ? work.work_category : '載入中...'}</span>
                <span>{works.length > index ? work.completion_date : '載入中...'}</span>
              </div>
              <p>{works.length > index ? work.work_title : '載入中...'}</p>
            </div>
          ))}
      </div>
    </>
  )
}

export default Personalworks