// freelancer2/AppProvider.jsx
import React, { createContext, useState, useEffect, useCallback, useImperativeHandle } from 'react';
import axios from 'axios';

export const AppfreelancerContext = createContext();

const AppProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false); // 新增加載狀態
    const [results, setResults] = useState([]);
    const [filteredResults, setFilteredResults] = useState([]);
    const [keywords, setKeywords] = useState([]);
    const [buttonKeywords, setButtonKeywords] = useState([]);
    const [sortingCriteria, setSortingCriteria] = useState({ criteria: 'updated_at', order: 'asc' });
    const [itemsPerPage, setItemsPerPage] = useState(10); // 默認每頁顯示 10 條
    const [currentPage, setCurrentPage] = useState(1); // 默認當前頁面為第1頁
    const [totalPages, setTotalPages] = useState(1); // 默認總頁數為1
    const [totalResultsCount, setTotalResultsCount] = useState(0); // 讀取數據筆數
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true); // 設置加載狀態為true
            try {
                const response = await axios.get('/get-userinfo-publish');
                let data = response.data;
                setResults(data);
                setTotalPages(Math.ceil(data.length / itemsPerPage)); // 計算總頁數
                setFilteredResults(data.slice(0, itemsPerPage)); // 初始化時顯示第一頁數據
                setTotalResultsCount(data.length); // 計算數據總數
            } catch (error) {
                setError('Error fetching data');
                console.error('Error fetching data', error);
            }
            setIsLoading(false); // 設置加載狀態為false
        };
        fetchData();
    }, [itemsPerPage]);

    useEffect(() => {
        if (results.length > 0) {
            filterData([...keywords, ...buttonKeywords]);
        }
    }, [results, keywords, buttonKeywords, sortingCriteria, itemsPerPage, currentPage]);

    useEffect(() => {
        // 當所有篩選條件被移除，重新載入初始數據
        if (keywords.length === 0 && buttonKeywords.length === 0) {
            setFilteredResults(results.slice(0, itemsPerPage));
            setTotalPages(Math.ceil(results.length / itemsPerPage));
            setCurrentPage(1);
        } else {
            filterData([...keywords, ...buttonKeywords]);
        }
    }, [keywords, buttonKeywords]);

    const filterData = useCallback((allKeywords) => {
        // console.log('All keywords:', allKeywords);
        setIsLoading(true); // 設置加載狀態為true

        // 如果沒有關鍵字，顯示所有結果
        let filtered = allKeywords.length === 0 ? results : results.filter(result => {
            const matches = allKeywords.some(keyword => {
                if (keyword.startsWith('budget-')) {
                    const [_, minBudget, maxBudget] = keyword.split('-').map(Number);
                    return result.budget >= minBudget && result.budget <= maxBudget;
                }
                if (keyword.includes('-')) {
                    const [min, max] = keyword.split('-').map(Number);
                    return result.averating >= min && (max ? result.averating <= max : true);
                }
                return result.require_code.includes(keyword) ||
                       result.title.toLowerCase().includes(keyword.toLowerCase()) ||
                       result.details.toLowerCase().includes(keyword.toLowerCase());
            });

            // console.log('Result matches:', matches, 'for result:', result);

            return matches;
        });
        

        // console.log('Filtered results:', filtered); // 添加調試輸出

        // 排序邏輯
        const { criteria, order } = sortingCriteria;

        // console.log('Sorting by:', criteria, 'Order:', order);

        filtered = filtered.sort((a, b) => {
            const aValue = criteria === 'averating' || criteria === 'budget' ? parseFloat(a[criteria]) : a[criteria];
            const bValue = criteria === 'averating' || criteria === 'budget' ? parseFloat(b[criteria]) : b[criteria];

            if (aValue === undefined || bValue === undefined) {
                console.error('Undefined criteria:', criteria, 'for result:', a, b);
                return 0;
            }
            return order === 'asc' ? (aValue > bValue ? 1 : -1) : (aValue < bValue ? 1 : -1);
        });

        // console.log('Filtered and sorted results:', filtered);

        // 計算總頁數
        const newTotalPages = Math.ceil(filtered.length / itemsPerPage);
        setTotalPages(newTotalPages);

        // 確保當前頁面不超過總頁數
        const newCurrentPage = Math.min(currentPage, newTotalPages);
        setCurrentPage(newCurrentPage);

        const startIdx = (newCurrentPage - 1) * itemsPerPage;
        const endIdx = itemsPerPage === Infinity ? filtered.length : startIdx + itemsPerPage;
        const newFilteredResults = filtered.slice(startIdx, endIdx);
        setFilteredResults(newFilteredResults); // 根據當前頁面和每頁顯示條數截取結果
        setTotalResultsCount(filtered.length); // 更新數據數量

        setIsLoading(false); // 設置加載狀態為false

        // console.log('Updated filteredResults:', newFilteredResults); // 添加調試輸出
    }, [results, sortingCriteria, itemsPerPage, currentPage]);
    

    const removeKeyword = (index) => {
        const newKeywords = keywords.filter((_, i) => i !== index);
        setKeywords(newKeywords);
    
        if (newKeywords.length === 0 && buttonKeywords.length === 0 && filteredResults.length === 0) {
            // 如果所有過濾條件都已移除且當前無篩選結果，重新載入初始數據
            setFilteredResults(results.slice(0, itemsPerPage));
            setTotalPages(Math.ceil(results.length / itemsPerPage));
            setCurrentPage(1);
        } else {
            filterData([...newKeywords, ...buttonKeywords]);
        }
    };
    
    const removeButtonKeyword = (index) => {
        const newButtonKeywords = buttonKeywords.filter((_, i) => i !== index);
        setButtonKeywords(newButtonKeywords);
    
        if (keywords.length === 0 && newButtonKeywords.length === 0 && filteredResults.length === 0) {
            // 如果所有過濾條件都已移除且當前無篩選結果，重新載入初始數據
            setFilteredResults(results.slice(0, itemsPerPage));
            setTotalPages(Math.ceil(results.length / itemsPerPage));
            setCurrentPage(1);
        } else {
            filterData([...keywords, ...newButtonKeywords]);
        }
    };
    
    

    return (
        <AppfreelancerContext.Provider value={{
            filteredResults, keywords, buttonKeywords, setKeywords, setButtonKeywords,
            sortingCriteria, setSortingCriteria, itemsPerPage, setItemsPerPage, 
            currentPage, setCurrentPage, totalPages, removeKeyword, removeButtonKeyword, filterData, isLoading, error, totalResultsCount
        }}>
            {children}
        </AppfreelancerContext.Provider>
    );
};

export default AppProvider;
