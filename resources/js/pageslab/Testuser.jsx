import React, { useState } from 'react';
import axios from 'axios';

const UserInfoForm = () => {
    const [formData, setFormData] = useState({
        profile_picture: '',
        username: '',
        nickname: '',
        company_name: '',
        job_title: '',
        location: '',
        contact_phone: '',
        email: '',
        line_id: '',
        preferred_location: '',
        job_category: '',
        accumulated_experience: '',
        job_experience: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/api/userinfo', formData)
            .then(response => {
                console.log(response.data);
                // 提交成功後的處理邏輯
            })
            .catch(error => {
                console.error(error);
                // 提交失敗後的處理邏輯
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" placeholder="Username" onChange={handleChange} />
            {/* 其他表單欄位 */}
            <button type="submit">Submit</button>
        </form>
    );
};

export default UserInfoForm;
