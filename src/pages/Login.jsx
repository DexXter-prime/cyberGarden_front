import React, {useContext, useEffect, useState} from 'react';
import '../assets/globalStyles/App.css';
import logo from '../assets/imgs/logo.svg';
import {Navigate, useNavigate} from "react-router-dom";
import Checkbox from "../components/UI/Checkbox/Checkbox";
import {AuthContext} from "../hoc/AuthProvider";


const Login = () => {
    const [station, setStation] = useState('');
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const { logIn, user: auth } = useContext(AuthContext);
    const navigate = useNavigate();

    const [loginErr, setLoginErr] = useState('')
    const [passwordErr, setPasswordErr] = useState('')

    const [notificationMsg, setNotificationMsg] = useState('')

    const [checkStatus, setCheckStatus] = useState(false)
    useEffect(() => {
        setLoginErr('')
    }, [login])

    useEffect(() => {
        setPasswordErr('')
    }, [password])

    useEffect(() => {
        setNotificationMsg('')
    }, [station])


    const handleCheck = () => {
        setCheckStatus(!checkStatus)
    }


    const handleLogin = () => {
        if (!login) {
            setLoginErr('Логин должно быть пустым')
        }

        if (!password) {
            setPasswordErr('Пароль не должен быть пустым')
        }

        if (!password || !login) {
            setNotificationMsg('')
            return null
        }

        if (checkStatus && login.toLowerCase() !== 'admin' && password.toLowerCase() !== 'admin') {
            setNotificationMsg('Такого пользователять не существует')
            return null
        }

        if ( (!checkStatus && !station) && (login.toLowerCase() === 'user' && password.toLowerCase() === 'user') ) {
            setNotificationMsg('Необходимо выбрать станцию')
            return null
        }

        if (!checkStatus && login.toLowerCase() !== 'user' && password.toLowerCase() !== 'user') {
            setNotificationMsg('Такого пользователять не существует')
            return null
        }

        if (!checkStatus) {

            const user = {
                userName: login,
                password
            }
           return logIn(user, () => navigate(`/station/${station}`, { replace: true }))
        } else {
            const user = {
                userName: login,
                password
            }
            return logIn(user, () => navigate(`/stations`, { replace: true }))
        }

    };

    return (
        <div className="login-container">
            <img src={logo} alt="Evraz Logo" width="150" height="50" />
            <h2 style={{ "marginBottom": 40 }}>Авторизация</h2>
            <div className="login-box">
                <div style={{ height: "1px", width: "80%", background: 'lightgray', marginBottom: 20, marginLeft: 30, marginRight: 30 }}></div>
                {
                    !checkStatus &&
                    <label style={{ display: 'flex', flexDirection: 'column', marginBottom: 20 }}>
                        Станция:
                        <select
                            style={{ height: '40px', width: '300px' }}
                            value={station}
                            onChange={(e) => setStation(e.target.value)}
                        >
                            <option value="" disabled>Выберите станцию</option>
                            <option value="17">Томусинская</option>
                            <option value="16">Новокузнецк-северный</option>
                            <option value="18">Губаха</option>
                            {/* Добавьте другие станции, если необходимо */}
                        </select>
                    </label>
                }
                <div style={{margin: '20px 0', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Checkbox label={'Зайти как администратор'} checked={checkStatus} onChange={handleCheck}></Checkbox>
                </div>

                <label style={{ display: 'flex', flexDirection: 'column', marginBottom: 20 }}>
                    Логин:
                    <input
                        style={{ height: '40px', width: '300px', paddingLeft: '10px', paddingRight: '10px'}}
                        type="text"
                        maxLength={28}
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                    />
                    {
                        loginErr && <p style={{marginTop: '10px', color: 'red'}}>{loginErr}</p>
                    }
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
            {
              passwordErr && <p style={{marginTop: '10px', color: 'red'}}>{passwordErr}</p>
            }
            {
                notificationMsg && <p style={{marginTop: '10px', color: 'red', padding: '5px', fontSize: '12px'}}>{notificationMsg}</p>
            }
        </label>
                <br />
                <div style={{ height: "1px", width: "80%", background: 'lightgray', marginBottom: 20, marginLeft: 30, marginRight: 30 }}></div>
                <button
                    style={{ width: "100%", height: '40px', background: 'orange', border: 'none', color: 'white', fontSize: '14px', cursor: 'pointer'}}
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
