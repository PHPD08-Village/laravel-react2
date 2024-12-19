import React, { useState } from 'react';
import axios from 'axios';  // 用於進行 HTTP 請求
import '../../css/extract.css'

const TestForm = () => { // 函數式組件
    const [inputData, setInputData] = useState(''); // 儲存使用者當前輸入的資料
    const [submittedData, setSubmittedData] = useState(''); // 儲存提交後從伺服器返回的資料

    // 使用 React 的狀態更新函數，在每次輸入改變時觸發，更新 inputData 狀態
    const handleChange = (e) => { 
        // e：指事件對象，包含了很多關於這次事件的信息，例如觸發事件的元素、事件類型等
        // e.target：事件的目標元素，即觸發事件的元素。在這個例子中，e.target 是輸入框元素（input element）
        // e.target.value：這是目標元素的值，即輸入框中當前的值
        setInputData(e.target.value); // 取得輸入框的值
    };

    // 異步函數，在表單提交時觸發
    const handleSubmit = async (e) => {
        e.preventDefault(); // 防止默認的表單提交行為（刷新頁面）
        try {
            // 使用 axios.post 將 inputData 提交到後端 /api/submit-data 路由
            // 用了 axios 來發送一個 POST 請求到 /api/submit-data 路徑，並且將 inputData 作為請求的數據發送
            const response = await axios.post('/api/submit-data', { data: inputData });
            setInputData(e.target.value);
            // 更新狀態顯示提交的資料
            setSubmittedData(response.data.data);
            // 清空輸入框
            setInputData('');
        } catch (error) { 
            // 如果發生錯誤，將錯誤信息輸出到控制台
            console.error('Error submitting data:', error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputData}
                    onChange={handleChange}
                    placeholder="輸入資料"
                />
                <button type="submit">提交</button>
            </form>
            {submittedData && <p>剛才輸入的資料：{submittedData}</p>}
        </div>
    );
};

export default TestForm;
