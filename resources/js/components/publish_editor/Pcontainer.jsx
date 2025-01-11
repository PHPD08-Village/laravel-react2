import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { initializeScrollTopButton, initializeFormSubmission } from '../../JS or jQuery/floatingbuttons';
import Floatingbuttons from '../allpage/Floatingbuttons'
import { useLocation, useNavigate } from 'react-router-dom';

const Pcontainer = () => {
    // const [formData, setFormData] = useState({
    //     pid:'',
    //     uid: '1',
    //     title: '',
    //     contact_name: '',
    //     completion_time: '',
    //     budget: '',
    //     location: '',
    //     phone: '',
    //     email: '',
    //     details: '',
    //     require_code: '',
    // });

    // const [publishes, setPublishes] = useState([]);
    // const [loading, setLoading] = useState(true);

    const location = useLocation();
    const { caseId } = location.state || {};
    // console.log(caseId)
    const [publishData, setPublishData] = useState(null);
    const navigate = useNavigate();
    // 新增狀態來控制彈出視窗 
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);
    // const [uid, setUid] = useState(userId);

    // 案件資料提取
    const fetchPublishData = async () => {
        try {
            // console.log('開始發送請求')
            const response = await axios.get('/get-publishes', { params: { caseId } });
            // console.log('成功發送請求')
            setPublishData(response.data);
            // console.log(response.data)
        } catch (error) {
            console.error('發案資料請求失敗', error);
            alert('發案資料請求失敗，請稍後再試');
        }
    };

    useEffect(() => {
        initializeScrollTopButton();
        initializeFormSubmission();

        // 獲取 CSRF token
        axios.get('/sanctum/csrf-cookie').then(response => {
            // CSRF token 現已設置
        });

        if (caseId) {
            fetchPublishData();
        }

        return () => {
            const scrollTopBtn = document.getElementById("scroll-top-btn");
            const form = document.querySelector("form");
            const closeAlert = document.getElementById("closeAlert");
            if (scrollTopBtn) {
                scrollTopBtn.removeEventListener("click", () => { });
            }
            if (form) {
                form.removeEventListener("submit", () => { });
            }
            if (closeAlert) {
                closeAlert.removeEventListener("click", () => { });
            }
        };
    }, [caseId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPublishData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    // 更新提交
    const handleUpdate = async (e) => {
        e.preventDefault();

        try {
            // console.log('發送更新請求')
            const response = await axios.post('http://127.0.0.1:8000/api/update-publish', publishData);

            // 當收到更新成功的回應時出現彈跳視窗
            if (response.data.message === '案件已成功更新') {
                setShowSuccessAlert(true);
            }
        } catch (error) {
            alert('案件更新失敗，請稍後再試。')
            console.error('提交更新時出錯', error);
        }
    };

    // 設定提交後的彈出視窗的確認鍵
    const handleCloseAlert = () => {
        setShowSuccessAlert(false);
        navigate('/case_manager');
    };

    // 格式化日期字串，確保日期格式為 YYYY-MM-DD
    const formatDate = (dateString) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        const year = date.getFullYear();
        // getMonth()、getDate() 得到的會是 0-11，所以要 +1
        // padStart() 是會將字串填充到目標長度，如果原始長度不夠，會在字串左邊加上 0
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    return (
        <>
            {/* Breadcrumb 路徑 */}
            <div className="breadcrumb">
                <img src="/img/Icon/Start.png" alt="" />
                <a href="#">首頁</a><img src="/img/Icon/Forward.png" alt="" />
                <a href="#">我是業主</a><img src="/img/Icon/Forward.png" alt="" />
                <span>編輯案件</span>
            </div>

            {/* container */}
            {publishData ? (
                <div className="container">
                    <div className="mainContent">
                        {/* 表單區塊 */}
                        <div className="form-section">
                            <form onSubmit={handleUpdate}>
                                {/* 第一排 */}
                                <div className="form-row">
                                    <label htmlFor="title">案件標題*</label>
                                    <input type="text" id="title" name="title" placeholder="輸入您的委託標題" value={publishData.title} onChange={handleChange} required />
                                </div>

                                {/* 第二排 */}
                                <div className="form-row two-columns">
                                    <div>
                                        <label htmlFor="contact_name">聯絡人名稱*</label>
                                        <input type="text" id="contact_name" name="contact_name" placeholder="輸入聯絡人名稱" value={publishData.contact_name} onChange={handleChange} required />
                                    </div>
                                    <div>
                                        <label htmlFor="location">執行地點*</label>
                                        <select id="location" name="location" value={publishData.location} onChange={handleChange} required>
                                            <option value="" disabled>選擇地點</option>
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

                                {/* 第三排 */}
                                <div className="form-row two-columns">
                                    <div>
                                        <label htmlFor="budget">預算金額*</label>
                                        <input type="number" id="budget" name="budget" placeholder="預算金額" value={parseInt(publishData.budget)} onChange={handleChange} required />
                                    </div>
                                    <div>
                                        <label htmlFor="phone">聯絡人電話*</label>
                                        <input type="tel" id="phone" name="phone" placeholder="輸入聯絡人電話" value={publishData.phone} onChange={handleChange} required />
                                    </div>
                                    <div>
                                        <label htmlFor="completion_time">案件完成時間*</label>
                                        <input type="date" id="completion_time" name="completion_time" value={formatDate(publishData.completion_time)} onChange={handleChange} required />
                                    </div>
                                    <div>
                                        <label htmlFor="require_code">需求語言*</label>
                                        <select id="require_code" name="require_code" value={publishData.require_code} onChange={handleChange} required>
                                            <option value="" disabled>選擇需求語言</option>
                                            <option value="HTML">HTML</option>
                                            <option value="CSS">CSS</option>
                                            <option value="JavaScript">JavaScript</option>
                                            <option value="CSharp">C#</option>
                                            <option value="CPlus">C++</option>
                                            <option value="ReactJS">ReactJS</option>
                                            <option value="Laravel">Laravel</option>
                                        </select>
                                    </div>
                                </div>

                                {/* 第四排 */}
                                <div className="form-row">
                                    <label htmlFor="email">聯絡人Email*</label>
                                    <input type="email" id="email" name="email" placeholder="輸入聯絡人Email" value={publishData.email} onChange={handleChange} required />
                                </div>

                                {/* 第五排 */}
                                <div>
                                    <label htmlFor="details">需求詳情*
                                        <span style={{ fontSize: '0.8rem', color: 'gray', marginLeft: '8px' }}>填寫越完整，接案者更了解您的需求</span>
                                    </label>
                                    <textarea id="details" name="details" rows="10" placeholder="專案期限：&#10;用於哪個行業：&#10;其他細節說明：" value={publishData.details} onChange={handleChange} required></textarea>
                                </div>

                                {/* 提交按鈕 */}
                                <div className="form-row submit-row">
                                    <button type="submit" className="submit-btn">更新案件</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="space"></div>
                </div>
            ) : (<div className="container">暫無資料</div>)}

            {/* 彈出視窗 */}
            {showSuccessAlert && (
                <div id="successAlert" className="publishmodal">
                    <div className="publishmodal-content">
                        <div className="checkmark">✔</div>
                        <p>案件已成功更新！</p>
                        <button id="closeAlert" onClick={handleCloseAlert}>確認</button>
                    </div>
                </div>
            )}

            {/* 遮罩層 */}
            {showSuccessAlert && (
                <div id="overlay" className="overlay"></div>
            )}

            {/* 懸浮按鈕區域 */}
            <Floatingbuttons />
        </>
    );
};

export default Pcontainer;
