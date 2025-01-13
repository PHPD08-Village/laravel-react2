// auth/AuthContext.jsx
import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // 引入 useNavigate

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({ id: null, email: null });
    const navigate = useNavigate(); // 使用 useNavigate 鉤子

    const checkAuthStatus = async () => {
        try {
            const response = await axios.get('/user');
            setUser({ id: response.data.user.id, email: response.data.user.email });
        } catch (error) {
            setUser(null);
        }
    };
    

    useEffect(() => {
        axios.defaults.withCredentials = true;
        axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
        checkAuthStatus();
    }, []);

    const login = async (credentials) => {
        try {
            await axios.post('/login', credentials);
            await checkAuthStatus();
            navigate('/');// 登入成功後跳轉到首頁
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    const logout = async () => {
        try {
            await axios.post('/logout');
            setUser(null);
            window.alert('You have successfully logged out.'); // 顯示登出提醒
            navigate('/'); // 登出成功後跳轉到首頁
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
