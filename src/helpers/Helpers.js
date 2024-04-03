import axios from "axios"



export const cargarProductos =()=>{
    try {
        const consulta = axios.get("https://65e7a2ac53d564627a8f1556.mockapi.io/publication")
        return consulta
    } catch (error) {
        return(console.log(error))
    }
}