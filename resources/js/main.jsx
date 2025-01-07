// main.jsx 通常是用來處理應用程式的啟動邏輯和全局配置。有時候它可以與 index.jsx 合併使用，根據專案的結構和需求決定。若存在這個檔案，通常用來進行更高層級的設置。

// 主要作用：

// 處理應用程式的全局啟動邏輯。

// 配置路由器、錯誤邊界、上下文提供者等全局設置。

// 引入全局樣式、設定主題或其他全局配置。

import './bootstrap';
import ErrorBoundary from './components/allpage/ErrorBoundary'

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import axios from 'axios';

// 設置 Axios 基礎路徑
axios.defaults.baseURL = '/api';

ReactDOM.createRoot(document.getElementById('app')).render(
    <ErrorBoundary>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ErrorBoundary>
);
