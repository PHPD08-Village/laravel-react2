import React from 'react';
import Router from '../../router/Index';

const Header = () => (
    <>
        {/* // <!-- header --> */}
        <div className="nav">
            {/* <!-- LOGO --> */}
            <div className="logo">
                <a href="/">
                    <img className="LanceDom" src="https://github.com/PHPD08-Village/PHPD08-Team/blob/main/img/Icon/LOGO.png?raw=true" alt="logo" /></a>
                <a href="/">LanceDom</a>
            </div>
            {/* <!-- navbar --> */}
            <div className="navbar">
                <a href="/">首頁</a>
                <a href="/freelancer">我要接案</a>
                <a href="/owner">我要委託</a>
                <a href="/publish">我要發案 </a>
                <a href="/Personal_editor">FAQ </a>
                <a href="/star">Star </a>
            </div>
            {/* <!-- member --> */}
            <div className="member">
                <a href="#">Login</a>
                <a className="sign" href="#">Sign up</a>
            </div>
        </div>
        <Router />
    </>
);

export default Header;
