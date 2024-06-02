import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Linking } from 'react-native';
import { Formik } from 'formik';
import { CustomButton } from '../../components/ui/CustomButton';
import Logo from '../../../assets/logo1.png'
import { useNavigation } from '@react-navigation/native';
import { styleAuth } from './styleAuth';
import { useDispatch, useSelector } from 'react-redux'
import { validationAuthUser } from '../../config/schemas';  
import { getLogin } from '../../store/Slices/auth/authThunks';
import { getAllPublicationUser } from '../../store/Slices/publication/publicationThunks';
import useAlert from '../../hooks/useAlert';

export const Login = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const{showAlert}=useAlert()
    const initialValues = {
        email: 'agustinSanchez@gmail.com',
        password: '123456789'
    }

    const handleLoginFormik = (values) => {
        dispatch(getLogin(values.email, values.password))
    }

    return (
        <View style={styleAuth.container}>
            <View style={style.logo}>
                <Image
                    source={Logo}
                    style={{
                        width: 200,
                        height: 150
                    }}
                />
                <Text style={styleAuth.title}>TucuLibre</Text>
            </View>
            <View style={style.form}>
                <Formik
                    initialValues={initialValues}
                    onSubmit={handleLoginFormik}
                    validationSchema={validationAuthUser}
                >{({ handleSubmit, handleChange, values, handleBlur, errors, touched }) => (
                    <>
                        <TextInput
                            style={styleAuth.input}
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            placeholder='email'
                        />
                        {errors.email  && touched.email && <Text style={{color: 'red'}}>{errors.email}</Text>}
                        <TextInput
                            style={styleAuth.input}
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                            secureTextEntry={true}
                            placeholder='contraseña'
                        />
                        {errors.password && touched.password && <Text style={{color: 'red'}}>{errors.password}</Text>}
                        <CustomButton
                            text={'Iniciar sesión'}
                            onClick={handleSubmit}
                            color='white'
                        />
                    </>
                )}
                </Formik>
                <TouchableOpacity onPress={() => showAlert({ messageTitle: "¡Ups!", messageBody: "Estamos trabajando aun en mejorar. Disculpe las molestias" })}>
                    <Text style={{ textAlign: 'center' }}>Olvidaste tu contraseña?</Text>
                </TouchableOpacity>
            </View>
            <View style={style.register}>
            <TouchableOpacity onPress={() => { Linking.openURL("https://tuculibre.netlify.app/") }}>
                    <Text style={{ color:"blue" }}>Eres Administrador? Ingresá por aqui!</Text>
                </TouchableOpacity>
                <CustomButton
                    text={'Registrarme'}
                    onClick={()=>navigation.navigate('Register')}
                    color='white'
                />
            </View>
        </View>
    );
};


const style = StyleSheet.create({
    logo: {
        flex: 2,
        justifyContent: 'center',   
        alignItems: 'center'
    },
    register: {
        flex: 1,
        justifyContent: 'flex-center'
    }, 
    form: {
        flex: 2,
        width: '100%',
    }
})