import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; // axios 會自動處理了 JSON 解析

const Testfreelance = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/get-publishes'); // 確保 API 路徑正確
                console.log('Response data:', response.data);
                setData(Array.isArray(response.data) ? response.data : []);
                // Array.isArray() 是一個內建的方法，用於檢測值是否為數組。如果是數組，則返回 true；否則返回 false
                // true，則返回 response.data。如果為 false，則返回空數組 []
                // 這行代碼確保你的 data 狀態總是被設置為數組類型，這對於後續處理（例如映射）是很重要的。如果 response.data 不是數組，代碼會將 data 設置為空數組，避免數據處理時產生錯誤。
            } catch (error) {
                console.error('Error fetching data', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="fcontent2">
            {data.map((item) => (
                // React 需要每個子元素有一個唯一的 key 屬性，以便在更新列表時能夠唯一識別每個子元素。如果 key 不唯一，可能會導致列表項目在更新時被重複顯示或遺漏，這樣的行為是不被支持的
                <Link to="/detail" key={item.pid}> 
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
                </Link>
            ))}
        </div>
    );
};


export default Testfreelance