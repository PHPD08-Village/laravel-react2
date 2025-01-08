import React, { useEffect, useState } from 'react';
import '../../css/signup.css';

const Signup = () => {
    const [htmlContent, setHtmlContent] = useState('');

    useEffect(() => {
        // Fetch the Blade template HTML content
        fetch('/register', {
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        })
            .then(response => response.text())
            .then(html => {
                setHtmlContent(html);
            });
    }, []);

    return (
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    );
};

export default Signup;
