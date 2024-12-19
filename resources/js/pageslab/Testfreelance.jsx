import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Testfreelance = () => {
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
    );
};


export default Testfreelance