// freelancer2/components/SortingOptions.jsx
import React, { useContext, useEffect, useState } from 'react';
import { AppfreelancerContext } from '../../AppProvider';
import { arrowUpOutline, arrowDownOutline } from 'ionicons/icons';
import { IonIcon } from '@ionic/react';

const SortingOptions = () => {
    const { setSortingCriteria, setItemsPerPage, setKeywords, setButtonKeywords, setCurrentPage, totalResultsCount } = useContext(AppfreelancerContext);
    const [order, setOrder] = useState('asc');
    const [activeSort, setActiveSort] = useState(null);

    useEffect(() => {
        setItemsPerPage(10); // 在初始渲染時設置預設值
    }, [setItemsPerPage]);

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
                <label htmlFor="items-per-page-select">每頁顯示</label>
                <select id="items-per-page-select" defaultValue="10" onChange={handleItemsPerPageChange}>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="all">全部</option>
                </select>
                <label htmlFor="items-per-page-select">筆資料</label>
            </div>
        </div>
    );
};

export default SortingOptions;
