// app.jsx
import './bootstrap';
import ErrorBoundary from './components/allpage/ErrorBoundary';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';

// 設置 Axios 基礎路徑
import axios from 'axios';
axios.defaults.baseURL = '/api';
axios.defaults.withCredentials = true;

ReactDOM.createRoot(document.getElementById('app')).render(
    <ErrorBoundary>
            <BrowserRouter>
                <App />
            </BrowserRouter>
    </ErrorBoundary>
);
