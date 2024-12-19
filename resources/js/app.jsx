import './bootstrap';
import ErrorBoundary from '../js/components/ErrorBoundary'

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App'

ReactDOM.createRoot(document.getElementById('app')).render(
    <ErrorBoundary>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ErrorBoundary>
);