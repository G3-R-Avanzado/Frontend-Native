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