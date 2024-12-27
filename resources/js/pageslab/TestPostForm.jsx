import React, { useState, useEffect } from 'react';

const TestPostForm = () => {
    const [message, setMessage] = useState('');
    const [csrfToken, setCsrfToken] = useState('');

    useEffect(() => {
        fetch('http://127.0.0.1:8000/sanctum/csrf-cookie')
            .then((response) => response)
            .then(() => {
                const token = getCookie('XSRF-TOKEN');
                setCsrfToken(token);
            });
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch('http://127.0.0.1:8000/api/send-message', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': csrfToken,
            },
            body: JSON.stringify({ message }),
        });

        const data = await response.json();
        console.log(data);
    };

    const getCookie = (name) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Message:
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
            </label>
            <button type="submit">Send</button>
        </form>
    );
};

export default TestPostForm;
