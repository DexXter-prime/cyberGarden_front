import React, { useState } from 'react';
import '../assets/globalStyles/App.css';
import logo from '../assets/imgs/logo.svg';


const Login = () => {
    const [station, setStation] = useState('');
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = () => {
        console.log('Station:', station);
        console.log('Login:', login);
        console.log('Password:', password);
    };

    return (
        <div className="login-container">
            <img src={logo} alt="Evraz Logo" width="150" height="50" />
            <h2 style={{ "margin-bottom": 40 }}>Авторизация</h2>
            <div className="login-box">
                <div style={{ height: "1px", width: "80%", background: 'lightgray', marginBottom: 20, marginLeft: 30, marginRight: 30 }}></div>
                <label style={{ display: 'flex', flexDirection: 'column', marginBottom: 20 }}>
                    Станция:
                    <select
                        style={{ height: '40px', width: '300px' }}
                        value={station}
                        onChange={(e) => setStation(e.target.value)}
                    >
                        <option value="station1">Станция 1</option>
                        <option value="station2">Станция 2</option>
                        {/* Добавьте другие станции, если необходимо */}
                    </select>
                </label>

                <label style={{ display: 'flex', flexDirection: 'column', marginBottom: 20 }}>
                    Логин:
                    <input
                        style={{ height: '40px', width: '300px', paddingLeft: '10px', paddingRight: '10px'}}
                        type="text"
                        maxLength={28}
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                    />
                </label>

                <label style={{ display: 'flex', flexDirection: 'column', marginBottom: 20, position: 'relative' }}>
            Пароль:
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <input
                    style={{ height: '40px', width: '300px', paddingLeft: '10px', paddingRight: '40px' }}
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    maxLength={28}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div
                    onClick={() => setShowPassword(!showPassword)}
                    style={{
                        position: 'absolute',
                        right: '10px',
                        cursor: 'pointer',
                        userSelect: 'none'
                    }}
                >
                    {showPassword ? '👁️' : '👁️‍🗨️'}
                </div>
            </div>
        </label>
                <br />
                <div style={{ height: "1px", width: "80%", background: 'lightgray', marginBottom: 20, marginLeft: 30, marginRight: 30 }}></div>
                <button
                    style={{ width: "100%", height: '40px', background: 'orange', border: 'none', color: 'white', fontSize: '14px'}}
                    onClick={handleLogin}
                >
                    Войти
                </button>
                <br />
            </div>
        </div>
    );
};

export default Login;
