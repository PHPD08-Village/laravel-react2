import React, { useState } from 'react';
import axios from 'axios';

const Portfolio = () => {
  const [rows, setRows] = useState([]);
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleAddRow = () => {
    const newRow = {
      id: Date.now(),
      imageUrl: null,
      workTitle: "",
      url: "",
      description: "",
      completionDate: "",
    };
    setRows([...rows, newRow]);
  };

  const handleDeleteRow = (id) => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const handleImageUpload = (id, file) => {
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      const updatedRows = rows.map((row) => {
        if (row.id === id) {
          return { ...row, imageFile: file, imageUrl: objectUrl };
        }
        return row;
      });
      setRows(updatedRows);
  
      // 清理內存
      return () => URL.revokeObjectURL(objectUrl);
    }
  };
  const handleFileChange = (id, e) => {
    const file = e.target.files[0];
    if (file) {
      handleImageUpload(id, file);
    }
  };

  const handleUrlChange = (id, value) => {
    const updatedRows = rows.map((row) => {
      if (row.id === id) {
        return { ...row, url: value };
      }
      return row;
    });
    setRows(updatedRows);
  };

  const handleDescriptionChange = (id, value) => {
    const updatedRows = rows.map((row) => {
      if (row.id === id) {
        return { ...row, description: value };
      }
      return row;
    });
    setRows(updatedRows);
  };
  const handleWorkTitleChange = (id, value) => {
    const updatedRows = rows.map((row) => {
      if (row.id === id) {
        return { ...row, workTitle: value };
      }
      return row;
    });
    setRows(updatedRows);
  };

  const handleCompletionDateChange = (id, value) => {
    const updatedRows = rows.map((row) => {
      if (row.id === id) {
        return { ...row, completionDate: value };
      }
      return row;
    });
    setRows(updatedRows);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    // 確認所有欄位都已填寫
    const hasEmptyFields = rows.some(
      (row) =>
        !row.imageFile ||
        !row.workTitle ||
        !row.url ||
        !row.description ||
        !row.completionDate
    );

    if (hasEmptyFields) {
      alert("請完整填寫所有欄位！");
      return;
    }

    const formData = new FormData();
    rows.forEach((row) => {
      formData.append("work_images[]", row.imageFile); // 圖片文件
      formData.append("work_titles[]", row.workTitle); // 標題
      formData.append("urls[]", row.url); // 網址
      formData.append("descriptions[]", row.description); // 描述
      formData.append("completion_dates[]", row.completionDate); // 完成日期
    });

    try {
      const response = await axios.post("/storeworks", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("儲存成功！");
      console.log(response.data);
    } catch (error) {
      console.error("儲存失敗", error);
      alert("儲存失敗，請稍後再試！");
    }
  };

  return (
    <>
      {/* <div id="portfolio-content" className="info-box">
                <h3>作品專區</h3>
                <hr />
                <table className="portfolio-table">
                    <thead>
                        <tr>
                            <th>作品圖片</th> */}
      {/* <th colSpan="2">作品資訊</th><!-- 合併網址與描述 --> */}
      {/* <th>操作</th>
                        </tr>
                    </thead>
                    <tbody id="portfolio-rows"> */}
      {/* <!-- 動態生成作品列 --> */}
      {/* </tbody>
                </table>
                <div className="portfolio-actions">
                    <button className="add-btn" id="add-portfolio-row">新增作品</button> */}
      {/* <div className="pagination">
                        <button className="page-btn">1</button>
                        <button className="page-btn">2</button>
                        <button className="page-btn">3</button>
                    </div> */}
      {/* </div>
            </div> */}

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
              {rows.map((row) => (
                <tr key={row.id}>
                  <td>
                    <label>
                    <input
                        type="file"
                        className="icon-upload"
                        accept="image/*"
                        hidden
                        onChange={(e) => handleFileChange(row.id, e)}
                      />
                      <img
                        src={row.imageFile ? row.imageUrl : "./img/placeholder.png"}
                        className="icon-preview"
                        alt="點擊上傳圖片"
                        onClick={(e) => e.currentTarget.previousSibling.click()}
                      />
                    </label>
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder="輸入作品標題"
                      value={row.workTitle}
                      onChange={(e) => handleWorkTitleChange(row.id, e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="date"
                      value={row.completionDate}
                      onChange={(e) => handleCompletionDateChange(row.id, e.target.value)}
                    />
                  </td>
                  <td className="portfolio-url-cell">
                    <input
                      type="text"
                      className="portfolio-url"
                      placeholder="輸入作品網址"
                      value={row.url}
                      onChange={(e) => handleUrlChange(row.id, e.target.value)}
                    />
                  </td>
                  <td className="portfolio-description-cell">
                    <textarea
                      className="portfolio-description"
                      placeholder="輸入作品描述"
                      value={row.description}
                      onChange={(e) => handleDescriptionChange(row.id, e.target.value)}
                    ></textarea>
                  </td>
                  <td className="portfolio-actions-cell">
                    <button type="submit" className="save-btn">
                      儲存
                    </button>
                    <button
                      type="button"
                      className="delete-btn"
                      onClick={() => handleDeleteRow(row.id)}
                    >
                      刪除
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="portfolio-actions">
            <button type="button" className="add-btn" onClick={handleAddRow}>
              新增作品
            </button>
            {/* <button type="submit" className="save-btn">
            儲存
          </button> */}
          </div>
        </form>
      </div>
    </>
  )
}

export default Portfolio