import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Publish2 = () => {
    const [formData, setFormData] = useState({
        title: '',
        contact_name: '',
        completion_time: '',
        budget: '',
        location: '',
        phone: '',
        email: '',
        details: '',
        require_code: '',
    });

    const [publishes, setPublishes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // 獲取 CSRF token
        axios.get('/sanctum/csrf-cookie').then(response => {
            // CSRF token 現已設置
        });

        fetchPublishes();
    }, []);

    const fetchPublishes = async () => {
        try {
            const response = await axios.get('/api/get-publishes');
            setPublishes(Array.isArray(response.data) ? response.data : []);
        } catch (error) {
            console.error('Error fetching publishes:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // 確保 CSRF token 已經被設置
            await axios.get('/sanctum/csrf-cookie');
            const token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

            const response = await axios.post('/api/submit-publish', formData, {
                headers: {
                    'X-CSRF-TOKEN': token
                }
            });
            alert(response.data.message);
            fetchPublishes(); // 提交數據後重新獲取數據
        } catch (error) {
            console.error('Error submitting data:', error);
        }
    };

    return (
        <div className="container">
            <div className="mainContent">
                {/* 表單區塊 */}
                <div className="form-section">
                    <form onSubmit={handleSubmit}>
                        {/* 第一排 */}
                        <div className="form-row">
                            <label htmlFor="title">案件標題*</label>
                            <input type="text" id="title" name="title" placeholder="輸入您的委託標題" value={formData.title} onChange={handleChange} required />
                        </div>
                        {/* 第二排 */}
                        <div className="form-row two-columns">
                            <div>
                                <label htmlFor="contact_name">聯絡人名稱*</label>
                                <input type="text" id="contact_name" name="contact_name" placeholder="輸入聯絡人名稱" value={formData.contact_name} onChange={handleChange} required />
                            </div>
                            <div>
                                <label htmlFor="completion_time">案件完成時間*</label>
                                <input type="date" id="completion_time" name="completion_time" value={formData.completion_time} onChange={handleChange} required />
                            </div>
                        </div>
                        {/* 第三排 */}
                        <div className="form-row two-columns">
                            <div>
                                <label htmlFor="budget">預算金額*</label>
                                <input type="number" id="budget" name="budget" placeholder="預算金額" value={formData.budget} onChange={handleChange} required />
                            </div>
                            <div>
                                <label htmlFor="location">執行地點*</label>
                                <select id="location" name="location" value={formData.location} onChange={handleChange} required>
                                    <option value="" disabled>選擇地點</option>
                                    {/* 其他選項 */}
                                    <option value="可遠端工作">可遠端工作</option>
                                    <option value="台北市">台北市</option>
                                    <option value="新北市">新北市</option>
                                    <option value="桃園市">桃園市</option>
                                    <option value="台中市">台中市</option>
                                    <option value="台南市">台南市</option>
                                    <option value="高雄市">高雄市</option>
                                    <option value="基隆市">基隆市</option>
                                    <option value="新竹市">新竹市</option>
                                    <option value="嘉義市">嘉義市</option>
                                    <option value="新竹縣">新竹縣</option>
                                    <option value="苗栗縣">苗栗縣</option>
                                    <option value="彰化縣">彰化縣</option>
                                    <option value="南投縣">南投縣</option>
                                    <option value="雲林縣">雲林縣</option>
                                    <option value="嘉義縣">嘉義縣</option>
                                    <option value="屏東縣">屏東縣</option>
                                    <option value="宜蘭縣">宜蘭縣</option>
                                    <option value="花蓮縣">花蓮縣</option>
                                    <option value="台東縣">台東縣</option>
                                    <option value="澎湖縣">澎湖縣</option>
                                    <option value="金門縣">金門縣</option>
                                    <option value="連江縣">連江縣</option>
                                </select>
                            </div>
                        </div>
                        {/* 第四排 */}
                        <div className="form-row">
                            <label htmlFor="phone">聯絡人電話*</label>
                            <input type="tel" id="phone" name="phone" placeholder="輸入聯絡人電話" value={formData.phone} onChange={handleChange} required />
                            <div>
                                <label htmlFor="require_code">需求語言*</label>
                                <select id="require_code" name="require_code" value={formData.require_code} onChange={handleChange} required>
                                    <option value="" disabled>選擇需求語言</option>
                                    <option value="HTML">HTML</option>
                                    <option value="CSS">CSS</option>
                                    <option value="JavaScript">JavaScript</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-row">
                            <label htmlFor="email">聯絡人Email*</label>
                            <input type="email" id="email" name="email" placeholder="輸入聯絡人Email" value={formData.email} onChange={handleChange} required />
                        </div>
                        {/* 第五排 */}
                        <div>
                            <label htmlFor="details">需求詳情* <span style={{ fontSize: '0.8rem', color: 'gray', marginLeft: '8px' }}>填寫越完整，接案者更了解您的需求</span> </label>
                            <textarea id="details" name="details" rows="10" placeholder="專案期限：&#10;用於哪個行業：&#10;其他細節說明：" value={formData.details} onChange={handleChange} required></textarea>
                        </div>
                        {/* 提交按鈕 */}
                        <div className="form-row submit-row">
                            <button type="submit" className="submit-btn">送出委託</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="space"></div>
        </div>
    );
};

export default Publish2;
