import React from 'react'
import Floatingbuttons from '../allpage/Floatingbuttons'
import InfoSideBar from './InfoSideBar';
import InfoBar from './InfoBar';

function InfoCase() {
  return (
    <div className="ifcontainer">
         {/* <!-- 標題快捷列 --> */}
                <h3 class="infoTitle">
                    <img src="https://github.com/PHPD08-Village/PHPD08-Team/blob/main/img/Icon/Start.png?raw=true"
                        alt="startIcon"/>
                    <span>首頁</span>
                    <span>&gt;</span>
                    <span>我是案主</span>
                    <span>&gt;</span>
                    <span>案件管理</span>
                    <span>&gt;</span>
                    <span>尚未開通案件</span>
                    <span>&gt;</span>
                    <span>審核中</span>
                </h3>

                {/* <!-- 資料框框 --> */}
                <div class="data">
                    {/* <!--左側欄位  --> */}
                    <InfoSideBar />
                    {/* <!-- 右側欄位 --> */}
                    <div class="rightCol">
                        <InfoBar/>
                        <div class="rightColThree">
                            <h3>審核中</h3>
                            <hr/>
                            <table>
                                <thead class="caseTitle">
                                  <tr>
                                    <th>案件標題</th>
                                    <th>預算金額</th>
                                    <th>案件狀態</th>
                                    <th>提交日期</th>
                                    <th>編輯</th>
                                    <th>刪除</th>
                                  </tr>
                                </thead>
                                <tbody class="caseItem">
                                  <tr>
                                    <td>快樂修狗網頁獨立設計</td>
                                    <td>$5000</td>
                                    <td class="status">審核中</td>
                                    <td>2024.10.11</td>
                                    <td class="edit">編輯</td>
                                    <td class="delete">刪除</td>
                                  </tr>
                                  <tr>
                                    <td>快樂修狗網頁獨立設計</td>
                                    <td>$5000</td>
                                    <td class="status">審核中</td>
                                    <td>2024.10.11</td>
                                    <td class="edit">編輯</td>
                                    <td class="delete">刪除</td>
                                  </tr>
                                  <tr>
                                    <td>快樂修狗網頁獨立設計</td>
                                    <td>$5000</td>
                                    <td class="status">審核中</td>
                                    <td>2024.10.11</td>
                                    <td class="edit">編輯</td>
                                    <td class="delete">刪除</td>
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

export default InfoCase