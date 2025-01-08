import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [agree, setAgree] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("密碼和確認密碼不相符！");
            return;
        }
        try {
            const response = await axios.post('/api/register');
            if (response.status === 201) {
                navigate('/login');
            }
        } catch (error) {
            setErrors(error.response.data.errors);
        }
    };

    const handleClose = () => {
        // 返回上一頁
        navigate(-1);
    }

    return (
        <div className='register'>
            <div className="register-container">
                <div className="register-card">
                    {/* Close Button */}
                    <button className="close-btn" onClick={handleClose}>✖</button>

                    <div className="logo">
                        <img src="/img/Icon/LOGO.png" alt="LanceDom Logo" />
                        <h1>LanceDom</h1>
                    </div>
                    <form onSubmit={handleSubmit} className="register-form">
                        {/* Name */}
                        <label className='register-label' htmlFor="name">名稱 (Name)</label>
                        <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} required autoFocus autoComplete="name" />
                        {errors.name && <div className="mt-2">{errors.name}</div>}

                        {/* Email Address */}
                        <label className='register-label' htmlFor="email">信箱 (Email)</label>
                        <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required autoComplete="username" />
                        {errors.email && <div className="mt-2">{errors.email}</div>}

                        {/* Password */}
                        <label className='register-label' htmlFor="password">密碼 (Password)</label>
                        <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required autoComplete="new-password" />
                        {errors.password && <div className="mt-2">{errors.password}</div>}

                        {/* Confirm Password */}
                        <label className='register-label' htmlFor="password_confirmation">確認密碼 (Confirm Password)</label>
                        <input id="password_confirmation" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required autoComplete="new-password" />

                        {/* Terms Checkbox */}
                        <div className="terms">
                            <label htmlFor="agree">
                                <input className='register-box' type="checkbox" id="agree" checked={agree} onChange={(e) => setAgree(e.target.checked)} required />
                                我同意條款和隱私
                            </label>
                        </div>

                        <button type="submit" className="register-button">註冊</button>
                    </form>

                    <div className="divider">或</div>
                    <div className="social-login">
                        <Link to="/login/line" className="social-btn">
                            <img src="/img/Icon/LINE (G).png" alt="LINE" />
                        </Link>
                        <Link to="/login/google" className="social-btn">
                            <img src="/img/Icon/Google.png" alt="Google" />
                        </Link>
                    </div>
                    <div className="register-footer">
                        <span>已經擁有帳號了？ <Link to="/login">登入</Link></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
