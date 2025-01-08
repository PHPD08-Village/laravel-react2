import React from 'react'
import { Link } from 'react-router-dom';

function InfoBar() {
  return (
    <div className="rightColOne">
    <div>
        <img src="./imgs/bird.png" alt="使用者大頭照" />
    </div>
    <div>
        <span>你好！ XXX</span>
        <span>會員編號：00001</span>
    </div>
    <div>
        <Link to="/publish" className="alink">
            <img src="./imgs/file.png" alt="" />
            <span>刊登新案件</span>
        </Link>
    </div>
</div>
  )
}

export default InfoBar