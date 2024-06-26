import axios from "axios"
import * as FileSystem from 'expo-file-system';

//#region ingreso y registro

export const iniciarSesion =async(usuario)=>{
    try {
        const consulta = await axios.post(process.env.EXPO_PUBLIC_API_URL,{
            email: usuario.email,
            password: usuario.contraseña
        })
        return consulta;
    } catch (error) {
        return (console.log(error))
    }
}
export const registrarUsuario =async(usuario)=>{
    try {
        const consulta = await axios.post(`${process.env.EXPO_PUBLIC_API_URL}/register`,{
            name: usuario.nombre,
            username: usuario.usuario,
            email: usuario.email,
            picture: usuario.foto,
            password: usuario.contraseña
        })
        return consulta;
    } catch (error) {
        return (console.log(error))
    }
}
export const listarUsuarios =async()=>{
    try {
        const consulta = await axios.get(`${process.env.EXPO_PUBLIC_API_URL}/users`)
        return consulta;
    } catch (error) {
        return (console.log(error))
    }
}
//#endregion

//#region publicaciones

export const cargarProductos = async() => {
    try {
        const consulta = await axios.get(`${process.env.EXPO_PUBLIC_API_URL}/publication/getall`)
        return consulta
    } catch (error) {
        return (console.log(error))
    }
}
export const crearProducto = async(producto) => {
    try {
        const consulta = await axios.post(`${process.env.EXPO_PUBLIC_API_URL}/publication`, {
            titulo: producto.titulo,
            description: producto.description,
            image: producto.imagen,
            price: producto.precio,
            category: producto.categoria,
            status: producto.estado,
            user: producto.usuario
        })
        return consulta
    } catch (error) {
        return (console.log(error))
    }
}
export const modificarProducto = async(producto) => {
    try {
        const consulta = await axios.put(`${process.env.EXPO_PUBLIC_API_URL}/publication/update`, {
            _id: producto._id,
            titulo: producto.titulo,
            description: producto.description,
            image: producto.image,
            price: producto.price,
            category: producto.category,
            status: producto.status,
            user: producto.user
        })
        return consulta
    } catch (error) {
        return (console.log(error))
    }
}
export const buscarProductoPorEstado = async(estado) => {
    try {
        const consulta = await axios.get(`${process.env.EXPO_PUBLIC_API_URL}/publication/status/${estado}`)
        return consulta
    } catch (error) {
        return (console.log(error))
    }
}
export const buscarProductoPorUsuario = async(id) => {
    try {
        const consulta = await axios.get(`${process.env.EXPO_PUBLIC_API_URL}/publication/getall/user/${id}`)
        return consulta
    } catch (error) {
        return (console.log(error))
    }
}
export const buscarProductoPorId = async(id) => {
    try {
        const consulta = await axios.get(`${process.env.EXPO_PUBLIC_API_URL}/publication/get/filterpublication/0/${id}`)
        return consulta
    } catch (error) {
        return (console.log(error))
    }
}

//#endregion

//#region categorias

export const crearCategoria = async(categoria) => {
    try {
        const consulta = await axios.get(`${process.env.EXPO_PUBLIC_API_URL}/categories/create` ,{
            name: categoria.nombre,
            subcategories: categoria.subcategoria
        })
        return consulta
    } catch (error) {
        return (console.log(error))
    }
}
export const buscarCategoriaporId = async(id) => {
    try {
        const consulta = await axios.get(`${process.env.EXPO_PUBLIC_API_URL}/categories/${id}`)
        return consulta
    } catch (error) {
        return (console.log(error))
    }
}
export const listarCategorias = async() => {
    try {
        const consulta = await axios.get(`${process.env.EXPO_PUBLIC_API_URL}/categories`)
        return consulta
    } catch (error) {
        return (console.log(error))
    }
}
//#endregion

//#region Management Image
export const convertBase64ToImage = async (Base64) => {
    try {
        return `data:image/jpeg;base64,${Base64}`
    } catch (error) {
        console.log(error);
    }
}

export const createDirectory = async (name) => {
    try {
        const directory = `${FileSystem.documentDirectory}${name}`; 
        const directoryInfo = await FileSystem.getInfoAsync(directory);
        if (!directoryInfo.exists) {
            await FileSystem.makeDirectoryAsync(directory, { intermediates: true });
            return directory;
        } else {
            return directory;
        }
    } catch (error) {
        console.error('Error al crear el directorio:', error);
    }
}
//#endregion