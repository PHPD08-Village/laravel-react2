import React from 'react'

const FavoriteCass = () => {
    return (
        <div id="saved-jobs-content" className="info-box">
            <h3>
                已收藏案件
                <button type="button" className="delete-btn">刪除</button>
            </h3>
            <hr />
            <table className="saved-jobs-table">
                <thead>
                    <tr>
                        <th><input type="checkbox" id="select-all" /></th>
                        <th>名稱</th>
                        <th>所在地</th>
                        <th>預算</th>
                        <th>瀏覽數</th>
                        <th>收藏日期</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><input type="checkbox" className="job-checkbox" /></td>
                        <td>人名1</td>
                        <td>地區1</td>
                        <td>10000</td>
                        <td>300</td>
                        <td>2023/12/01</td>
                    </tr>
                    <tr>
                        <td><input type="checkbox" className="job-checkbox" /></td>
                        <td>人名2</td>
                        <td>地區2</td>
                        <td>20000</td>
                        <td>500</td>
                        <td>2023/12/02</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default FavoriteCass