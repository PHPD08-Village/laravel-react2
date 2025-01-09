import React, { useState, useEffect } from 'react'

function UserProject() {
  // 設定每頁顯示的專案數量
  const itemsPerPage = 4;
  // 設定當前頁碼
  const [currentPage, setCurrentPage] = useState(1);
  // 用來儲存從 API 獲取的專案資料
  const [projects, setProjects] = useState([]);
  // 用來儲存資料加載狀態
  const [loading, setLoading] = useState(true);
  // 用來處理錯誤
  const [error, setError] = useState(null);
  // 獲取資料
  let url = 'http://127.0.0.1:8000/api/projects'
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(url)
        if (!response.ok) {
          // throw new Error('Oops! 發生錯誤!')
          console.log(new Error('Oops! 發生錯誤!'))
        }
        const data = await response.json()
        if (data && data.data) {
          setProjects(data.data)
          console.log('Fetched projects:', data.data)
        } else {
          // throw new Error('資料格式不正確')
          console.log(new Error('資料格式不正確'))
        }
        setLoading(false)
      } catch (error) {
        setError(error.message)
        console.error('Error fetching projects:', error)
        setLoading(false)
      }
    }
    fetchProjects()
  }, [])

  // 頁面顯示資料
  const startIndex = (currentPage - 1) * itemsPerPage  // 此頁面第一筆資料索引值
  const endIndex = startIndex + itemsPerPage  // 此面最後索引值加一
  const currentProjects = projects.slice(startIndex, endIndex) // 此頁面陣列資料範圍
  console.log('測試:',projects[0]);
  // 總頁數
  const totalPages = Math.ceil(projects.length / itemsPerPage)

  // 切換頁面函數
  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber)
  return (
    <>
      {/* <!-- 已完成專案 --> */}
      <h2>已完成專案</h2>

      {/* 顯示加載中的提示 */}
      {loading && <p>載入中...</p>}

      {/* 顯示錯誤訊息 */}
      {error && <p>錯誤：{error}</p>}

      {/* 顯示當前頁面的專案 */}
      <div className="pproject">
      {currentProjects.length > 0 ? (
          currentProjects.map((project, index) => (
            <div key={index}>
              <span>{project.completed_at}</span>
              <span>{project.name}</span>
              <span>案主：{project.userinfo?.username|| '匿名案主'}</span>
              {/* <div className="tag">
                  {project.tags.map((tag, idx) => (
                  <span key={idx}>{tag}</span>
              ))}
              </div> */}
            </div>
          ))
        ) : (
          <div id="pno-data">目前沒有專案資料</div>
        )}

        {/* 換頁按鈕 */}
        {currentProjects.length > 0 && (
        <div className="pchangeBtn">
          <button className='pbtn'
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            &lt;
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button 
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`pbtn ${currentPage === index + 1 ? "pactive" : ""}`} 
            >
              {index + 1}
            </button>
          ))}
          <button className='pbtn'
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            &gt;
          </button>
        </div>
        )}
      </div >
    </>
  )
}

export default UserProject