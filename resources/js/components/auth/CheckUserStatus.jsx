// CheckUserStatus.jsx
import React, { useState } from 'react';
import axios from 'axios';

axios.defaults.withCredentials = true; // 這將確保跨域請求包含 cookies
const CheckUserStatus = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    const checkUserStatus = async () => {
        try {
            const response = await axios.get('/user');
            setUser(response.data.user);
            setError(null);
        } catch (err) {
            setUser(null);
            setError('Unable to fetch user data. Please make sure you are logged in.');
        }
    };

    return (
        <div>
            <h1>Test User Status</h1>
            <button onClick={checkUserStatus}>Check User Status</button>
            {user && <div>User: {user.name}</div>}
            {error && <div>{error}</div>}
        </div>
    );
};

export default CheckUserStatus;
