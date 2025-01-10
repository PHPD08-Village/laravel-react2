import React from 'react'

const Myservice = () => {
    return (
        <div id="services-content" className="info-box">
            <h3>
                已刊登服務
            </h3>
            <hr />
            <table className="services-table">
                <thead>
                    <tr>
                        <th><input type="checkbox" id="services-select-all" /></th>
                        <th>服務標題</th>
                        <th>所在地</th>
                        <th>瀏覽數</th>
                        <th>刊登日期</th>
                        <th>狀態</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><input type="checkbox" className="service-checkbox" /></td>
                        <td>服務1</td>
                        <td>北部</td>
                        <td>300</td>
                        <td>2023/12/01</td>
                        <td>
                            <label className="switch">
                                <input type="checkbox" className="status-toggle" />
                                <span className="slider round"></span>
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td><input type="checkbox" className="service-checkbox" /></td>
                        <td>服務2</td>
                        <td>中部</td>
                        <td>150</td>
                        <td>2023/12/02</td>
                        <td>
                            <label className="switch">
                                <input type="checkbox" className="status-toggle" />
                                <span className="slider round"></span>
                            </label>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Myservice