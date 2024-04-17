import axios from 'axios';
import { useEffect, useState } from 'react'
import { methodsHTTP } from '../types/types';

//Instancia personalizada de axios
export const reqAxiosHook = axios.create({
    baseURL: process.env.EXPO_PUBLIC_API_URL,
    timeout: 12000,
    headers: {
        "Content-Type": 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*'
    }
});

export const useAxios = (url, method, params, body) => {
    const [dataApi, setDataApi] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    const getFetch = async () => {
        const resp = await reqAxiosHook({
            url: url,
            method: method,
            params: { params },
            data: body
        });
        const { data } = await resp.data;
        setDataApi(data);
        setIsLoading(false);
    }
    useEffect(() => {
        getFetch();
    }, [url])
    return {
        dataApi,
        isLoading
    }
}

useAxios.defaultProps = {
    params: null,
    body: null, 
    method: methodsHTTP.POST
}