import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { stylesNavegation } from '../../styles/globalStyles';
import { Form, Formik } from 'formik';
import { CustomButton } from '../../components/ui/CustomButton';
import Logo from '../../../assets/logo1.png'
import { useNavigation } from '@react-navigation/native';


export const Login = () => {
    const navigation = useNavigation();
    const initialValues = {
        email: 'agustin.sanchez@example.com',
        password: 'asdasdasdsa'
    }
    const handleLoginFormik = (values) => {
        console.log(values);
    }

    return (
        <View style={style.container}>
            <View style={style.logo}>
                <Image
                    source={Logo}
                    style={{
                        width: 200,
                        height: 200
                    }}
                />
                <Text style={style.title}>TucuLibre</Text>
            </View>
            <View style={style.form}>
                <Formik
                    initialValues={initialValues}
                    onSubmit={handleLoginFormik}
                >{({ handleSubmit, handleChange, values, handleBlur }) => (
                    <>
                        <TextInput
                            style={style.input}
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                        />
                        <TextInput
                            style={style.input}
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                        />
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
                    onClick={()=>navigation.navigate('register')}
                    color='white'
                />
            </View>
        </View>
    );
};
const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFE600',
        padding: 10
    },
    logo: {
        flex: 2,
        justifyContent: 'center',   
        alignItems: 'center'
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold'
    },
    form: {
        flex: 2,
        width: '100%',
    },
    input: {
        padding: 10,
        marginVertical: 3,
        backgroundColor: 'white',
        borderRadius: 10
    },
    register: {
        flex: 1,
        justifyContent: 'flex-end'
    }
})