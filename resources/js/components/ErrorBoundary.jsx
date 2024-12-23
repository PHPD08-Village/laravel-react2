import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // 更新 state 使下一次渲染顯示回退 UI
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // 將錯誤日誌發送到後端伺服器
        fetch('/api/log-error', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                error: error.toString(),
                errorInfo: errorInfo.componentStack
            }),
        }).catch(err => {
            console.error('Error sending log to server:', err);
        });

        // 也可以在控制台記錄錯誤，方便開發者調試
        console.error('Uncaught error:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // 自訂的回退 UI
            return (
                <div>
                    <h1>伺服器維修中。</h1>
                    <button onClick={() => window.location.reload()}>重新加載頁面</button>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
