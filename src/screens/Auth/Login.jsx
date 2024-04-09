import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { Formik } from 'formik';
import { CustomButton } from '../../components/ui/CustomButton';
import Logo from '../../../assets/logo1.png'
import { useNavigation } from '@react-navigation/native';
import { validationAuthUser } from '../../helpers/Helpers';
import { styleAuth } from './styleAuth';

import { useDispatch, useSelector } from 'react-redux'
import { getLogin } from '../../store/Slices/auth/authThunks';

export const Login = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const initialValues = {
        email: 'g3admin@gmail.com',
        password: 'g3-admin'
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
                            text={'Login'}
                            onClick={handleSubmit}
                            color='white'
                        />
                    </>
                )}
                </Formik>

                <TouchableOpacity onPress={() => { console.log("Olvidate tu contraseña"); }}>
                    <Text style={{ textAlign: 'center' }}>Olvidate tu contraseña?</Text>
                </TouchableOpacity>
            </View>
            <View style={style.register}>
                <CustomButton
                    text={'Register'}
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
        justifyContent: 'flex-end'
    }, 
    form: {
        flex: 2,
        width: '100%',
    }
})