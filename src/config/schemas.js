import * as yup from "yup";

export const validationAuthUser = yup.object().shape({ 
    email: yup.string().email("debe ingresar un email").required("Campo requerido"),
    password: yup.string().required("Campo requerido")
})
export const validationRegisterUser = yup.object().shape({
    name: yup.string().required("Campo requerido"),
    username: yup.string().required("Campo requerido"),
    email: yup.string().email("debe ingresar un email").required("Campo requerido"),
    password: yup.string().required("Campo requerido")
});

export const validationUpdateUser = yup.object().shape({
    name: yup.string().required("Campo requerido"),
    username: yup.string().required("Campo requerido"),
    email: yup.string().email("debe ingresar un email").required("Campo requerido"),
});

export const validationPublication = yup.object().shape({
    titulo: yup.string().required("Campo requerido"),
    description: yup.string().required("Campo requerido"),
    price: yup.string("debe ser un numero").required("Campo requerido"),
    category: yup.string().required("Campo requerido")
});