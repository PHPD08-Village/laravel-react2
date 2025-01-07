// App.jsx
import React from 'react';

import Header from './allpage/Header';
import Footer from './allpage/Footer';
import '../../css/app.css';
import { AuthProvider } from '../components/auth/AuthContext'; // 引入 AuthProvider

const App = () => {
    return (
        <AuthProvider> {/* 將 AuthProvider 包裹整個應用 */}
            <Header />
            <Footer />
        </AuthProvider>
    );
};

export default App;
