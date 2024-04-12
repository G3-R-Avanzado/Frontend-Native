import React, { useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, Image, ScrollView, KeyboardAvoidingView } from 'react-native';
import { Formik } from 'formik';
import { CustomButton } from '../../components/ui/CustomButton';
import Logo from '../../../assets/logo1.png'
import { styleAuth } from './styleAuth';
import { validationRegisterUser } from '../../helpers/Helpers';
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../../store/Slices/auth/authThunks';


export const Register = () => {
    const dispatch = useDispatch();
    const {isLogged} = useSelector((store)=>store.auth)

    const initialValues = {
        name: 'Agustin Sanchez',
        username: 'agustinSanchez',
        email: 'agustinSanchez@gmail.com',
        picture: 'imagen de prueba',
        password: '123456789'
    }

    const handleSubmitFormik = (values) => {
        dispatch(register(values))
    }

    useEffect(()=>{
        isLogged && console.log("logeado");
    },[isLogged])

    return (
        <KeyboardAvoidingView style={{flex: 1}} behavior="padding"> 
            <ScrollView contentContainerStyle={{flexGrow: 1}}>
                <View style={[styleAuth.container, style.containerRegister]}>
                    <View style={style.img}>
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
                            onSubmit={handleSubmitFormik}
                            validationSchema={validationRegisterUser}
                        >{({ handleSubmit, handleChange, values, handleBlur, errors, touched }) => (
                            <>
                                <View style={{ flex: 4, justifyContent: 'space-evenly' }}>
                                    <View>
                                        <TextInput
                                            style={styleAuth.input}
                                            placeholder={'Nombre'}
                                            value={values.name}
                                            onChangeText={handleChange('name')}
                                            onBlur={handleBlur('name')}
                                        />
                                        {errors.name && touched.name && <Text style={{ color: 'red' }}>{errors.name}</Text>}
                                    </View>
                                    <View>
                                        <TextInput
                                            style={styleAuth.input}
                                            placeholder={'Nombre de usuario'}
                                            value={values.username}
                                            onChangeText={handleChange('username')}
                                            onBlur={handleBlur('username')}
                                        />
                                        {errors.username && touched.username && <Text style={{ color: 'red' }}>{errors.username}</Text>}
                                    </View>
                                    <View>
                                        <TextInput
                                            style={styleAuth.input}
                                            placeholder={'Email'}
                                            value={values.email}
                                            onChangeText={handleChange('email')}
                                            onBlur={handleBlur('email')}
                                        />
                                        {errors.email && touched.email && <Text style={{ color: 'red' }}>{errors.email}</Text>}
                                    </View>
                                    <View>
                                        <TextInput
                                            style={styleAuth.input}
                                            placeholder={'Imagen'}
                                            value={values.picture}
                                            onChangeText={handleChange('picture')}
                                            onBlur={handleBlur('picture')}
                                        />
                                    </View>
                                    <View>
                                        <TextInput
                                            style={styleAuth.input}
                                            placeholder={'Contraseña'}
                                            value={values.password}
                                            onChangeText={handleChange('password')}
                                            onBlur={handleBlur('password')}
                                        />
                                        {errors.password && touched.password && <Text style={{ color: 'red' }}>{errors.password}</Text>}
                                    </View>
                                </View>
                                <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                                    <CustomButton
                                        text={'Registrar'}
                                        onClick={handleSubmit}
                                        color='white'
                                    />
                                </View>
                            </>
                        )}
                        </Formik>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>


    );
};

const style = StyleSheet.create({
    containerRegister: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center'
    },
    form: {
        flex: 2,
        width: '100%'
    }
});