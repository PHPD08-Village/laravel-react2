// Verifyemail.jsx
import React, { useState } from 'react';
import axios from 'axios';
import Button from '../allpage/Button';

const Verifyemail = () => {
    const [status, setStatus] = useState(null);
    const [errors, setErrors] = useState([]);

    const handleResend = async () => {
        try {
            const response = await axios.post('/api/email/verification-notification');
            setStatus('新的驗證連結已發送至您的電子郵件地址。');
        } catch (error) {
            setErrors(error.response.data.errors || []);
        }
    };

    return (
        <div className="verification-container">
            <div className="message">
                感謝您的註冊！在開始之前，請點擊我們剛發送到您信箱的連結來驗證您的電子郵件地址。如果您沒有收到郵件，我們會再重新發送一次。
            </div>
            {status && <div className="status-message">{status}</div>}
            <div className="action-buttons">
                <Button onClick={handleResend}>重新發送郵件</Button>
            </div>
            {errors.length > 0 && (
                <div className="error-messages">
                    {errors.map((error, index) => <p key={index}>{error}</p>)}
                </div>
            )}
        </div>
    );
};

export default Verifyemail;
