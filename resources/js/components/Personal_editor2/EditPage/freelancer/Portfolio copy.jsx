// 相關檔案
// 控制器 PersonalworkstestController.php
// 模型 Personalworkstest.php
// 路由 web.php 的 Route::post('/api/storeworks', [PersonalworkstestController::class, 'web_store']);

import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../../../auth/AuthContext"; // 讀取登入使用者的數據

const Portfolio = () => {
  const { user } = useAuth(); // 使用 useAuth 來取得 user 狀態

  // console.log(user.id); // 查看使用者的 id

  // 設置狀態函數 
  // formData 是用於存儲表單數據的狀態物件，其中每個鍵名（key）對應表單的欄位名（name）。
  // setFormData：用於更新 formData 狀態的函數，根據使用者在 <input> 中的操作（如輸入或選擇）進行動態修改。
  // 冒號左側：為鍵名（key），需與 <input> 的 name 屬性匹配，用於正確更新對應的狀態欄位。
  // 冒號右側：用於初始化對應欄位的值，這些值將隨 <input> 的用戶輸入的 value 動態更新。
  // 以下是需要存儲數據的欄位，冒號左側為鍵名（需與 <input> 的 name 屬性一致），冒號右側為狀態值（初始值）。
  const [formData, setFormData] = useState({
    uid: user.id,         // 用於標識當前用戶的唯一 ID
    work_image: "",       // 預設為空，未上傳任何圖片
    work_title: "",       // 預設為空，表示尚未輸入作品標題
    completion_date: "",  // 預設為空，表示尚未輸入完成日期
    url: "",              // 預設為空，表示尚未輸入作品連結
    work_category: "",    // 預設為空，表示尚未輸入作品類別
  });

  // 處理表單輸入變更的事件處理函數
  // handleChange 是用來處理 <input> 的 onChange 事件，每當用戶輸入內容時，React 會將該輸入數據及其對應的 name 傳遞到 handleChange 函數。
  // 函數透過 name 動態更新對應的 formData 鍵值，從而實現雙向數據綁定。
  const handleChange = (e) => {
    const { name, value } = e.target; // 從事件對象中解構獲取 name 和 value
    setFormData((formData) => ({
      ...formData, // 保留其他欄位數據
      [name]: value, // 動態更新對應 name 的欄位數據
      // e.target.name：對應表單中 <input> 的 name 屬性，用於識別欄位
      // e.target.value：用戶在該欄位中輸入的數據
    }));
  };

  // 處理圖片上傳變更
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setFormData((prev) => ({
          ...prev,
          work_image: reader.result, // 使用 Base64 儲存圖片
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  // 提交表單
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/storeworks", formData);
      alert("儲存成功！");
      console.log(response.data);
    } catch (error) {
      console.error("儲存失敗", error);
      alert("儲存失敗，請稍後再試！");
    }
  };

  return (
    <div id="portfolio-content" className="info-box">
      <h3>作品專區</h3>
      <hr />
      <form onSubmit={handleSubmit}>
        <table className="portfolio-table">
          <thead>
            <tr>
              <th>作品圖片</th>
              <th>作品標題</th>
              <th>完成日期</th>
              <th colSpan="2">作品資訊</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <label>
                  <input
                    type="file"
                    className="icon-upload"
                    accept="image/*"
                    hidden
                    onChange={handleImageChange}
                  />
                  <img
                    src={formData.work_image || "default-placeholder.jpg"} // 顯示預覽圖片
                    className="icon-preview"
                    alt="點擊上傳圖片"
                  />
                </label>
              </td>
              <td>
                <input
                  type="text"
                  name="work_title"
                  placeholder="輸入作品標題"
                  value={formData.work_title}
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  type="date"
                  name="completion_date"
                  value={formData.completion_date}
                  onChange={handleChange}
                />
              </td>
              <td className="portfolio-url-cell">
                <input
                  type="text"
                  name="url"
                  className="portfolio-url"
                  placeholder="輸入作品網址"
                  value={formData.url}
                  onChange={handleChange}
                />
              </td>
              <td className="portfolio-description-cell">
                <textarea
                  name="work_category"
                  className="portfolio-description"
                  placeholder="輸入作品描述"
                  value={formData.work_category}
                  onChange={handleChange}
                ></textarea>
              </td>
              <td className="portfolio-actions-cell">
                <button type="submit" className="save-btn">
                  儲存
                </button>
                <button type="button" className="delete-btn">
                  刪除
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="portfolio-actions">
          <button type="button" className="add-btn">
            新增作品
          </button>
        </div>
      </form>
    </div>
  );
};

export default Portfolio;
