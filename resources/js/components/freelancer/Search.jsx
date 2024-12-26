import React, { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import DataList from './DataList';

const Searchbox = () => {
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
                setData(Array.isArray(response.data) ? response.data : []);
                setFilteredData(Array.isArray(response.data) ? response.data : []); // 初始化時顯示所有數據
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

    return (
        <>
            {/* 關鍵字輸入框和添加按鈕 */}
            <div>
                <input type="text" placeholder="請輸入關鍵字" value={query} onChange={(e) => setQuery(e.target.value)} />
                <button onClick={handleAddKeyword} disabled={isLoading || !query}>
                    添加關鍵字
                </button>
                {error && <div style={{ color: 'red' }}>{error}</div>}
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
            {/* 顯示過濾後的數據數量 */}
            <div>
                目前查詢到 {filteredData.length} 筆資料
            </div>
            {/* 排序按鈕 */}
            <button onClick={handleSortToggle}>
                {sortOrder === 'asc' ? '由小到大' : '由大到小'} 排序
            </button>
            {/* 每頁顯示數據數量選項 */}
            <label>
                每頁顯示:
                <select value={itemsPerPage} onChange={handleItemsPerPageChange}>
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                </select>
            </label>
            {/* 顯示加載狀態或數據列表 */}
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
            {/* 分頁按鈕 */}
            <div>
                {Array.from({ length: totalPages }, (_, index) => (
                    <button key={index + 1} onClick={() => setCurrentPage(index + 1)} disabled={currentPage === index + 1}>
                        {index + 1}
                    </button>
                ))}
            </div>
        </>
    );
};

export default Searchbox;
