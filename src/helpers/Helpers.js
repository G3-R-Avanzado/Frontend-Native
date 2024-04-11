import axios from "axios"

//#region ingreso y registro

export const iniciarSesion =(usuario)=>{
    try {
        const consulta = axios.post(process.env.EXPO_PUBLIC_API_URL,{
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
        const consulta = axios.post(process.env.EXPO_PUBLIC_API_URL+"/register",{
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
        const consulta = axios.get(process.env.EXPO_PUBLIC_API_URL+"/users")
        return consulta;
    } catch (error) {
        return(console.log(error))
    }
}
//#endregion

//#region publicaciones

export const cargarProductos = () => {
    try {
        const consulta = axios.get("https://65e7a2ac53d564627a8f1556.mockapi.io/publication")
        return consulta
    } catch (error) {
        return (console.log(error))
    }
}
export const crearProducto = (producto) => {
    try {
        const consulta = axios.post(process.env.EXPO_PUBLIC_API_URL+"/publication", {
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
        const consulta = axios.put(process.env.EXPO_PUBLIC_API_URL+"/publication/update", {
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
        const consulta = axios.get(process.env.EXPO_PUBLIC_API_URL +"/publication/status"+ estado)
        return consulta
    } catch (error) {
        return (console.log(error))
    }
}
export const buscarProductoPorUsuario = (id) => {
    try {
        const consulta = axios.get(process.env.EXPO_PUBLIC_API_URL +"/getall/user/"+ id)
        return consulta
    } catch (error) {
        return (console.log(error))
    }
}
export const buscarProductoPorId = (id) => {
    try {
        const consulta = axios.get(process.env.EXPO_PUBLIC_API_URL+"/publication/get/filterpublication/0/"+ id)
        return consulta
    } catch (error) {
        return (console.log(error))
    }
}

//#endregion

//#region categorias

export const crearCategoria = (categoria) => {
    try {
        const consulta = axios.get(process.env.EXPO_PUBLIC_API_URL+"/categories/create" ,{
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
        const consulta = axios.get(process.env.EXPO_PUBLIC_API_URL+"/categories/"+id)
        return consulta
    } catch (error) {
        return (console.log(error))
    }
}
export const listarCategorias = () => {
    try {
        const consulta = axios.get(process.env.EXPO_PUBLIC_API_URL+"/categories")
        return consulta
    } catch (error) {
        return (console.log(error))
    }
}
//#endregion