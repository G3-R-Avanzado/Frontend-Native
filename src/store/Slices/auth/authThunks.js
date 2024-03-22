import { login, logout, messageError } from "./authSlice";
import { axiosAuth } from "../../../config/axiosApi";
import { Roles } from "../../../type/Type";
import { useNavigate } from "react-router-dom";

const redireccionar=()=>{
    const navigate = useNavigate()
    const rol=localStorage.getItem("rol")/* ==Roles.User?navigate("/user"):navigate("/admin") */
    console.log(rol);
}


export const getLogin = (email, password) => {
    return async (dispatch) => {
        try {
            const { data } = await axiosAuth.post('/login', {
                email: email,
                password: password
            })
            //const token = 'sa23fgty54tgfewr43'
            localStorage.setItem('user', JSON.stringify(data))
            //localStorage.setItem('rol', JSON.stringify(data.rol))
            //localStorage.setItem('token', token)
            dispatch(login({
                user: data,
                //token: token
            }))
            //redireccionar();
            
        } catch (error) {
            dispatch(messageError({message: error.response.data}))
        }
    }
}

export const checkToken = () => {
    return async (dispatch) => {
        const token = localStorage.getItem('token')

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
            const token = 'sa23fgty54tgfewr43'
            dispatch(login({
                user: data.username,
                token: token,
                rol:data.rol
            }))
            localStorage.setItem('user', JSON.stringify(data))
            localStorage.setItem('token', token)
        } catch (error) {
            dispatch(messageError({message: error.response.data[0]}))
        }
    }
}