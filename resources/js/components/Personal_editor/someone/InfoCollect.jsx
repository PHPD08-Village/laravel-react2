import React from 'react'
import Floatingbuttons from '../allpage/Floatingbuttons';
import InfoSideBar from './InfoSideBar';
import InfoBar from './InfoBar';

function InfoCollect() {
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
                    <span>人才管理</span>
                    <span>&gt;</span>
                    <span>已收藏人才</span>
                </h3>

                {/* <!-- 資料框框 --> */}
                <div className="data">
                    {/* <!--左側欄位  --> */}
                    <InfoSideBar />
                    {/* <!-- 右側欄位 --> */}
                    <div className="corightCol">
                        <InfoBar/>
                        <div className="corightColTwo">
                            <h3>
                                已收藏人才
                                <button className="codeleteBtn">刪除</button>
                            </h3>
                            <hr/>
                            <table>
                                <thead className="cocaseTitle">
                                  <tr>
                                    <th><input type="checkbox" name="" id=""/></th>
                                    <th>人才名稱</th>
                                    <th>所在地</th>
                                    <th>接案經驗</th>
                                    <th>作品</th>
                                    <th>瀏覽數</th>
                                    <th>收藏日期</th>
                                  </tr>
                                </thead>
                                <tbody className="cocaseItem">
                                  <tr>
                                    <td><input type="checkbox" name="" id=""/></td>
                                    <td>王曉名</td>
                                    <td>台中市</td>
                                    <td>3年</td>
                                    <td  className="costatus">10</td>
                                    <td className="coedit">666</td>
                                    <td className="codelete">2024.10.01</td>
                                  </tr>
                                  <tr>
                                    <td><input type="checkbox" name="" id=""/></td>
                                    <td>王曉名</td>
                                    <td>台中市</td>
                                    <td>3年</td>
                                    <td  className="costatus">10</td>
                                    <td className="coedit">666</td>
                                    <td className="codelete">2024.10.01</td>
                                  </tr>
                                  <tr>
                                    <td><input type="checkbox" name="" id=""/></td>
                                    <td>王曉名</td>
                                    <td>台中市</td>
                                    <td>3年</td>
                                    <td  className="costatus">10</td>
                                    <td className="coedit">666</td>
                                    <td className="codelete">2024.10.01</td>
                                  </tr>
                                </tbody>
                              </table>
                        </div>
                    </div>
                </div>
                <Floatingbuttons/>
    </div>
  )
}

export default InfoCollect