import React from 'react';
import { Link } from 'react-router-dom';

function InfoSideBar() {
  return (
    <>
    {/* <!--左側欄位  --> */}
    <div className="leftCol">
            <div className="leftColTwo">
                <div className="leftColOne">
                    <button className="infoBtn active"><Link to="/infodata" className="alink">案主</Link></button>
                    <button className="infoBtn"><Link to="/personal_editor" className="alink">接案者</Link></button>
                </div>
                <div>
                    <h3>帳戶管理</h3>
                    <hr />
                    <span className="leftItem">編輯個人資料</span>
                </div>
                <div>
                    <h3>案件管理</h3>
                    <hr />
                    <ul>
                        <li className="leftItem"><Link to="/infocase" className="alink">審核中</Link></li>  {/*  側欄紅字"caseActive" */}
                        <li className="leftItem"><Link to="/infocasepub" className="alink">刊登中</Link></li>
                    </ul>
                    <span className="leftItem"><Link to="/infoclosecase" className="alink">已完成/已關閉案件</Link></span>
                </div>
                <div>
                    <h3>人才管理</h3>
                    <hr />
                    <span className="leftItem"><Link to="/infocollect" className="alink">已收藏人才</Link></span>
                </div>
            </div>
        </div>
    </>
  )
}

export default InfoSideBar