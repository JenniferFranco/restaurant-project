import { useState } from "react";
import { useAuth } from "./useAuth";
import axiosIntance from "../../config/axiosConfig";

const urlLogin = '/auth/login';

export const useLogin = () => {
    const [loginState, setLoginState] = useState({
        error: null,
        loading: false,
    });

    //desestruturacion para obtener valor login
    const {login} = useAuth ();

    const loginFuction = async ({email, password}) => {
        try {
            setLoginState( {
                error: null,
                loading: true, 
            });
            const response =  await axiosIntance.post(urlLogin, {email, password});
            if (response.status === 200) {
                const decoded = jwtDecode (response.data);
                login (response.data, decoded.role);
            } else {
                setLoginState({
                 error: 'Error',
                 loading: false,
                });
            } 
        } catch (error){
            console.log(error);
            setLoginState({
                error: 'Error',
                loading: false,
               });
        }
    };
    return {
        loginFuction,
        loginError : loginState.error,
        loginLoading : loginState.loading,
    };
};