// ForgotPassword.jsx
import React, { useState } from 'react';
import axios from 'axios';
import TextInput from './TextInput';
import Button from './Button';
import InputError from './InputError';

const Forgotpassword = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState(null);
    const [errors, setErrors] = useState([]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('/api/password/email', { email });
            console.log('重設連結已發送:', response.data);
            setStatus('重設連結已發送至您的電子郵件地址。');
            if (response.status === 200) {
                setStatus('Password reset link sent successfully.');
            }
        } catch (error) {
            setErrors(error.response.data.errors || []);
        }
    };

    return (
        <div className="password-reset">
            <div className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                忘記密碼了嗎？沒問題。只需告訴我們您的電子郵件地址，我們會向您發送一個重置密碼的鏈接，讓您可以選擇一個新的密碼。
            </div>

            {/* Session Status */}
            {status && <div className="mb-4">{status}</div>}

            <form method="POST" onSubmit={handleSubmit}>
                {/* CSRF Token */}
                {/* 在 React 中不需要顯式地設置 CSRF 令牌，axios 會自動處理 */}

                {/* Email Address */}
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        className="block mt-1 w-full"
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        autoFocus
                    />
                    {errors.email && <div className="mt-2">{errors.email}</div>}
                </div>

                <div className="flex items-center justify-end mt-4">
                    <button type="submit" className="primary-button">
                        Email Password Reset Link
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Forgotpassword;
