import axios from "axios"

//#region ingreso y registro

export const iniciarSesion =(usuario)=>{
    try {
        const consulta = axios.post(process.env.EXPO_PUBLIC_API_LOGIN_URL,{
            email: usuario.email,
            password: usuario.contraseña
        })
        return consulta;
    } catch (error) {
        return(console.log(error))
    }
}
export const registrarUsuario =(usuario)=>{
    try {
        const consulta = axios.post(process.env.EXPO_PUBLIC_API_REGISTER_URL,{
            name: usuario.nombre,
            username: usuario.usuario,
            email: usuario.email,
            picture: usuario.foto,
            password: usuario.contraseña
        })
        return consulta;
    } catch (error) {
        return(console.log(error))
    }
}
export const listarUsuarios =()=>{
    try {
        const consulta = axios.get(process.env.EXPO_PUBLIC_API_GETALL_USERS_URL)
        return consulta;
    } catch (error) {
        return(console.log(error))
    }
}
//#endregion

//#region publicaciones

export const cargarProductos = () => {
    try {
        const consulta = axios.get(process.env.EXPO_PUBLIC_API_GETALL_POST_URL)
        return consulta
    } catch (error) {
        return (console.log(error))
    }
}
export const crearProducto = (producto) => {
    try {
        const consulta = axios.post(process.env.EXPO_PUBLIC_API_CREATE_POST_URL, {
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
export const modificarProducto = (producto) => {
    try {
        const consulta = axios.put(process.env.EXPO_PUBLIC_API_UPDATE_POST_URL, {
            _id: producto.id,
            titulo: producto.titulo,
            description: producto.descripcion,
            image: producto.imagen,
            price:producto.precio,
            category: producto.categoria,
            status: producto.estado,
            user: producto.usuario
        })
        return consulta
    } catch (error) {
        return (console.log(error))
    }
}
export const buscarProductoPorEstado = (estado) => {
    try {
        const consulta = axios.get(process.env.EXPO_PUBLIC_API_GETBYSTATUS_POST_URL + estado)
        return consulta
    } catch (error) {
        return (console.log(error))
    }
}
export const buscarProductoPorUsuario = (id) => {
    try {
        const consulta = axios.get(process.env.EXPO_PUBLIC_API_GETBYUSER_POST_URL + id)
        return consulta
    } catch (error) {
        return (console.log(error))
    }
}
export const buscarProductoPorId = (id) => {
    try {
        const consulta = axios.get(process.env.EXPO_PUBLIC_API_GETBYID_POST_URL + id)
        return consulta
    } catch (error) {
        return (console.log(error))
    }
}

//#endregion

//#region categorias

export const crearCategoria = (categoria) => {
    try {
        const consulta = axios.get(process.env.EXPO_PUBLIC_API_CREATE_CATEGORY_URL ,{
            name: categoria.nombre,
            subcategories: categoria.subcategoria
        })
        return consulta
    } catch (error) {
        return (console.log(error))
    }
}
export const buscarCategoriaporId = (id) => {
    try {
        const consulta = axios.get(process.env.EXPO_PUBLIC_API_GETBYID_CATEGORY_URL+id)
        return consulta
    } catch (error) {
        return (console.log(error))
    }
}
export const listarCategorias = () => {
    try {
        const consulta = axios.get(process.env.EXPO_PUBLIC_API_GETALL_CATEGORY_URL)
        return consulta
    } catch (error) {
        return (console.log(error))
    }
}
//#endregion