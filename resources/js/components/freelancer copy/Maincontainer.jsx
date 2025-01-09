import React, { useEffect, useState, forwardRef, useImperativeHandle } from 'react';
import moment from 'moment';

import { fetchData } from '../../JS or jQuery/fetchdata'
import DataList from './DataList';

const Maincontainer = forwardRef(({ selectedStars }, ref) => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [error, setError] = useState(null);
    const [query, setQuery] = useState('');
    const [keywords, setKeywords] = useState([]);
    const [sortOrder, setSortOrder] = useState('desc');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [budgetRange, setBudgetRange] = useState([0, 1000000]);

    useImperativeHandle(ref, () => ({
        addKeywordFromOutside(keyword) {
            if (!keywords.includes(keyword)) {
                setKeywords([...keywords, keyword]);
            }
        }
    }));

    useEffect(() => {
        fetchData(setIsLoading, setData, setFilteredData, setError);
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

    const handleBudgetChange = (minBudget, maxBudget) => {
        setBudgetRange([minBudget, maxBudget]);
    };

    useEffect(() => {
        let result = data.filter(item =>
            keywords.every(keyword =>
                item.title.toLowerCase().includes(keyword.toLowerCase()) ||
                item.details.toLowerCase().includes(keyword.toLowerCase()) ||
                item.require_code.toLowerCase().includes(keyword.toLowerCase())
            )
        );

        // 星星篩選
        if (selectedStars && selectedStars.length > 0) {
            result = result.filter(item => {
                const rating = parseFloat(item.averating);
                return selectedStars.some(star => rating >= star && rating < star + 0.9);
            });
        }

        // 預算篩選
        const [minBudget, maxBudget] = budgetRange;
        result = result.filter(item => {
            const budget = Math.floor(item.budget);
            return budget >= minBudget && budget <= maxBudget;
        });

        // 排序數據
        result.sort((a, b) => {
            const timeA = moment(a.updated_at);
            const timeB = moment(b.updated_at);

            return sortOrder === 'asc' ? timeA - timeB : timeB - timeA;
        });

        setFilteredData(result);
    }, [keywords, data, sortOrder, selectedStars, budgetRange]);

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
    const goToFirstPage = () => setCurrentPage(1);
    const goToPreviousPage = () => setCurrentPage(currentPage > 1 ? currentPage - 1 : 1);
    const goToNextPage = () => setCurrentPage(currentPage < totalPages ? currentPage + 1 : totalPages);
    const goToLastPage = () => setCurrentPage(totalPages);
    
    
    return (
        <div className="fmaincontainer">
            <div className="fsearch">
                <input type="text" placeholder="請輸入關鍵字" value={query} onChange={(e) => setQuery(e.target.value)} />
                <button onClick={handleAddKeyword} disabled={isLoading || !query}>
                    <img src="/img/Search.png" alt="fsearch" />
                </button>
            </div>
            <div>
                {keywords.map((keyword, index) => (
                    <div key={index} style={{ display: 'inline-block', margin: '5px', padding: '5px', border: '1px solid #ccc', borderRadius: '5px' }}>
                        {keyword}
                        <button onClick={() => handleRemoveKeyword(keyword)} style={{ marginLeft: '10px' }}>X</button>
                    </div>
                ))}
            </div>
            <div className="forder">
                <p style={{ flex: 5 }}>目前查詢到 {filteredData.length} 筆資料</p>
                <button onClick={handleSortToggle}>{sortOrder === 'asc' ? '更新時間' : '更新時間'}</button>
                <a href="#">點閱率最高</a>
                <a href="#">企業評價最高</a>
                <a href="#">應徵人數</a>
                <p>
                    <select value={itemsPerPage} onChange={handleItemsPerPageChange}>
                        <option value={5}>顯示5筆資料</option>
                        <option value={10}>顯示10筆資料</option>
                        <option value={20}>顯示20筆資料</option>
                    </select>
                </p>
            </div>
            {isLoading ? (
                <div>加載中...</div>
            ) : (
                currentItems.map((item, index) => (
                    <DataList
                        item={item}
                        timeDifference={timeDifference}
                        key={item.pid}
                        className={`${index === 0 ? 'first-item-background' : ''}`}  // 根據條件動態添加 className
                    />
                ))
            )}
            <div className="ftab">
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
            </div>
        </div>
    );
});

export default Maincontainer;
