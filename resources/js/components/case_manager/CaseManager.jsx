import React from 'react';
// import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import bootsrap from '../../bootstrap';


const CaseManager = () => {
    const [cases, setCases] = useState([]);
    const userId = 4;   // 假設已登入的用戶 ID
    // const cid= cases.cid;

    useEffect(() => {
        fetchCases(userId);
    }, [userId]);

    const fetchCases = async (userId) => {
        try {
            const response = await axios.get(`http://localhost:8000/api/get-cases/${userId}`);
            setCases(response.data);

        } catch (error) {
            console.error("案件獲取失敗：", error);
        }
    }

    // 設定案件的開關按鈕(目前沒辦法用)
    const handleSwitch = async (cid) => {
        try {
            const response = await axios.post(`http://localhost:8000/api/get-cases/${cid}/switch-case`);
            const updatedCases = cases.map((caseItem) => {
                return caseItem.cid === cid ? response.data : caseItem;
            });
            setCases(updatedCases);
        } catch (error) {
            console.error("案件開關失敗：", error);
        }
    }

    // 偵測到資料庫中的文字換行時就換行
    // 這邊設置一個函式，return 的東西需要放在標籤中，並使用 dangerouslySetInnerHTML 屬性
    const createMarkup = (text) => {
        return { __html: text.replace(/\n/g, '<br>') };
    };

    const applicant_count = cases.applicant_count ?? 0;
    const click_count = cases.click_count ?? 0;

    return (
        <div className="mainContent">
            <div className="caseMngPath">
                {/* 路徑連結 */}
                <div className="caseMngPathLink">
                    <img src="../img/Icon/Start.png" alt="icon" />
                    <a href="#">我的案件</a>
                    <label htmlFor="">&gt;</label>
                    <a href="#">案件管理</a>
                </div>
            </div>
            {/* content */}
            <div className="caseMngAllCase">
                {cases.map((caseItem) => (
                    // 這裡的 cid 是資料庫中的案件 id
                    <div key={caseItem.cid} className="caseMngContent">
                        <div className="caseMngCaseInfo">
                            <div className="caseMngPostTime">
                                <p>發布時間：{caseItem.created_at}</p>
                            </div>
                            <div className="caseMngTitle">
                                <h2>{caseItem.title}</h2>
                            </div>
                            <div className="caseMngCaseContent" dangerouslySetInnerHTML={createMarkup(caseItem.details)} />
                        </div>
                        <div className="caseMngSwitchAndData">
                            <div className="caseMngSwitch">
                                <input
                                    type="checkbox" className="caseMngSwitchHidden"
                                    id={`switch${caseItem.cid}`}
                                    checked={caseItem.is_open}
                                    onChange={() => handleSwitch(caseItem.cid)}
                                />
                                <label className="caseMngSwitchToggle" htmlFor={`switch${caseItem.cid}`}></label>
                            </div>
                            <div className="caseMngCaseData">
                                <p>應徵人數：{applicant_count}</p>
                                <p>點閱次數：{click_count}</p>
                                <p>{caseItem.updated_at} 更新</p>
                            </div>
                        </div>
                    </div>
                ))}
                {/* content1 */}

                <hr />

                {/* content2 */}
                {/* <div className="caseMngContent">
                    <div className="caseMngCaseInfo">
                        <div className="caseMngPostTime">
                            <p>發布時間：日期</p>
                        </div>
                        <div className="caseMngTitle">
                            <h2>獨立品牌網頁製作</h2>
                        </div>
                        <div className="caseMngCaseContent">
                            1.需求設計專門logo <br />
                            2.需要有資料庫建立 <br />
                            3.以藍色白色為主 <br />
                            4. 鴨子需要會飛 .....更多
                        </div>
                    </div>
                    <div className="caseMngSwitchAndData">
                        <div className="caseMngSwitch">
                            <input type="checkbox" className="caseMngSwitchHidden" id="switch2" />
                            <label className="caseMngSwitchToggle" htmlFor="switch2"></label>
                        </div>
                        <div className="caseMngCaseData">
                            <p>應徵人數：人數</p>
                            <p>點閱次數：次數</p>
                            <p>日期 更新</p>
                        </div>
                    </div>
                </div>
                <hr /> */}

                {/* content3 */}
                {/* <div className="caseMngContent">
                    <div className="caseMngCaseInfo">
                        <div className="caseMngPostTime">
                            <p>發布時間：日期</p>
                        </div>
                        <div className="caseMngTitle">
                            <h2>獨立品牌網頁製作</h2>
                        </div>
                        <div className="caseMngCaseContent">
                            1.需求設計專門logo <br />
                            2.需要有資料庫建立 <br />
                            3.以藍色白色為主 <br />
                            4. 鴨子需要會飛 .....更多
                        </div>
                    </div>
                    <div className="caseMngSwitchAndData">
                        <div className="caseMngSwitch">
                            <input type="checkbox" className="caseMngSwitchHidden" id="switch3" />
                            <label className="caseMngSwitchToggle" htmlFor="switch3"></label>
                        </div>
                        <div className="caseMngCaseData">
                            <p>應徵人數：人數</p>
                            <p>點閱次數：次數</p>
                            <p>日期 更新</p>
                        </div>
                    </div>
                </div>
                <hr /> */}

                {/* content4 */}
                {/* <div className="caseMngContent">
                    <div className="caseMngCaseInfo">
                        <div className="caseMngPostTime">
                            <p>發布時間：日期</p>
                        </div>
                        <div className="caseMngTitle">
                            <h2>獨立品牌網頁製作</h2>
                        </div>
                        <div className="caseMngCaseContent">
                            1.需求設計專門logo <br />
                            2.需要有資料庫建立 <br />
                            3.以藍色白色為主 <br />
                            4. 鴨子需要會飛 .....更多
                        </div>
                    </div>
                    <div className="caseMngSwitchAndData">
                        <div className="caseMngSwitch">
                            <input type="checkbox" className="caseMngSwitchHidden" id="switch4" />
                            <label className="caseMngSwitchToggle" htmlFor="switch4"></label>
                        </div>
                        <div className="caseMngCaseData">
                            <p>應徵人數：人數</p>
                            <p>點閱次數：次數</p>
                            <p>日期 更新</p>
                        </div>
                    </div>
                </div>
                <hr /> */}

                {/* content5 */}
                {/* <div className="caseMngContent">
                    <div className="caseMngCaseInfo">
                        <div className="caseMngPostTime">
                            <p>發布時間：日期</p>
                        </div>
                        <div className="caseMngTitle">
                            <h2>獨立品牌網頁製作</h2>
                        </div>
                        <div className="caseMngCaseContent">
                            1.需求設計專門logo <br />
                            2.需要有資料庫建立 <br />
                            3.以藍色白色為主 <br />
                            4. 鴨子需要會飛 .....更多
                        </div>
                    </div>
                    <div className="caseMngSwitchAndData">
                        <div className="caseMngSwitch">
                            <input type="checkbox" className="caseMngSwitchHidden" id="switch4" />
                            <label className="caseMngSwitchToggle" htmlFor="switch4"></label>
                        </div>
                        <div className="caseMngCaseData">
                            <p>應徵人數：人數</p>
                            <p>點閱次數：次數</p>
                            <p>日期 更新</p>
                        </div>
                    </div>
                </div> */}


                {/* tab */}
                <div className="caseMngTab">
                    <a href="">(箭頭)最前頁</a>
                    <a href="">(箭頭)上一頁</a>
                    <a style={{ color: '#464646', backgroundColor: '#FFA500', border: '1px solid #000000' }} href="">1</a>
                    <a href="">2</a>
                    <a href="">3</a>
                    <p style={{ margin: '5px 10px' }}>...</p>
                    <a href="">7</a>
                    <a href="">8</a>
                    <a href="">下一頁(箭頭)</a>
                    <a href="">最後頁(箭頭)</a>
                </div>
            </div>
        </div>
    );
};

export default CaseManager;