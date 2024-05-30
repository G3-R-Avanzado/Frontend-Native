import { login, logout, messageError, update } from "./authSlice";
import { Roles } from "../../../types/types";
//import { axiosAuth } from "../../../config/axiosApi";
import { ALERT_TYPE, Dialog } from 'react-native-alert-notification';
import { reqAxiosHook } from "../../../hooks/useAxios";
import axios from "axios";



export const getLogin = (email, password) => {
    return async (dispatch) => {
        try {
            const response = await reqAxiosHook.post('/login', {
                email: email,
                password: password,
            })
            
            reqAxiosHook.defaults.headers.common['token'] = response.data.token;

            dispatch(login({
                user: response.data,
            })) 
            
            Dialog.show({
                type: ALERT_TYPE.SUCCESS,
                title: 'Inicio de sesión exitoso!',
            })
            
        } catch (error) {
            dispatch(messageError({message: error.response.data[0]}))
        }
    }
}

export const checkToken = () => {
    return async (dispatch) => {
        //const token = localStorage.getItem('token')

        if(!token){
            //dispatch(logout())
        }else{
            //console.log("aqio");
        } 
    }
}

export const register = (newUser) => {
    return async (dispatch) => { 
        try {
            const {data} = await reqAxiosHook.post('/register', newUser);
            dispatch(login({
                user: data,
            })) 
        } catch (error) {
            dispatch(messageError({message: error.response.data[0]}))
        }
    }
}

export const updateUser = (userUpdate) => {
    return async (dispatch) => { 
        try {
            const {data} = await reqAxiosHook.post('/update', userUpdate);
            dispatch(update({
                user: data,
            })) 
        } catch (error) {
            dispatch(messageError({message: error.response.data[0]}))
        }
    }
}

export const logOut = () =>{
    return async (dispatch) => {
        dispatch(logout())
    }
}