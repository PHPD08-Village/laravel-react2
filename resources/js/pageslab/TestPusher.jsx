import React, { useEffect, useState } from 'react';
import Pusher from 'pusher-js';

const Chat = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const pusher = new Pusher('1f50a44955da2d22f379', {
            cluster: 'ap3',
            encrypted: true,
        });

        const channel = pusher.subscribe('my-channel');
        channel.bind('my-event', function(data) {
            setMessages(prevMessages => [...prevMessages, data.message]);
        });

        return () => {
            channel.unbind_all();
            channel.unsubscribe();
        };
    }, []);

    return (
        <div>
            <h1>Chat Messages</h1>
            <ul>
                {messages.map((message, index) => (
                    <li key={index}>{message}</li>
                ))}
            </ul>
        </div>
    );
};

export default Chat;
