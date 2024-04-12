import { login, logout, messageError } from "./authSlice";
import { Roles } from "../../../types/types";
import { axiosAuth } from "../../../config/axiosApi";

// const redireccionar=()=>{
//     const navigate = useNavigate()
//     const rol=localStorage.getItem("rol")/* ==Roles.User?navigate("/user"):navigate("/admin") */
//     console.log(rol);
// }


export const getLogin = (email, password) => {
    return async (dispatch) => {
        try {
            const {data} = await axiosAuth.post('/login', {
                email: email,
                password: password
            })
            axiosAuth.defaults.headers.common['token'] = data.token;
            dispatch(login({
                user: data,
            })) 
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
            //console.log(error.response.data);
            dispatch(messageError({message: error.response.data}))
        }
    }
}

export const logOut = () =>{
    return async (dispatch) => {
        dispatch(logout())
    }
}