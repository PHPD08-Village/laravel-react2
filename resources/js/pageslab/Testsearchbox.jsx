import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';

const Searchbox = () => {
    const [data, setData] = useState([]);
    const [query, setQuery] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [keywords, setKeywords] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [sortOrder, setSortOrder] = useState('desc'); // 初始排序為從大到小
    const [currentPage, setCurrentPage] = useState(1); // 當前頁面
    const [itemsPerPage, setItemsPerPage] = useState(10); // 每頁顯示的資料數量

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

        // 排序
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

    const handleSortToggle = () => {
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    };

    const handleItemsPerPageChange = (e) => {
        setItemsPerPage(Number(e.target.value));
        setCurrentPage(1); // 重置到第 1 頁
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

    // 分頁邏輯
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    return (
        <>
            <div>
                <input
                    type="text"
                    placeholder="請輸入關鍵字"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
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
                目前共有 {filteredData.length} 筆資料
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
                    <div className={`fcontent ${index === 0 ? 'one' : ''}`} key={item.pid}>
                        <div className="fcontent1">
                            <Link to="/detail" className='link'>
                                <div className="fhot"><img src="https://github.com/PHPD08-Village/PHPD08-Team/blob/main/img/Icon/Crown.png?raw=true" alt="hot" /></div>
                                <div style={{ flex: 1 }}></div>
                                <div className="fcompanyphoto">
                                    <img src={item.headshot} alt={`${item.username}'s Headshot`} />
                                </div>
                                <div className="fcompanyname">
                                    <h4 style={{ margin: '5px' }}>{item.username}</h4>
                                </div>
                                <div className="fcompanystar">
                                    <div></div>
                                    <div className="fgreen">
                                        <img src="/img/Green Circle.png" alt="green" />
                                    </div>
                                    <div className="fstar">
                                        <img src="/img/Star 5.png" alt="star" />
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="fcontent2">
                            <Link to="/detail" className='link'>
                                <div className="ftitle">
                                    <h1>{item.title}</h1>
                                </div>
                                <div className="fset">
                                    <div className="fdate">
                                        <h4>完成時間：{moment(item.completion_time).format('YYYY-MM-DD')}</h4>
                                    </div>
                                    <div className="fcaseprice">
                                        <h4>案件預算：${Math.floor(item.budget)}</h4> {/* 使用 Math.floor 去除小數部分 */}
                                    </div>
                                </div>
                                <div className="flocation">地區：{item.location}</div>
                                <div className="fcasecontent">
                                    描述內容{item.details}
                                </div>
                                <div className="frequire">
                                    <p style={{ margin: '16px 4px' }}>需求語言：</p>
                                    <div>
                                        <p>{item.require_code}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="fcontentnew">
                        </div>
                        <div className="fcontent3">
                            <div className="ftime">{timeDifference(item.updated_at)}</div>
                            <div className="fcontent3btn">
                                <a className="fcollect" href="#">收藏</a>
                                <a className="ftakecase" href="#">接案</a>
                            </div>
                            <div className="fpeople">0~5 人爭取中</div>
                            <div className="ffrequency">7777 瀏覽次數</div>
                            <div style={{ flex: 1.5 }}></div>
                        </div>
                    </div>
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
};

export default Searchbox;
