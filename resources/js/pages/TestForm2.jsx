import React, { useState } from 'react';
import axios from 'axios';

const TestForm = () => {
    const [formData, setFormData] = useState({
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

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData); // 打印表單數據
    
        try {
            const response = await axios.post('/userinfo', formData);
            console.log(response.data);
            alert('資料提交成功');
        } catch (error) {
            console.error('提交時發生錯誤', error);
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
