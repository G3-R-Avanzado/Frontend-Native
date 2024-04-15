import { login, logout, messageError, update } from "./authSlice";
import { Roles } from "../../../types/types";
import { axiosAuth } from "../../../config/axiosApi";

import { ALERT_TYPE, Dialog } from 'react-native-alert-notification';

export const getLogin = (email, password) => {
    return async (dispatch) => {
        try {
            const {data} = await axiosAuth.post('/login', {
                email: email,
                password: password,
            })
            axiosAuth.defaults.headers.common['token'] = data.token;
            dispatch(login({
                user: data,
            })) 
            
            Dialog.show({
                type: ALERT_TYPE.SUCCESS,
                title: 'Usuario logeado con exito',
            })
        } catch (error) {
            console.log(error.response.data);
            dispatch(messageError({message: error.response.data}))
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
            const {data} = await axiosAuth.post('/register', newUser);
            dispatch(login({
                user: data,
            })) 
        } catch (error) {
            console.log(error.response);
            dispatch(messageError({message: error.response.data}))
        }
    }
}

export const updateUser = (userUpdate) => {
    return async (dispatch) => { 
        try {
            const {data} = await axiosAuth.post('/update', userUpdate);
            console.log(data, 'data thunks');
            dispatch(update({
                user: data,
            })) 
        } catch (error) {
            console.log(error);
            dispatch(messageError({message: error.response.data}))
        }
    }
}

export const logOut = () =>{
    return async (dispatch) => {
        dispatch(logout())
    }
}