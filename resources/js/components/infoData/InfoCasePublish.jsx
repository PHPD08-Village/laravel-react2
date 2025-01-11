import React from 'react'
import Floatingbuttons from '../allpage/Floatingbuttons'
import InfoSideBar from './InfoSideBar';
import InfoBar from './InfoBar';

function InfoCasePublish() {
  return (
    <div className="ifcontainer">
         {/* <!-- 標題快捷列 --> */}
                <h3 className="infoTitle">
                    <img src="https://github.com/PHPD08-Village/PHPD08-Team/blob/main/img/Icon/Start.png?raw=true"
                        alt="startIcon"/>
                    <span>首頁</span>
                    <span>&gt;</span>
                    <span>我是案主</span>
                    <span>&gt;</span>
                    <span>案件管理</span>
                    <span>&gt;</span>
                    <span>進行中案件</span>
                    <span>&gt;</span>
                    <span>刊登中</span>
                </h3>

                {/* <!-- 資料框框 --> */}
                <div className="data">
                    {/* <!--左側欄位  --> */}
                    <InfoSideBar />
                    {/* <!-- 右側欄位 --> */}
                    <div className="rightCol">
                        <InfoBar/>
                        <div className="rightColThree">
                            <h3>
                                刊登中
                            </h3>
                            <hr/>
                            <table>
                                <thead className="caseTitle">
                                  <tr>
                                    <th>案件標題</th>
                                    <th>預算金額</th>
                                    <th>刊登日期</th>
                                    <th>查看更多</th>
                                    <th>刪除</th>
                                  </tr>
                                </thead>
                                <tbody className="caseItem">
                                  <tr>
                                    <td>拉拉漢堡網頁設計</td>
                                    <td>$35000</td>
                                    <td>2024.12.11</td>
                                    <td className="edit">查看更多</td>
                                    <td className="delete">刪除</td>
                                  </tr>
                                  <tr>
                                    <td>拉拉漢堡手機APP設計</td>
                                    <td>$30000</td>
                                    <td>2024.12.15</td>
                                    <td className="edit">查看更多</td>
                                    <td className="delete">刪除</td>
                                  </tr>
                                  <tr>
                                    <td>網站購物車設計</td>
                                    <td>$25000</td>
                                    <td>2024.12.21</td>
                                    <td className="edit">查看更多</td>
                                    <td className="delete">刪除</td>
                                  </tr>
                                </tbody>
                              </table>
                        </div>
                    </div>
                </div>
                <Floatingbuttons />
    </div>
  )
}

export default InfoCasePublish