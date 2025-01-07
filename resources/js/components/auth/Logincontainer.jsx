import React from 'react'
import { useNavigate, Link } from 'react-router-dom';

const LoginContainer = () => {
    const navigate = useNavigate();
    
    // 當用戶點擊這個按鈕時，handleClose 會被呼叫，並使用 navigate(-1) 返回上一頁
    const handleClose = () => {
        // 返回上一頁
        navigate(-1);
    }

    return (
        <div className='login'>
            <div className="login-container">
                <div className="login-box">
                    {/* Close Button */}
                    <button className="close-btn" onClick={handleClose}>✖</button>

                    {/* Logo */}
                    <img className='logo' src="/img/Icon/LOGO.png" alt="LanceDom Logo" />
                    <h1>LanceDom</h1>

                    {/* Login Form */}
                    <form method="POST" action="/login" className="login-form">
                        {/* CSRF Token */}
                        <input type="hidden" name="_token" value="CSRF_TOKEN_HERE" />

                        {/* Email Address */}
                        <div>
                            <label htmlFor="email">信箱 (Email)</label>
                            <input type="email" id="email" name="email" placeholder="輸入您的email" required autoFocus autoComplete="username" />
                            {/* Display errors if any */}
                            {/* <p className="mt-2">Error message here</p> */}
                        </div>

                        {/* Password */}
                        <div>
                            <label htmlFor="password">密碼 (Password)</label>
                            <input type="password" id="password" name="password" placeholder="********" required autoComplete="current-password" pattern="(?=.*[A-Z])(?=.*[0-9]).{8,}" title="密碼必須至少包含一個大寫字母、一個數字，且長度為8個字元以上" />
                            {/* Display errors if any */}
                            {/* <p className="mt-2">Error message here</p> */}
                        </div>

                        {/* Remember Me (optional) */}
                        <div className="checkbox-group">
                            <label>
                                <input type="checkbox" name="remember" />
                                <span className="text-sm text-gray-600 dark:text-gray-400">Remember me</span>
                            </label>
                        </div>

                        {/* Submit Button */}
                        <button type="submit" className="login-btn">登入</button>

                        {/* Forgot Password Link */}
                        <Link to="/forgot" className="forgot-password">忘記密碼？</Link>
                    </form>

                    {/* Divider and Social Login Options */}
                    <div className="divider">
                        <span>或</span>
                        <p style={{ fontWeight: "bolder" }}>使用社群帳號快速登入</p>
                    </div>

                    <div className="social-login">
                        <Link to="/login/line" className="social-btn">
                        <img src="/img/Icon/LINE (G).png" alt="LINE" />
                        </Link>
                        <Link to="/login/google" className="social-btn">
                        <img src="/img/Icon/Google.png" alt="Google" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginContainer
