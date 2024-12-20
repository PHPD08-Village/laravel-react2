import React from 'react';
// import LOGO from '../../img/LOGO.png'; // 確保圖片路徑正確
import LINE from '../../../public/img/LINE.png';
import Facebook from '../../../public/img/Facebook.png';
import Instagram from '../../../public/img/Instagram.png';

const Footer = () => (
    <div className="footer">
        {/* LOGO&icons */}
        <div className="icons">
            <div className="logo">
                <a href="#">
                    <img className="LanceDom" src="https://github.com/PHPD08-Village/PHPD08-Team/blob/main/img/Icon/LOGO.png?raw=true" alt="logo" />
                </a>
                <a href="#">LanceDom</a>
            </div>
            <a href="#">
                <img src={LINE} alt="LINE" />
            </a>
            <a href="#">
                <img src={Facebook} alt="Facebook" />
            </a>
            <a href="#">
                <img src={Instagram} alt="Instagram" />
            </a>
        </div>
        <div className="spacer"></div> {/* 使用 className 或 style */}
        {/* copyright */}
        <div className="copyright">
            <div>
                <a href="#">網站公告</a>
                <a href="#">關於我們</a>
                <a href="#">會員條款</a>
            </div>
            <div>Copyright © 2024 LanceDom All rights reserved.</div>
        </div>
    </div>
);

export default Footer;
