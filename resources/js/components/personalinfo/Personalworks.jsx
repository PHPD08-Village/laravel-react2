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
      <p>累積設計經驗：2-3年</p>
      {/* <!-- 作品標籤 --> */}
      <div class="workTag">
        <a href="">All</a>
        <a href="">UI/UX</a>
        <a href="">網頁設計</a>
        <a href="">IOS/Android</a>
        <a href="">平面設計</a>
      </div>
      {/* 顯示加載中的提示 */}
      {loading && <p>載入中...</p>}

      {/* 顯示錯誤訊息 */}
      {error && <p>錯誤：{error}</p>}
      
      <div class="work">
        {/* <!-- 作品卡片 --> */}
        <div class="workCard">
          {/* <img src="../public/imgs/VALTWArcane06.jpg" alt="" /> */}
          <img src={works[0].work_image} alt="" />
          <div>
            <span>{works[0].work_category}</span>
            <span>{works[0].completion_date}</span>
          </div>
          <p>{works[0].work_title}</p>
        </div>
        <div class="workCard">
          <img src={works[1].work_image} alt="" />
          <div>
            <span>{works[1].work_category}</span>
            <span>{works[1].completion_date}</span>
          </div>
          <p>{works[1].work_title}</p>
        </div>
        <div class="workCard">
          <img src={works[2].work_image} alt="" />
          <div>
            <span>{works[2].work_category}</span>
            <span>{works[2].completion_date}</span>
          </div>
          <p>{works[2].work_title}</p>
        </div>
      </div>
    </>
  )
}

export default Personalworks