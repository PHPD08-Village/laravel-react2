import React, { useEffect, useState } from 'react';
import '../../css/login.css';

const Login = () => {
    const [htmlContent, setHtmlContent] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        // Fetch the Blade template HTML content
        fetch('/login', {
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        })
            .then(response => {
                if (!response.ok) {
                    return response.json().then(error => {
                        throw new Error(error.message);
                    });
                }
                return response.text();
            })
            .then(html => {
                setHtmlContent(html);
            })
            .catch(error => {
                setErrorMessage(error.message);
            });
    }, []);

    return (
        <div>
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </div>
    );
};

export default Login;
