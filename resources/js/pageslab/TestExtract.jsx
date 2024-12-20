import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../css/extract.css'

const TestExtract = () => {
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
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>案件名稱</th>
                        <th>聯絡人</th>
                        <th>案件完成時間</th>
                        <th>案件預算</th>
                        <th>地點</th>
                        <th>說明內容</th>
                        <th>需求語言</th>
                        <th>更新時間</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.contact_name}</td>
                            <td>{item.completion_time}</td>
                            <td>{item.location}</td>
                            <td>{item.budget}</td>
                            <td>{item.details}</td>
                            <td>{item.require_code}</td>
                            <td>{new Date(item.updated_at).toLocaleString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TestExtract;
