import React from 'react';

const Footer = () => (
    <div className="footer">
        {/* LOGO&icons */}
        <div className="icons">
            <div className="logo">
                <a href="#">
                    <img className="LanceDom" src="/img/Icon/LOGO.png" alt="logo" />
                </a>
                <a href="#">LanceDom</a>
            </div>
            <a href="#">
                <img src="/img/LINE.png" alt="LINE" />
            </a>
            <a href="#">
                <img src="/img/Facebook.png" alt="Facebook" />
            </a>
            <a href="#">
                <img src="/img/Instagram.png" alt="Instagram" />
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
