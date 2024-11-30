import { useState } from "react";
import {useLogin} from  '../..hooks/auth/useLogin'

import './LoginPage.css'

const LoginPage = () => {

    const [email, setEmail] = useState (null);
    const [password, setPassword] = useState ('');

    const {LoginError, loginFunction, loginLoading } = useLogin();

    const handleClickLogin = () => {
        if (email && password) {
            loginFunction ({email, password})
        }
    };


    return (
        <div className="login-container">
            <div className="login-content">
                <h2>Iniciar sesión</h2>
                <input 
                    type="text"
                    placeholder="Emial" 
                    value={email} 
                    onChange={(event) => setEmail(event.target.value)}  
                    />
                    <input 
                    type="password"
                    placeholder="Contraseña" 
                    value={password} 
                    onChange={(event) => setPassword(event.target.value)}  
                    />
                    <button 
                    onClick={handleClickLogin} 
                    disabled= {!email || !password} >
                        {loginLoading ? 'Cargando...' : 'Iniciar sesión'}
                        </button>
                    {LoginError && (
                        <p>Ocurrio un error al iniciar sesión. </p>
                    )}
            </div>
        </div>
    );
}

export default LoginPage;