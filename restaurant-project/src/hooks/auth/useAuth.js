import { useContext } from "react";
import AuthContext from "../../context/AuthContext";

export const useAuth = () => {
    const context = useContext (AuthContext);

    //verificando que exista el contexto
    if (!context) {
        throw new Error('useAuth must be inside context');
    }
    return context;
}