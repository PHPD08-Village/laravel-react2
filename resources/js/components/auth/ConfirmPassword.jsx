// ConfirmPassword.jsx
import React, { useState } from 'react';
import axios from 'axios';
import TextInput from '../allpage/TextInput';
import Button from '../allpage/Button';
import InputError from '../allpage/InputError';

const ConfirmPassword = () => {
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('/api/password/confirm', { password });
            console.log('確認成功:', response.data);
        } catch (error) {
            setErrors(error.response.data.errors || []);
        }
    };

    return (
        <div className="guest-layout">
            <div className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                This is a secure area of the application. Please confirm your password before continuing.
            </div>
            <form onSubmit={handleSubmit}>
                <TextInput
                    id="password"
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    autoComplete="current-password"
                />
                <InputError messages={errors.password} />
                <div className="flex justify-end mt-4">
                    <Button type="submit">Confirm</Button>
                </div>
            </form>
        </div>
    );
};

export default ConfirmPassword;
