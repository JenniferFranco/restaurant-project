import {createContext, useState} from 'react';

//contexto para acceder a la info de forma global
const AuthContext = createContext();

const AuthProvider = () => {
    const [token, setToken] = useState(localStorage.getItem('token') || null);
    const [role, setRole] = useState (localStorage.getItem('role') || null);

    //metodos

    //guardando info
    const login = (newToken, newRole) => {
        setToken(newToken);
        setRole(newRole);
        localStorage.setItem('token', newToken);
        localStorage.setItem('role', newRole);
    }

    //borrando info al cerrar sesión
    const logout = (newToken, newRole) => {
        setToken(newToken);
        setRole(newRole);
        localStorage.removeItem('token');
        localStorage.removeItem('role');
    };

    return (
        <AuthContext.Provider value={{token, role, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthContext;