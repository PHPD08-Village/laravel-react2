// Resetpassword.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import TextInput from '../allpage/TextInput';
import Button from '../allpage/Button';
import InputError from '../allpage/InputError';

const Resetpassword = () => {
    const { token } = useParams();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [errors, setErrors] = useState([]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('/api/reset-password', {
                token,
                email,
                password,
                password_confirmation: passwordConfirmation,
            });
            console.log('密碼重設成功:', response.data);
        } catch (error) {
            setErrors(error.response.data.errors || []);
        }
    };

    return (
        <div className="guest-layout">
            <form onSubmit={handleSubmit}>
                <input type="hidden" name="token" value={token} />
                <TextInput
                    id="email"
                    label="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    autoComplete="username"
                    autoFocus
                />
                <InputError messages={errors.email} />
                <TextInput
                    id="password"
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    autoComplete="new-password"
                />
                <InputError messages={errors.password} />
                <TextInput
                    id="password_confirmation"
                    label="Confirm Password"
                    type="password"
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                    required
                    autoComplete="new-password"
                />
                <InputError messages={errors.password_confirmation} />
                <div className="flex items-center justify-end mt-4">
                    <Button type="submit">Reset Password</Button>
                </div>
            </form>
        </div>
    );
};

export default Resetpassword;
