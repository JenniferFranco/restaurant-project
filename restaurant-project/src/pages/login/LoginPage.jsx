import { useState } from "react";

const LoginPage = () => {

    const [email, setEmail] = useState (null);
    const [password, setPassword] = useState ('');

    const handleClickLogin = () => {
        console.log(email)
        console.log(password)
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
                    <button onClick={handleClickLogin} >Iniciar sesión</button>
            </div>
        </div>
    );
}

export default LoginPage;