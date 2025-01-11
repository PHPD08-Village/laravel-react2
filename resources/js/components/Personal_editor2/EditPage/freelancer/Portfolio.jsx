import React from 'react'

const Portfolio = () => {
    return (
        <>
            <div id="portfolio-content" className="info-box">
                <h3>作品專區</h3>
                <hr />
                <table className="portfolio-table">
                    <thead>
                        <tr>
                            <th>作品圖片</th>
                            <th colSpan="2">作品資訊</th>{/* <!-- 合併網址與描述 --> */}
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody id="portfolio-rows">
                        {/* <!-- 動態生成作品列 --> */}
                    </tbody>
                </table>
                <div className="portfolio-actions">
                    <button className="add-btn" id="add-portfolio-row">新增作品</button>
                    <div className="pagination">
                        <button className="page-btn">1</button>
                        <button className="page-btn">2</button>
                        <button className="page-btn">3</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio