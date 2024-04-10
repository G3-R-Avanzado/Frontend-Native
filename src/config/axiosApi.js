import axios from "axios";

export const axiosAuth = axios.create({
    baseURL: `${process.env.EXPO_PUBLIC_API_URL}`,
    timeout: 120000,
    headers: {
        "Content-Type": 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*'
    }
});
