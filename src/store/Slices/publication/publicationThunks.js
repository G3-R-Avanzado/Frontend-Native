import { reqAxiosHook } from "../../../hooks/useAxios";
import { updateAll, updateAllUser } from "./publicationSlice";

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
            console.log(error.response.data);
            dispatch(messageError({message: error.response.data}))
        }
    }
}
