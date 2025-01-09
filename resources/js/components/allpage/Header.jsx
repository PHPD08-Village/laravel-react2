// Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';
import Router from '../../router/Index';

const Header = () => {
    const { user, logout } = useAuth();
    // console.log('Header user status:', user); // 打印 user 狀態

    return (
        <>
            <div className="nav">
                <div className="logo">
                    <a href="/">
                        <img className="LanceDom" src="/img/Icon/LOGO.png" alt="LOGO" />
                    </a>
                    <a href="/">LanceDom</a>
                </div>
                <div className="navbar">
                    <Link to="/" className="alink">首頁</Link>
                    <Link to="/freelancer" className="alink">我要接案</Link>
                    <Link to="/owner" className="alink">我要委託</Link>
                    <Link to="/publish" className="alink">我要發案</Link>
                    <Link to="/Personal_editor" className="alink">FAQ</Link>
                    <Link to="/star" className="alink">Star</Link>
                </div>
                <div className="member">
                    {user ? (
                        <>
                            <Link to="/personal_editor">
                                <button className="floating-btn" id="profile-btn" title="個人資料">
                                    <img src="/img/Icon/Male User.png" alt="個人資料" />
                                </button>
                            </Link>
                            <Link onClick={logout} className="sign alink">Logout</Link>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="alink">Login</Link>
                            <Link to="/signup" className="sign alink">Sign up</Link>
                        </>
                    )}
                </div>
            </div>
            <Router />
        </>
    );
};

export default Header;