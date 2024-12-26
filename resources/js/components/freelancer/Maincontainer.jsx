import React, { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import DataList from './DataList';

const Maincontainer = () => {
    // 定義狀態變數
    const [data, setData] = useState([]); // 儲存從 API 獲取的原始數據
    const [query, setQuery] = useState(''); // 儲存用戶輸入的關鍵字
    const [filteredData, setFilteredData] = useState([]); // 儲存過濾後的數據
    const [keywords, setKeywords] = useState([]); // 儲存用戶添加的關鍵字
    const [isLoading, setIsLoading] = useState(false); // 請求數據時的加載狀態
    const [error, setError] = useState(null); // 儲存錯誤信息
    const [sortOrder, setSortOrder] = useState('desc'); // 儲存排序順序，初始為從大到小
    const [currentPage, setCurrentPage] = useState(1); // 當前頁碼
    const [itemsPerPage, setItemsPerPage] = useState(10); // 每頁顯示的數據數量

    // 請求數據並初始化數據
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get('/api/get-userinfo-publish');
    
                let data = response.data; // response.data 從後端獲取的資料
    
                // 確認資料結構
                // console.log("Fetched Data:", data);
    
                setData(data); // 初始化時顯示所有數據
                setFilteredData(data); // 初始化時顯示所有數據
            } catch (error) {
                setError('Error fetching data');
                console.error('Error fetching data', error);
            } finally {
                setIsLoading(false);
            }
        };
    
        fetchData();
    }, []);
    



    // 添加關鍵字
    const handleAddKeyword = () => {
        if (query && !keywords.includes(query)) {
            setKeywords([...keywords, query]);
            setQuery('');
        }
    };

    // 移除關鍵字
    const handleRemoveKeyword = (keyword) => {
        setKeywords(keywords.filter(k => k !== keyword));
    };

    // 過濾和排序數據
    useEffect(() => {
        let result = data.filter(item =>
            keywords.every(keyword =>
                item.title.toLowerCase().includes(keyword.toLowerCase()) ||
                item.details.toLowerCase().includes(keyword.toLowerCase())
            )
        );

        // 排序數據
        result.sort((a, b) => {
            const timeA = moment(a.updated_at);
            const timeB = moment(b.updated_at);

            if (sortOrder === 'asc') {
                return timeA - timeB;
            } else {
                return timeB - timeA;
            }
        });

        setFilteredData(result);
    }, [keywords, data, sortOrder]);

    // 切換排序順序
    const handleSortToggle = () => {
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    };

    // 更改每頁顯示的數據數量
    const handleItemsPerPageChange = (e) => {
        setItemsPerPage(Number(e.target.value));
        setCurrentPage(1); // 重置到第 1 頁
    };

    // 計算更新時間差異
    const timeDifference = (timestamp) => {
        const now = moment();
        const updatedAt = moment(timestamp);
        const diffInMinutes = now.diff(updatedAt, 'minutes');
        const diffInHours = now.diff(updatedAt, 'hours');
        const diffInDays = now.diff(updatedAt, 'days');

        if (diffInMinutes < 60) {
            return `${diffInMinutes} 分鐘前更新`;
        } else if (diffInHours < 24) {
            return `${diffInHours} 小時前更新`;
        } else {
            return `${diffInDays} 天前更新`;
        }
    };

    // 分頁邏輯
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const goToFirstPage = () => setCurrentPage(1);
    const goToPreviousPage = () => setCurrentPage(currentPage > 1 ? currentPage - 1 : 1);
    const goToNextPage = () => setCurrentPage(currentPage < totalPages ? currentPage + 1 : totalPages);
    const goToLastPage = () => setCurrentPage(totalPages);

    return (
        <div className="fmaincontainer">
            {/* <!-- tab(還沒加回去) --> */}
            {/* <!-- 關鍵字搜尋 --> */}
            <div className="fsearch">
                <input type="text" placeholder="請輸入關鍵字" value={query} onChange={(e) => setQuery(e.target.value)} />
                <button onClick={handleAddKeyword} disabled={isLoading || !query}>
                    <img src="/img/Search.png" alt="fsearch" />
                </button>
            </div>
            {/* 顯示已添加的關鍵字 */}
            <div>
                {keywords.map((keyword, index) => (
                    <div key={index} style={{ display: 'inline-block', margin: '5px', padding: '5px', border: '1px solid #ccc', borderRadius: '5px' }}>
                        {keyword}
                        <button onClick={() => handleRemoveKeyword(keyword)} style={{ marginLeft: '10px' }}>X</button>
                    </div>
                ))}
            </div>
            {/* <!-- order --> */}
            <div className="forder">
                {/* 顯示過濾後的數據數量 */}
                <p style={{ flex: 5 }}>目前查詢到 {filteredData.length} 筆資料</p>
                <button onClick={handleSortToggle}>{sortOrder === 'asc' ? '更新時間' : '更新時間'}</button>
                <a href="#">點閱率最高</a>
                <a href="#">企業評價最高</a>
                <a href="#">應徵人數</a>
                {/* 每頁顯示數據數量選項 */}
                <p>

                    <select value={itemsPerPage} onChange={handleItemsPerPageChange}>
                        <option value={5}>顯示5筆資料</option>
                        <option value={10}>顯示10筆資料</option>
                        <option value={20}>顯示20筆資料</option>
                    </select>
                </p>
            </div>
            {/* 顯示加載狀態或數據列表以及案件內容 */}
            {isLoading ? (
                <div>加載中...</div>
            ) : (
                currentItems.map((item, index) => (
                    <DataList
                        item={item}
                        timeDifference={timeDifference}
                        key={item.pid}
                    />
                ))
            )}
            <div className="ftab">
                {/* 回到最前頁 */}
                <button onClick={goToFirstPage} disabled={currentPage === 1}>
                    <img src="/img/left.png" alt="First Page" />
                </button>

                {/* 往前一頁 */}
                <button className="fleftnext" onClick={goToPreviousPage} disabled={currentPage === 1}>
                    <img src="/img/leftnext.png" alt="Previous Page" />
                    <span>上一頁</span>
                </button>

                {/* 分頁按鈕 */}
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

                {/* 往後一頁 */}
                <button className="frightnext" onClick={goToNextPage} disabled={currentPage === totalPages}>
                    <span>下一頁</span>
                    <img src="/img/rightnext.png" alt="Next Page" />
                </button>

                {/* 最後一頁 */}
                <button onClick={goToLastPage} disabled={currentPage === totalPages}>
                    <img src="/img/right.png" alt="Last Page" />
                </button>
            </div>
        </div>
    );
};

export default Maincontainer;
