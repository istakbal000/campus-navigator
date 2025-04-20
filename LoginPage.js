
import React, { useState } from 'react';

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const login = async () => {
        const res = await fetch('http://localhost:5000/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });
        const data = await res.json();
        localStorage.setItem('token', data.token);
    };

    return (
        <div>
            <h2>Login</h2>
            <input placeholder="Username" onChange={e => setUsername(e.target.value)} />
            <input placeholder="Password" type="password" onChange={e => setPassword(e.target.value)} />
            <button onClick={login}>Login</button>
        </div>
    );
}

export default LoginPage;
