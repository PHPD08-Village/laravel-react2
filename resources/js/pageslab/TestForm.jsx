// 網址 http://127.0.0.1:8000/form

import React, { useState, useEffect } from 'react';
import axios from 'axios';  // 用於進行 HTTP 請求
import '../../css/testform.css'

// 函數式組件
const TestForm = () => {
    const [formData, setFormData] = useState({ // 定義狀態變數 formData ，表單的所有輸入值都會存儲在這個狀態變數中
        headshot: '',
        username: '',
        nickname: '',
        company_name: '',
        job_title: '',
        location: '',
        phone: '',
        phone_verified: false,
        email: '',
        email_verified: false,
        line_id: '',
        job_status: false,
        preferred_location: '',
        job_category: '',
        accumulated_experience: '',
        job_experience: ''
    });

    // 根據表單輸入的類型（例如文本輸入框或復選框），動態地更新相應的狀態屬性值，從而保持 formData 狀態始終與表單輸入同步。這樣可以確保表單的即時反應和更新。
    const handleChange = (e) => {
        // 使用解構賦值從事件對象的目標元素中提取 name、value、type 和 checked 屬性
        const { name, value, type, checked } = e.target;
        // 更新 formData 狀態的函數
        setFormData({
            ...formData,
            // [name] 是一個「計算屬性名」，它會根據表單元素的 name 屬性的值來設置對應的狀態變數，動態地設置屬性名稱
            [name]: type === 'checkbox' ? checked : value // 如果元素類型是 checkbox，就設置屬性值為 checked，否則設置為 value
            // 根據當前表單元素的 name 動態設置對應的屬性，其值為當前的輸入值
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // 阻止默認行為發生

        // 在這裡處理自定義的表單提交邏輯，例如發送數據到伺服器
        // console.log(formData); // 印出資料內容
        // console.log(JSON.stringify(formData, null, 2)); // JSON.stringify 將數據轉換為 JSON 字符串 replacer:可指定也可不指定。space:可指定也可不指定，用於控制縮進的空格數。

        // try {  // 成功儲存數據方法1
        //     await axios.get('/sanctum/csrf-cookie'); // 確保 CSRF token 已經被設置
        //     const response = await axios.post('/api/userinfo', formData);

        //     console.log(response.data); // 可以檢查伺服器返回的數據
        //     alert('資料提交成功');
        // } catch (error) {
        //     console.error('提交時發生錯誤', error); // 在控制台顯示錯誤信息
        //     alert('提交時發生錯誤，請重試');
        // }

        try {  // 成功儲存數據方法2
            await axios.get('/sanctum/csrf-cookie'); // 確保 CSRF token 已經被設置
            const token = document.querySelector('meta[name="csrf-token"]').getAttribute('content'); // 從 HTML 頁面的 meta 標籤中提取 CSRF (Cross-Site Request Forgery) token 的值。<meta name="csrf-token" content="YOUR_CSRF_TOKEN_HERE">

            const response = await axios.post('/api/userinfo', formData, {
                headers: {
                    'X-CSRF-TOKEN': token, // 將 CSRF token 作為請求頭發送到伺服器
                }
            });

            console.log(response.data); // 可以檢查伺服器返回的數據
            alert('資料提交成功');
        } catch (error) {
            console.error('提交時發生錯誤', error); // 在控制台顯示錯誤信息
            alert('提交時發生錯誤，請重試');
        }
    };

    return (
        <form id="tset" onSubmit={handleSubmit}>
            <label htmlFor="headshot">
                大頭照:
                <input id="headshot" type="file" name="headshot" value={formData.headshot} onChange={handleChange} />
            </label>
            <label htmlFor="username">
                使用者名稱:
                <input id="username" type="text" name="username" value={formData.username} onChange={handleChange} />
            </label>
            <label htmlFor="nickname">
                暱稱:
                <input id="nickname" type="text" name="nickname" value={formData.nickname} onChange={handleChange} />
            </label>
            <label htmlFor="company_name">
                企業名稱:
                <input id="company_name" type="text" name="company_name" value={formData.company_name} onChange={handleChange} />
            </label>
            <label htmlFor="job_title">
                接案身分:
                <input id="job_title" type="text" name="job_title" value={formData.job_title} onChange={handleChange} />
            </label>
            <label htmlFor="location">
                居住地:
                <input id="location" type="text" name="location" value={formData.location} onChange={handleChange} />
            </label>
            <label htmlFor="phone">
                電話號碼:
                <input id="phone" type="text" name="phone" value={formData.phone} onChange={handleChange} />
            </label>
            <label htmlFor="phone_verified">
                電話已驗證:
                <input id="phone_verified" type="text" name="phone_verified" value={false} disabled />
            </label>
            <label htmlFor="email">
                電子郵件:
                <input id="email" type="email" name="email" value={formData.email} onChange={handleChange} required />
            </label>
            <label htmlFor="email_verified">
                電子郵件已驗證:
                <input id="email_verified" type="text" name="email_verified" value={false} disabled />
            </label>
            <label htmlFor="line_id">
                LINE ID:
                <input id="line_id" type="text" name="line_id" value={formData.line_id} onChange={handleChange} />
            </label>
            <label htmlFor="job_status">
                接案狀態:
                <input id="job_status" type="text" name="job_status" value={false} disabled />
            </label>
            <label htmlFor="preferred_location">
                理想的接案地區:
                <input id="preferred_location" type="text" name="preferred_location" value={formData.preferred_location} onChange={handleChange} />
            </label>
            <label htmlFor="job_category">
                接案類別:
                <input id="job_category" type="text" name="job_category" value={formData.job_category} onChange={handleChange} />
            </label>
            <label htmlFor="accumulated_experience">
                累積經驗:
                <textarea id="accumulated_experience" name="accumulated_experience" value={formData.accumulated_experience} onChange={handleChange}></textarea>
            </label>
            <label htmlFor="job_experience">
                接案經驗:
                <textarea id="job_experience" name="job_experience" value={formData.job_experience} onChange={handleChange}></textarea>
            </label>
            <button type="submit">提交</button>
        </form>
    );
};

export default TestForm;

