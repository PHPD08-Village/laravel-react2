// freelancer2/components/SortingOptions.jsx
import React, { useContext, useEffect, useState } from 'react';
import { FreelancerContext } from '../../FreelancerProvider';
import { arrowUpOutline, arrowDownOutline } from 'ionicons/icons';
import { IonIcon } from '@ionic/react';

const SortingOptions = () => {
    const { setSortingCriteria, setItemsPerPage, setKeywords, setButtonKeywords, setCurrentPage, totalResultsCount } = useContext(FreelancerContext);
    const [order, setOrder] = useState('asc');
    const [activeSort, setActiveSort] = useState(null);

    
    useEffect(() => {
        setItemsPerPage(10); // 在初始渲染時設置預設值
        setSortingCriteria({ criteria: 'updated_at', order: 'desc' }); // 預設排序標準為 updated_at，順序為 desc
        // setActiveSort('updated_at'); // 標記 activeSort 為預設排序標準
        setOrder('desc'); // 預設排序順序為 desc
    }, [setItemsPerPage, setSortingCriteria]);

    const handleSort = (criteria) => {
        setSortingCriteria({ criteria, order });
        setActiveSort(criteria); // 保存當前排序標準
        // 切換排序順序
        const newOrder = order === 'asc' ? 'desc' : 'asc';
        setOrder(newOrder);
    };

    const handleItemsPerPageChange = (e) => {
        const items = e.target.value === 'all' ? Infinity : Number(e.target.value);
        setItemsPerPage(items);
        setKeywords([]); // 清空關鍵字篩選
        setButtonKeywords([]); // 清空按鈕關鍵字篩選
        setCurrentPage(1); // 重置當前頁面為第1頁
    };

    return (
        <div className="forder">
            <p>排序方式</p>
            <button
                onClick={() => handleSort('updated_at')}
                style={{ color: activeSort === 'updated_at' ? (order === 'asc' ? 'red' : 'darkblue') : '#354052' }}
            >
                更新時間
                {activeSort === 'updated_at' && (
                    <IonIcon icon={order === 'asc' ? arrowUpOutline : arrowDownOutline} />
                )}
            </button>
            <button
                onClick={() => handleSort('click_count')}
                style={{ color: activeSort === 'click_count' ? (order === 'asc' ? 'red' : 'darkblue') : '#354052' }}
            >
                瀏覽次數
                {activeSort === 'click_count' && (
                    <IonIcon icon={order === 'asc' ? arrowUpOutline : arrowDownOutline} />
                )}
            </button>
            <button
                onClick={() => handleSort('averating')}
                style={{ color: activeSort === 'averating' ? (order === 'asc' ? 'red' : 'darkblue') : '#354052' }}
            >
                評價
                {activeSort === 'averating' && (
                    <IonIcon icon={order === 'asc' ? arrowUpOutline : arrowDownOutline} />
                )}
            </button>
            <button
                onClick={() => handleSort('budget')}
                style={{ color: activeSort === 'budget' ? (order === 'asc' ? 'red' : 'darkblue') : '#354052' }}
            >
                預算
                {activeSort === 'budget' && (
                    <IonIcon icon={order === 'asc' ? arrowUpOutline : arrowDownOutline} />
                )}
            </button>
            <div>
                <label htmlFor="items-per-page-select"></label>
                <select id="items-per-page-select" defaultValue="10" onChange={handleItemsPerPageChange} style={{width:'180px'}}>
                    <option value="5">每頁顯示5筆資料</option>
                    <option value="10">每頁顯示10筆資料</option>
                    <option value="20">每頁顯示20筆資料</option>
                    <option value="all">顯示全部資料</option>
                </select>
                <label htmlFor="items-per-page-select"></label>
            </div>
        </div>
    );
};

export default SortingOptions;
