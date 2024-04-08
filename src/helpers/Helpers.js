import axios from "axios"

//#region Ingreso y registro

export const iniciarSesion =(usuario)=>{
    try {
        const consulta = axios.post(import.meta.env.VITE_API_LOGIN,{
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
        const consulta = axios.post(import.meta.env.VITE_API_REGISTER,{
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
        const consulta = axios.get(import.meta.env.VITE_API_GETALL_USERS)
        return consulta;
    } catch (error) {
        return(console.log(error))
    }
}
//#endregion

//#region publicaciones

export const cargarProductos = () => {
    try {
        const consulta = axios.get(import.meta.env.VITE_API_GETALL_POST)
        return consulta
    } catch (error) {
        return (console.log(error))
    }
}
export const crearProducto = (producto) => {
    try {
        const consulta = axios.post(import.meta.env.VITE_API_CREATE_POST, {
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
        const consulta = axios.put(import.meta.env.VITE_API_UPDATE_POST, {
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
        const consulta = axios.get(import.meta.env.VITE_API_GETBYSTATUS_POST + estado)
        return consulta
    } catch (error) {
        return (console.log(error))
    }
}
export const buscarProductoPorUsuario = (id) => {
    try {
        const consulta = axios.get(import.meta.env.VITE_API_GETBYUSER_POST + id)
        return consulta
    } catch (error) {
        return (console.log(error))
    }
}
export const buscarProductoPorId = (id) => {
    try {
        const consulta = axios.get(import.meta.env.VITE_API_GETBYID_POST + id)
        return consulta
    } catch (error) {
        return (console.log(error))
    }
}

//#endregion

//#region categorias

export const crearCategoria = (categoria) => {
    try {
        const consulta = axios.get(import.meta.env.VITE_API_CREATE_CATEGORY ,{
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
        const consulta = axios.get(import.meta.env.VITE_API_GETBYID_CATEGORY+id)
        return consulta
    } catch (error) {
        return (console.log(error))
    }
}
export const listarCategorias = () => {
    try {
        const consulta = axios.get(import.meta.env.VITE_API_GETALL_CATEGORY)
        return consulta
    } catch (error) {
        return (console.log(error))
    }
}
//#endregion