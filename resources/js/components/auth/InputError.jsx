// InputError.jsx
import React from 'react';

const InputError = ({ messages }) => (
    <div className="input-error">
        {messages && messages.map((msg, index) => <p key={index}>{msg}</p>)}
    </div>
);

export default InputError;
