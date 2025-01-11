import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import moment from 'moment';


const CaseManager = () => {
    const [cases, setCases] = useState([]);
    const [userId, setUserId] = useState(13);
    // const userId = 4;   // 假設已登入的用戶 ID
    // const pid= cases.pid;
    const navigate = useNavigate();

    // 設置頁數按鈕
    const [filteredData, setFilteredData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);


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

    // 獲取案件資料
    // useEffect(() => {
    //     axios.get(`http://127.0.0.1:8000/api/get-cases/${userId}`)
    //         .then(response => {
    //             setCases(response.data);
    //             setFilteredData(response.data);
    //             // console.log('成功獲取案件資料', response.data)
    //         })
    //         .catch(error => {
    //             console.error('案件資料獲取失敗', error);
    //         });
    //     // 中括號內的變數代表當這個變數的值改變時才會觸發這個函式然後進行渲染
    // }, [userId])

    // 獲取案件資料
    const fetchCasesData = async () => {
        try {
            // console.log('開始獲取案件資料')
            const response = await axios.get(`http://127.0.0.1:8000/api/get-cases/${userId}`);
            // console.log('成功獲取案件資料')
            setCases(response.data);
            setFilteredData(response.data);
            // console.log(response.data)
        } catch (error) {
            console.error('案件資料獲取失敗', error);
            alert('案件資料獲取失敗，請稍後再試');
        }
    };

    useEffect(() => {
        if(userId){
            fetchCasesData();
        }
    }, [userId]);

    // 設定案件的開關按鈕(目前沒辦法用)
    // const handleSwitch = async (pid) => {
    //     try {
    //         // const token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

    //         // const response = await axios.post(`http://localhost:8000/api/get-cases/switch-case`, cases, {
    //         //     // pid: pid
    //         //     headers: {
    //         //         'X-CSRF-TOKEN': token,
    //         //     },
    //         // });

    //         alert(response.data.message);
    //         const updatedCases = cases.map((caseItem) => {
    //             if (caseItem.pid === pid) {
    //                 return { ...caseItem, is_open: response.data.is_open };
    //             }
    //             // return caseItem.pid === pid ? response.data : caseItem;
    //             return caseItem;
    //         });
    //         setCases(updatedCases);
    //     } catch (error) {
    //         console.error("案件開關失敗：", error);
    //     }
    // }

    // 設置案件開關按鈕
    const handleSwitch = async (caseItem) => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/get-cases/switch-case', {
                pid: caseItem.pid,
                is_open: caseItem.is_open
            });
            console.log(response.data);
            const updatedCase = response.data.updatedCase
            // alert(response.data.message)

            // 即時更新特定案件的狀態 
            setCases(prevCases => prevCases.map(item =>
                item.pid === caseItem.pid ? { ...item, is_open: !item.is_open } : item
            ));
            // console.log('更新後的案件狀態:', newCases);

            fetchCasesData()

        } catch (error) {
            console.error('案件顯示關閉出錯', error);
            alert('案件顯示/關閉出錯')
        }
    };

    // 設置完成案件的按鈕函式
    const submitComplete = (caseId, caseName) => {
        const userConfirmed = window.confirm(`是否確定完成案件 ${caseName}?`)
        if (userConfirmed) {
            alert('已完成案件！點擊確定後將跳轉至評價頁面。')
            navigate('/star', { state: { caseId } })
        }
    }

    // 設置編輯案件的按鈕函式
    const editPublish = (caseId) => {
        navigate('/publish_editor', { state: { caseId } })

    }

    // 設置頁數按鈕
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const goToFirstPage = () => setCurrentPage(1);
    const goToPreviousPage = () => setCurrentPage(currentPage > 1 ? currentPage - 1 : 1);
    const goToNextPage = () => setCurrentPage(currentPage < totalPages ? currentPage + 1 : totalPages);
    const goToLastPage = () => setCurrentPage(totalPages);

    const handleItemsPerPageChange = (e) => {
        setItemsPerPage(Number(e.target.value));
        setCurrentPage(1);
    };

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
                    <Link to="/personal_editor">個人資訊</Link>
                    <label htmlFor="">&gt;</label>
                    <Link to="/case_manager">案件管理</Link>
                </div>
            </div>
            {/* content */}
            <div className="caseMngAllCase">
                {cases && cases.length > 0 ? (
                    currentItems.map((caseItem) => (
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
                                <div className="caseMngSeeAllTakerAndComplete">
                                    <button className='caseMngCaseEditor'
                                        onClick={() => editPublish(caseItem.pid)}>編輯
                                    </button>
                                    <Link to="/select_taker" className='caseMngSeeAllTaker'>應徵者</Link>
                                    <button
                                        className={caseItem.taker_uid ? 'completeBtn' : 'nonCompleteBtn'}
                                        disabled={!caseItem.taker_uid}
                                        onClick={() => submitComplete(caseItem.pid, caseItem.title)}
                                    >完成案件
                                    </button>
                                </div>
                                <div className="caseMngSwitchAndData">
                                    <div className="caseMngSwitch">
                                        <input
                                            type="checkbox" className="caseMngSwitchHidden"
                                            id={`switch${caseItem.pid}`}
                                            checked={caseItem.is_open}
                                            onChange={() => handleSwitch(caseItem)}
                                        />
                                        <label className={`caseMngSwitchToggle ${caseItem.is_open ? 'open' : 'closed'}`} htmlFor={`switch${caseItem.pid}`} />
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

                <div className="ftab caseMngtab" style={{ marginTop: '50px' }}>
                    <button onClick={goToFirstPage} disabled={currentPage === 1}>
                        <img src="/img/left.png" alt="First Page" />
                    </button>
                    <button className="fleftnext" onClick={goToPreviousPage} disabled={currentPage === 1}>
                        <img src="/img/leftnext.png" alt="Previous Page" />
                        <span>上一頁</span>
                    </button>
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index + 1}
                            onClick={() => setCurrentPage(index + 1)}
                            disabled={currentPage === index + 1}
                            className={currentPage === index + 1 ? 'current-page' : ''}
                        >
                            {index + 1}
                        </button>
                    ))}
                    <button className="frightnext" onClick={goToNextPage} disabled={currentPage === totalPages}>
                        <span>下一頁</span>
                        <img src="/img/rightnext.png" alt="Next Page" />
                    </button>
                    <button onClick={goToLastPage} disabled={currentPage === totalPages}>
                        <img src="/img/right.png" alt="Last Page" />
                    </button>

                    <select className='caseMngTabNumber' value={itemsPerPage} onChange={handleItemsPerPageChange}>
                        <option value={5}>顯示5筆資料</option>
                        <option value={10}>顯示10筆資料</option>
                        <option value={20}>顯示20筆資料</option>
                    </select>

                </div>

            </div>
        </div>
    );
};

export default CaseManager;