import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useUser } from '../UserProvider';

const EditProfile = () => {
    const { user } = useUser();
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const id = user.id;
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`/userinfo/${id}`);
                const data = response.data;
                console.log('獲得的數據:', data);
                setUserData(data);
            } catch (error) {
                setError('Error fetching data');
                console.error('Error fetching data:', error);
            }
            finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    if (loading) {
        return <h2>載入中...</h2>; // 顯示載入中訊息
    }

    if (error) {
        return <h2>{error}</h2>; // 顯示錯誤訊息
    }

    if (!user) {
        return <h2>尚未登入無法獲取資料</h2>; // 顯示未登入訊息
    }

    return (
        // 基本資料
        // <div id="profile-edit-content" className="info-box">
        //     <h3>基本資料<span className="required /-hint">*為必填項目</span></h3>
        //     <hr />
        //     <form id="basic-info-form">
        //         {/* <!-- 姓名 --> */}
        //         <div className="form-group">
        //             <label htmlFor="full-name">*姓名<input type="text" id="full-name" name="full-name" placeholder="請輸入您的姓名" required /></label>
        //         </div>
        //         <hr />
        //         {/* <!-- 接案暱稱 --> */}
        //         <div className="form-group">
        //             <label htmlFor="nickname">*暱稱<input type="text" id="nickname" name="nickname" placeholder="請輸入接案暱稱" required /></label>
        //         </div>
        //         <hr />
        //         {/* <!-- 接案狀態 --> */}
        //         <div className="form-group">
        //             <label>*接案狀態：</label>
        //             <div className="radio-group-stacked">
        //                 <label><input type="radio" name="case-status" value="顯示聯絡資訊" required /> 開啟，顯示聯絡資訊【全站案主皆能查看您的聯絡資訊，主動與您聯繫。】</label>
        //                 <label><input type="radio" name="case-status" value="關閉聯絡資訊" /> 關閉 【建議您開放檔案，增加更多外包洽談機會】</label>
        //             </div>
        //         </div>
        //         <hr />
        //         {/* <!-- 接案身份 --> */}
        //         <div className="form-group">
        //             <label>*接案身份：</label>
        //             <div className="radio-group-inline">
        //                 <label><input type="radio" name="identity" value="個人兼職" required /> 個人兼職</label>
        //                 <label><input type="radio" name="identity" value="專職SOHO" /> 專職SOHO</label>
        //                 <label><input type="radio" name="identity" value="工作室" /> 工作室</label>
        //                 <label><input type="radio" name="identity" value="兼職上班族" /> 兼職上班族</label>
        //                 <label><input type="radio" name="identity" value="公司" /> 公司</label>
        //                 <label><input type="radio" name="identity" value="學生" /> 學生</label>
        //             </div>
        //         </div>
        //         <hr />
        //         {/* <!-- 居住地區 --> */}
        //         <div className="form-group">
        //             <label htmlFor="region">*居住地區：
        //                 <select id="region" name="region" required >
        //                     <option value="">請選擇您的居住地區</option>
        //                     <option value="north">北部</option>
        //                     <option value="central">中部</option>
        //                     <option value="south">南部</option>
        //                     <option value="east">東部</option>
        //                 </select>
        //             </label>
        //         </div>
        //         <hr />
        //         {/* <!-- 行動電話 --> */}
        //         <div className="form-group">
        //             <label htmlFor="phone">*行動電話：<input type="tel" id="phone" name="phone" placeholder="請輸入您的行動電話" required /></label>
        //         </div>
        //         <hr />
        //         {/* <!-- 電子郵件 --> */}
        //         <div className="form-group">
        //             <label htmlFor="email">*電子郵件：<input type="email" id="email" name="email" placeholder="請輸入您的電子郵件" required /></label>
        //         </div>
        //         <hr />
        //         {/* <!-- LINE ID --> */}
        //         <div className="form-group">
        //             <label htmlFor="line-id">LINE ID：<input type="text" id="line-id" name="line-id" placeholder="請輸入您的 LINE ID" /></label>
        //         </div>
        //         <hr />
        //         {/* <!-- 提交按鈕 --> */}
        //         <div className="submit-row">
        //             <button type="submit" className="submit-btn">儲存資料</button>
        //         </div>
        //     </form>
        // </div>

        // 條件
        // <div id="ideal-conditions" className="info-box">
        //     <h3>理想接案條件<span className="required /-hint">*為必填項目</span></h3>
        //     <hr />
        //     <form id="ideal-conditions-form">
        //         {/* <!-- 理想接案地區 --> */}
        //         <div className="form-group">
        //             <label htmlFor="ideal-region">*理想接案地區：{userData.preferred_location}
        //                 <select id="ideal-region" name="ideal-region" required defaultValue="">
        //                     <option value="" disabled>請選擇理想接案地區：</option>
        //                     <option value="remote">遠端</option>
        //                     <option value="north">北部</option>
        //                     <option value="central">中部</option>
        //                     <option value="south">南部</option>
        //                     <option value="east">東部</option>
        //                 </select>
        //             </label>
        //         </div>
        //         <hr />
        //         {/* <!-- 理想接案類別 --> */}
        //         <div className="form-group">
        //             <label htmlFor="ideal-category">*接案類別：{userData.job_category}
        //                 <select id="ideal-category" name="ideal-category" required defaultValue="">
        //                     <option value="" disabled>請選擇理想接案類別</option>
        //                     <option value="design">設計</option>
        //                     <option value="development">開發</option>
        //                     <option value="marketing">行銷</option>
        //                     <option value="writing">寫作</option>
        //                 </select>
        //             </label>
        //             <span className="hint">【理想接案類別將顯示於個人工作室，可作為案主找尋人才時的重要依據】</span>
        //         </div>
        //         <hr />
        //         {/* <!-- 提交按鈕 --> */}
        //         <div className="submit-row">
        //             <button type="submit" className="submit-btn">儲存條件</button>
        //         </div>
        //     </form>
        // </div>

        // 經歷
        // <div id="case-experience" className="info-box">
        //     <h3>接案經歷</h3>
        //     <hr />
        //     <form id="case-experience-form">
        //         {/* <!-- 累積接案經驗 --> */}
        //         <div className="form-group">
        //             <label htmlFor="total-experience">累積接案經驗：{userData.accumulated_experience}
        //                 <select id="total-experience" name="total-experience" defaultValue="">
        //                     <option value="" disabled>請選擇累積經驗：</option>
        //                     <option value="beginner">1-5 件</option>
        //                     <option value="intermediate">6-15 件</option>
        //                     <option value="advanced">16 件以上</option>
        //                 </select>
        //             </label>
        //         </div>
        //         <hr />
        //         {/* <!-- 接案經驗條目 --> */}
        //         <div className="form-group">
        //             <label>接案經驗1：
        //                 <select name="experience-type-1" defaultValue="">
        //                     <option value="" disabled>請選擇類型</option>
        //                     <option value="design">設計</option>
        //                     <option value="development">開發</option>
        //                     <option value="marketing">行銷</option>
        //                     <option value="writing">寫作</option>
        //                 </select>
        //                 <select name="experience-detail-1" defaultValue="">
        //                     <option value="" disabled>請選擇細項</option>
        //                     <option value="web">網站設計</option>
        //                     <option value="graphic">平面設計</option>
        //                     <option value="seo">SEO 行銷</option>
        //                     <option value="content">內容寫作</option>
        //                 </select>
        //                 <button type="button" className="clear-btn">清除</button>
        //             </label>
        //         </div>
        //         <button type="button" className="add-btn">新增</button>
        //         <hr />
        //         {/* <!-- 提交按鈕 --> */}
        //         <div className="submit-row">
        //             <button type="submit" className="submit-btn">儲存經歷</button>
        //         </div>
        //     </form>
        // </div>      

        <>
            {/* 基本資料 */}
            <div id="profile-edit-content" className="info-box">
                <h3>基本資料<span className="required /-hint">*為必填項目</span></h3>
                <hr />
                <br />
                <form id="basic-info-form">
                    {/* <!-- 姓名 --> */}
                    <div className="form-group">
                        <label htmlFor="full-name">*姓名：{userData.username}</label>
                    </div>
                    <hr />
                    {/* <!-- 接案暱稱 --> */}
                    <div className="form-group">
                        <label htmlFor="nickname">*暱稱：{userData.nickname}</label>
                    </div>
                    <hr />
                    {/* <!-- 接案狀態 --> */}
                    <div className="form-group">
                        <label>*接案狀態：</label>
                        <div className="radio-group-stacked">
                            {userData.job_status === true ? (
                                <label>開啟，顯示聯絡資訊【全站案主皆能查看您的聯絡資訊，主動與您聯繫。】</label>
                            ) : (
                                <label>關閉，不顯示聯絡資訊 【建議您開放檔案，增加更多外包洽談機會】</label>
                            )}
                        </div>
                    </div>
                    <hr />
                    {/* <!-- 接案身份 --> */}
                    <div className="form-group">
                        <label>*接案身份：{userData.job_title}</label>
                    </div>
                    <hr />
                    {/* <!-- 居住地區 --> */}
                    <div className="form-group">
                        <label htmlFor="region">*居住地區：{userData.location}</label>
                    </div>
                    <hr />
                    {/* <!-- 行動電話 --> */}
                    <div className="form-group">
                        <label htmlFor="phone">*行動電話：{userData.phone}</label>
                    </div>
                    <hr />
                    {/* <!-- 電子郵件 --> */}
                    <div className="form-group">
                        <label htmlFor="email">*電子郵件：{user.email}</label>
                    </div>
                    <hr />
                    {/* <!-- LINE ID --> */}
                    <div className="form-group">
                        <label htmlFor="line-id">LINE ID：{userData.line_id}</label>
                    </div>
                    <hr />
                    {/* <!-- 提交按鈕 --> */}
                </form>
            </div>

            {/* 條件 */}
            <div id="ideal-conditions" className="info-box">
                <h3>理想接案條件<span className="required /-hint">*為必填項目</span></h3>
                <hr />
                <form id="ideal-conditions-form">
                    {/* <!-- 理想接案地區 --> */}
                    <div className="form-group">
                        <label htmlFor="ideal-region">*理想接案地區：{userData.preferred_location}
                            <select id="ideal-region" name="ideal-region" required defaultValue="">
                                <option value="" disabled>請選擇理想接案地區：</option>
                                <option value="remote">遠端</option>
                                <option value="north">北部</option>
                                <option value="central">中部</option>
                                <option value="south">南部</option>
                                <option value="east">東部</option>
                            </select>
                        </label>
                    </div>
                    <hr />
                    {/* <!-- 理想接案類別 --> */}
                    <div className="form-group">
                        <label htmlFor="ideal-category">*接案類別：{userData.job_category}
                            <select id="ideal-category" name="ideal-category" required defaultValue="">
                                <option value="" disabled>請選擇理想接案類別</option>
                                <option value="design">設計</option>
                                <option value="development">開發</option>
                                <option value="marketing">行銷</option>
                                <option value="writing">寫作</option>
                            </select>
                        </label>
                        <span className="hint">【理想接案類別將顯示於個人工作室，可作為案主找尋人才時的重要依據】</span>
                    </div>
                    <hr />
                    {/* <!-- 提交按鈕 --> */}
                    <div className="submit-row">
                        <button type="submit" className="submit-btn">儲存條件</button>
                    </div>
                </form>
            </div>

            {/* 經歷 */}
            <div id="case-experience" className="info-box">
                <h3>接案經歷</h3>
                <hr />
                <form id="case-experience-form">
                    {/* <!-- 累積接案經驗 --> */}
                    <div className="form-group">
                        <label htmlFor="total-experience">累積接案經驗：{userData.accumulated_experience}
                            <select id="total-experience" name="total-experience" defaultValue="">
                                <option value="" disabled>請選擇累積經驗：</option>
                                <option value="beginner">1-5 件</option>
                                <option value="intermediate">6-15 件</option>
                                <option value="advanced">16 件以上</option>
                            </select>
                        </label>
                    </div>
                    <hr />
                    {/* <!-- 接案經驗條目 --> */}
                    <div className="form-group">
                        <label>接案經驗1：{userData.job_experience}
                            <select name="experience-type-1" defaultValue="">
                                <option value="" disabled>請選擇類型</option>
                                <option value="design">設計</option>
                                <option value="development">開發</option>
                                <option value="marketing">行銷</option>
                                <option value="writing">寫作</option>
                            </select>
                            {userData.job_description}
                            <select name="experience-detail-1" defaultValue="">
                                <option value="" disabled>請選擇細項</option>
                                <option value="web">網站設計</option>
                                <option value="graphic">平面設計</option>
                                <option value="seo">SEO 行銷</option>
                                <option value="content">內容寫作</option>
                            </select>
                            <button type="button" className="clear-btn">清除</button>
                        </label>
                    </div>
                    <button type="button" className="add-btn">新增</button>
                    <hr />
                    {/* <!-- 提交按鈕 --> */}
                    <div className="submit-row">
                        <button type="submit" className="submit-btn">儲存經歷</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default EditProfile
