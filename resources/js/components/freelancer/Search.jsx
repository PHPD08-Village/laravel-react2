import React, { useEffect, useState, forwardRef, useImperativeHandle } from 'react';
import axios from 'axios';
import moment from 'moment';
import DataList from './DataList';

const Searchbox = forwardRef((props, ref) => {
    // 定義狀態變數
    const [data, setData] = useState([]);
    const [query, setQuery] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [keywords, setKeywords] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [sortOrder, setSortOrder] = useState('desc');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);

    // 使用 ref 來暴露添加關鍵字的方法
    useImperativeHandle(ref, () => ({
        addKeywordFromOutside(keyword) {
            if (!keywords.includes(keyword)) {
                setKeywords([...keywords, keyword]);
            }
        }
    }));

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get('/get-userinfo-publish');
                setData(Array.isArray(response.data) ? response.data : []);
                setFilteredData(Array.isArray(response.data) ? response.data : []);
            } catch (error) {
                setError('Error fetching data');
                console.error('Error fetching data', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleAddKeyword = () => {
        if (query && !keywords.includes(query)) {
            setKeywords([...keywords, query]);
            setQuery('');
        }
    };

    const handleRemoveKeyword = (keyword) => {
        setKeywords(keywords.filter(k => k !== keyword));
    };

    useEffect(() => {
        let result = data.filter(item =>
            keywords.every(keyword =>
                item.title.toLowerCase().includes(keyword.toLowerCase()) ||
                item.details.toLowerCase().includes(keyword.toLowerCase())
            )
        );

        result.sort((a, b) => {
            const timeA = moment(a.updated_at);
            const timeB = moment(b.updated_at);

            return sortOrder === 'asc' ? timeA - timeB : timeB - timeA;
        });

        setFilteredData(result);
    }, [keywords, data, sortOrder]);

    const handleSortToggle = () => {
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    };

    const handleItemsPerPageChange = (e) => {
        setItemsPerPage(Number(e.target.value));
        setCurrentPage(1);
    };

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

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    return (
        <>
            <div>
                <input type="text" placeholder="請輸入關鍵字" value={query} onChange={(e) => setQuery(e.target.value)} />
                <button onClick={handleAddKeyword} disabled={isLoading || !query}>
                    添加關鍵字
                </button>
                {error && <div style={{ color: 'red' }}>{error}</div>}
            </div>
            <div>
                {keywords.map((keyword, index) => (
                    <div key={index} style={{ display: 'inline-block', margin: '5px', padding: '5px', border: '1px solid #ccc', borderRadius: '5px' }}>
                        {keyword}
                        <button onClick={() => handleRemoveKeyword(keyword)} style={{ marginLeft: '10px' }}>X</button>
                    </div>
                ))}
            </div>
            <div>
                目前查詢到 {filteredData.length} 筆資料
            </div>
            <button onClick={handleSortToggle}>
                {sortOrder === 'asc' ? '由小到大' : '由大到小'} 排序
            </button>
            <label>
                每頁顯示:
                <select value={itemsPerPage} onChange={handleItemsPerPageChange}>
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                </select>
            </label>
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
            <div>
                {Array.from({ length: totalPages }, (_, index) => (
                    <button key={index + 1} onClick={() => setCurrentPage(index + 1)} disabled={currentPage === index + 1}>
                        {index + 1}
                    </button>
                ))}
            </div>
        </>
    );
});

export default Searchbox;
