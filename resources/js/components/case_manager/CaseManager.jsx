import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';


const CaseManager = () => {
    const [cases, setCases] = useState([]);
    const [userId, setUserId] = useState(4);
    // const userId = 4;   // 假設已登入的用戶 ID
    // const pid= cases.pid;

    // useEffect(() => {
    //     fetchCases(userId);
    // }, [userId]);

    // 把登入註冊串起來後用這種方式不知道為啥抓不到資料
    // const fetchCases = async (userId) => {
    //     try {
    //         const response = await axios.get(`http://localhost:8000/api/get-cases/${userId}`);
    //         setCases(response.data);

    //     } catch (error) {
    //         console.error("案件獲取失敗：", error);
    //     }
    // }

    // 獲取應徵者資料
    useEffect(() => {
        console.log(`開始獲取 uid = ${userId} 的用戶的所有案件資料`)
        axios.get(`http://127.0.0.1:8000/api/get-cases/${userId}`)
            .then(response => {
                setCases(response.data);
                console.log('成功獲取案件資料', response.data)
            })
            .catch(error => {
                console.error('案件資料獲取失敗', error);
            });
        // 中括號內的變數代表當這個變數的值改變時才會觸發這個函式然後進行渲染
    }, [userId])

    // 設定案件的開關按鈕(目前沒辦法用)
    const handleSwitch = async (pid) => {
        try {
            const token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

            const response = await axios.post(`http://localhost:8000/api/get-cases/switch-case`, cases, {
                // pid: pid
                headers: {
                    'X-CSRF-TOKEN': token,
                },
            });

            alert(response.data.message);
            const updatedCases = cases.map((caseItem) => {
                if (caseItem.pid === pid) {
                    return { ...caseItem, is_open: response.data.is_open };
                }
                // return caseItem.pid === pid ? response.data : caseItem;
                return caseItem;
            });
            setCases(updatedCases);
        } catch (error) {
            console.error("案件開關失敗：", error);
        }
    }

    // 設置幾分鐘前更新
    const timeDifference = (timestamp) => {
        const now = moment();
        const updatedAt = moment(timestamp);
        const diffInMinutes = now.diff(updatedAt, 'minutes');

        // console.log(`現在時間: ${now.format()}`);
        // console.log(`更新時間: ${updatedAt.format()}`);
        // console.log(`相差分鐘數: ${diffInMinutes}`);

        if (diffInMinutes < 60) {
            return `${diffInMinutes} 分鐘前更新`;
        } else if (diffInMinutes < 1440) {
            const diffInHours = Math.floor(diffInMinutes / 60)
            return `${diffInHours} 小時前更新`;
        } else if (diffInMinutes < 10080) {
            // 小於 7 天會顯示幾天前更新
            const diffInDays = Math.floor(diffInMinutes / 1440);
            return `${diffInDays} 天前更新`;
        } else {
            return `${updatedAt.format('YYYY-MM-DD')} 更新`
        }
    };

    // 格式化日期字串
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    // 偵測到資料庫中的文字換行時就換行
    // 這邊設置一個函式，return 的東西需要放在標籤中，並使用 dangerouslySetInnerHTML 屬性
    const createMarkup = (text) => {
        return { __html: text.replace(/\n/g, '<br>') };
    };

    const applicant_count = cases.applicant_count ?? 0;
    const click_count = cases.click_count ?? 0;

    return (
        <div className="mainContent caseMngMainContent">
            <div className="caseMngPath">
                {/* 路徑連結 */}
                <div className="caseMngPathLink">
                    <img src="../img/Icon/Start.png" alt="icon" />
                    <Link to="/personal_editor">我的案件</Link>
                    <label htmlFor="">&gt;</label>
                    <Link to="/case_manager">案件管理</Link>
                </div>
            </div>
            {/* content */}
            <div className="caseMngAllCase">
                {cases && cases.length > 0 ? (
                    cases.map((caseItem) => (
                        <React.Fragment key={caseItem.pid}>
                            {/* 這裡的 pid 是資料庫中的案件 id */}
                            <div key={caseItem.pid} className="caseMngContent">
                                <div className="caseMngCaseInfo">
                                    <div className="caseMngPostTime">
                                        <p>發布時間：{caseItem.created_at}</p>
                                    </div>
                                    <Link to="/detail" className="caseMngTitle">
                                        <h2>{caseItem.title}</h2>
                                    </Link>
                                    <div className="caseMngCaseContent" dangerouslySetInnerHTML={createMarkup(caseItem.details)} />
                                </div>
                                <div className="caseMngSwitchAndData">
                                    <div className="caseMngSwitch">
                                        <input
                                            type="checkbox" className="caseMngSwitchHidden"
                                            id={`switch${caseItem.pid}`}
                                            checked={caseItem.is_open}
                                            onChange={() => handleSwitch(caseItem.pid)}
                                        />
                                        <label className="caseMngSwitchToggle" htmlFor={`switch${caseItem.pid}`}></label>
                                    </div>
                                    <div className="caseMngCaseData">
                                        <p>應徵人數：{applicant_count}</p>
                                        <p>點閱次數：{click_count}</p>
                                        <p>{timeDifference(new Date(caseItem.updated_at).toISOString())}</p>
                                    </div>
                                </div>
                            </div>
                            <hr />
                        </React.Fragment>
                    ))
                ) : (
                    <div className="seleTakercontent" style={{ display: 'block', height: '100%', textAlign: 'center' }}>查無資料</div>
                )
                }


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