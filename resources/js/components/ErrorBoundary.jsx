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
        // 你可以將錯誤日誌記錄到你的錯誤報告服務
        console.error('Uncaught error:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // 你可以自訂任何回退 UI
            return <h1>出了點問題。</h1>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
