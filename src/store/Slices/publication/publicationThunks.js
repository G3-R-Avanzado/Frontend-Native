import axios from "axios";
import { reqAxiosHook } from "../../../hooks/useAxios";
import { updateAll, updateAllUser } from "./publicationSlice";
import { modificarProducto } from "../../../helpers/Helpers";

export const getAllPublication = () => {
    return async (dispatch) => {
        try {
            const {data} = await reqAxiosHook.get('/publication/getall')
            
            dispatch(update({
                publications: data,
            })) 
        } catch (error) {
            console.log(error.response.data);
            dispatch(messageError({message: error.response.data}))
        }
    }
}

export const getAllPublicationUser = (idUser) => {
    return async (dispatch) => {
        try {
            const {data} = await reqAxiosHook.get('/publication/getall/user/' + idUser)
            
            dispatch(updateAllUser({
                publicationsUser: data,
            })) 
        } catch (error) {
            console.log(error.response.data);
            dispatch(messageError({message: error.response.data}))
        }
    }
}

export const getCategories = (idUser) => {
    return async (dispatch) => {
        try {
            const {data} = await reqAxiosHook.get('/categories')
            return data;
        } catch (error) {
            console.log(error);
        }
    }
}

export const updatePublication = (publication) => {
    return async (dispatch) => {
        try {
            const {data} = await reqAxiosHook.put('/publication/update', publication)
            return data;
        } catch (error) {
            console.log(error.response);
        }
    }
}