import React, { useEffect, useState } from 'react';
import axios from "axios";


const CaseState = () => {
    const [cases, setCases] = useState([]);
    const [comcases, setComcases] = useState([]);

    // 呼叫後端 API 並取得案件資料
    useEffect(() => {
      const fetchCases = async () => {
        try {
          const response = await axios.get("http://127.0.0.1:8000/api/publish/status/cancelled"); 
          setCases(response.data); // 假設 API 回傳的資料是案件列表
          console.log(response.data); // 印出來看看
        } catch (error) {
          console.error("Error fetching cases:", error);
        }
      };
      const fetchComcases = async () => {
        try {
          const comresponse = await axios.get("http://127.0.0.1:8000/api/publish/status/completed"); 
          setComcases(comresponse.data); // 假設 API 回傳的資料是案件列表
          console.log(comresponse.data); // 印出來看看
        } catch (error) {
          console.error("Error fetching cases:", error);
        }
      };
  
      fetchCases();
      fetchComcases();
    }, []); // 空陣列確保只在組件首次載入時執行

    useEffect(() => {
        const fetchComcases = async () => {
          try {
            const comresponse = await axios.get("http://127.0.0.1:8000/api/publish/status/completed"); 
            setComcases(comresponse.data); // 假設 API 回傳的資料是案件列表
            console.log(comresponse.data); // 印出來看看
          } catch (error) {
            console.error("Error fetching cases:", error);
          }
        };
        fetchComcases();
      }, []); // 空陣列確保只在組件首次載入時執行
    
    // 刪除案件的方法
    const handleDelete = async (pid) => {
        try {
          await axios.delete(`http://127.0.0.1:8000/api/publish/${pid}`); // 使用正確的刪除 API
          setCases(cases.filter((caseItem) => caseItem.pid !== pid)); // 更新案件列表
          setComcases(comcases.filter((comcaseItem) => comcaseItem.pid !== pid)); // 更新案件列表
        } catch (error) {
          console.error("Error deleting case:", error);
        }
  };
  // 不顯示小數點
  const formatBudget = (budget) => parseInt(budget, 10);
    return (
        <div className="info-box">
        <h3>已完成/已關閉</h3>
        <hr/>
        <table className="saved-jobs-table">
            <thead>
              <tr>
                <th>案件標題</th>
                <th>預算金額</th>
                <th>關閉原因</th>
                {/* <th>編輯</th> */}
                <th>刪除</th>
              </tr>
            </thead>
            <tbody> {/*className="caseItem"*/}
              {/* <tr>
                <td>手機登入頁面設計</td>
                <td>$15000</td>
                <td className="status">已取消</td>
                <td className="edit">編輯</td>
                <td className="delete">刪除</td>
              </tr>
              <tr>
                <td>商品資料庫設計</td>
                <td>$45000</td>
                <td className="status">已完成</td>
                <td className="edit">編輯</td>
                <td className="delete">刪除</td>
              </tr> */}
              {cases.length === 0 ? (
                <tr>
                  <td colSpan="4">目前沒有取消任何案件</td>
                </tr>
                ) : (
                cases.map((caseItem) => (
                <tr key={caseItem.pid}>
                    <td>{caseItem.title}</td>
                    <td>${formatBudget(caseItem.budget)}</td>
                    <td>已取消</td>
                    {/* <td className="edit">
                      <button className="edit-btn">編輯</button>
                    </td> */}
                    <td className="delete">
                      <button className="delete-btn" onClick={() => handleDelete(caseItem.pid)} >刪除</button>
                    </td>
                </tr>
                ))
            )}
              {comcases.length === 0 ? (
                <tr>
                  <td colSpan="4">目前沒有完成任何案件</td>
                </tr>
                ) : (
                comcases.map((comcaseItem) => (
                <tr key={comcaseItem.pid}>
                    <td>{comcaseItem.title}</td>
                    <td>${formatBudget(comcaseItem.budget)}</td>
                    <td>已完成</td>
                    {/* <td className="edit">
                      <button className="edit-btn">編輯</button>
                    </td> */}
                    <td className="delete">
                      <button className="delete-btn" onClick={() => handleDelete(comcaseItem.pid)} >刪除</button>
                    </td>
                </tr>
                ))
            )}
              </tbody>
            </table>
        </div>
    )
}

export default CaseState