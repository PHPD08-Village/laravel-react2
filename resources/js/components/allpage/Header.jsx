import React from 'react';
import { Link } from 'react-router-dom';

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
                <Link to="/" className="alink">首頁</Link>
                <Link to="/freelancer" className="alink">我要接案</Link>
                <Link to="/owner" className="alink">我要委託</Link>
                <Link to="/publish" className="alink">我要發案</Link>
                <Link to="/Personal_editor" className="alink">FAQ</Link>
                <Link to="/star" className="alink">Star</Link>
            </div>
            {/* <!-- member --> */}
            <div className="member">
            <Link to="/login" className="alink">Login</Link>
            <Link to="/signup" className="sign alink">Sign up</Link>
            </div>
        </div>
        <Router />
    </>
);

export default Header;
