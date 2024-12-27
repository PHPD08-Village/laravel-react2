import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Testfreelance from './Testfreelance'

const Testfree = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/get-publishes'); // 確保 API 路徑正確
                console.log('Response data:', response.data);
                setData(Array.isArray(response.data) ? response.data : []);
            } catch (error) {
                console.error('Error fetching data', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="fmaincontainer">
            {/* <!-- content --> */}
            <div>
                {/* <!-- contentone --> */}
                <div className="fcontentone">
                    <div className="fcontent1">
                        <a href="/detail">
                            <div className="fhot"><img src="https://github.com/PHPD08-Village/PHPD08-Team/blob/main/img/Icon/Crown.png?raw=true" alt="hot" /></div>
                            <div style={{ flex: 1 }}></div>
                            <div className="fcompanyphoto">
                                <img src="/img/company1.png" alt="company1" />
                            </div>
                            <div className="fcompanyname">
                                <h4 style={{ margin: '5px' }}>快樂狗勾有限公司</h4>
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
                        </a>
                    </div>
                    <div className="fcontent2">
                        {data.map((item) => (
                            <a href="/detail" key={item.id}>
                                {/* <td>{item.contact_name}</td> */}
                                {/* <td>{new Date(item.updated_at).toLocaleString()}</td> */}
                                <div className="ftitle">
                                    <h1>{item.title}</h1>
                                </div>
                                <div className="fset">
                                    <div className="fdate">
                                        <h4>完成時間：{item.completion_time}</h4>
                                    </div>
                                    <div className="fcaseprice">
                                        <h4>案件預算：${item.budget}</h4>
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
                            </a>
                        ))}
                    </div>
                    <div className="fcontentnew">
                        <img src="https://github.com/PHPD08-Village/PHPD08-Team/blob/main/img/Icon/New.png?raw=true" alt="new" />
                    </div>
                    <div className="fcontent3">
                        <div className="ftime">3分鐘前更新</div>
                        <div className="fcontent3btn">
                            <a className="fcollect" href="#">收藏</a>
                            <a className="ftakecase" href="#">接案</a>
                        </div>
                        <div className="fpeople">0~5 人爭取中</div>
                        <div className="ffrequency">7777 瀏覽次數</div>
                        <div style={{ flex: 1.5 }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Testfree