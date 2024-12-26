import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
//   let url = "http://127.0.0.1:8000/api/projects";
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // 使用 axios 獲取資料
        const response = await axios.get('/api/projects');
       // 確保 response.data 是一個陣列
        setProjects(Array.isArray(response.data) ? response.data : []);
        console.log(response.data); // 檢查回應的資料結構
        // setLoading(false);
        if (!response.ok) {
          throw new Error('Oops! 發生錯誤!');
        }
        // const data = await response.json();
        // setProjects(data.data); // 確認這裡是否正確解析 JSON
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  // 頁面顯示資料
  const startIndex = (currentPage - 1) * itemsPerPage; // 此頁面第一筆資料索引值
  const endIndex = startIndex + itemsPerPage; // 此面最後索引值加一
  const currentProjects = projects.slice(startIndex, endIndex); // 此頁面陣列資料範圍

  // 總頁數
  const totalPages = Math.ceil(projects.length / itemsPerPage);

  // 切換頁面函數
  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
      {/* <!-- 已完成專案 --> */}
      <h2>已完成專案</h2>

      {/* 顯示加載中的提示 */}
      {loading && <p>載入中...</p>}

      {/* 顯示錯誤訊息 */}
      {error && <p>錯誤：{error}</p>}

      {/* 顯示當前頁面的專案 */}
      <div className="project">
        {currentProjects.map((project, index) => (
          <div key={index}>
            <span>{project.completed_at}</span>
            <span>{project.name}</span>
            <span>案主：{project.uid}</span>
            <div className="tag">
              {project.tags.map((tag, idx) => (
                <span key={idx}>{tag}</span>
              ))}
            </div>
          </div>
        ))}

        {/* 換頁按鈕 */}
        <div className="changeBtn">
          <button className="pbtn"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            &lt;
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button 
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={currentPage === index + 1 ?  "active" : ""}
            >
              {index + 1}
            </button>
          ))}
          <button className="pbtn"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            &gt;
          </button>
        </div>
      </div >
    </>
  )
}

export default UserProject