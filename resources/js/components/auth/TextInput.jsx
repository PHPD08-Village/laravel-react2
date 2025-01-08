// TextInput.jsx
import React from 'react';

const TextInput = ({ id, label, type = 'text', ...props }) => (
    <div>
        <label htmlFor={id}>{label}</label>
        <input id={id} type={type} {...props} />
    </div>
);

export default TextInput;
