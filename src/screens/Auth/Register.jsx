import React from 'react';
import { StyleSheet, View, Text, TextInput, Image } from 'react-native';
import { stylesNavegation } from '../../styles/globalStyles';
import { Formik } from 'formik';
import { CustomButton } from '../../components/ui/CustomButton';
import Logo from '../../../assets/logo1.png'

export const Register = () => {

    const initialValues = {
        name: '',
        username: '',
        email: '',
        rol: '',
        picture: '',
        password: ''
    }

    return (
        <View style={style.containerRegister}>
            <View style={style.img}>
                <Image
                    source={Logo}
                    style={{
                        width: 200,
                        height: 200
                    }}
                />
            </View>
            <View style={style.form}>
                <Formik
                    initialValues={initialValues}
                >{({ handleSubmit, handleChange, values, handleBlur }) => (
                    <>
                        <TextInput
                            style={style.input}
                            placeholder={'Nombre'}
                            value={values.name}
                        />
                        <TextInput
                            style={style.input}
                            placeholder={'Nombre de usuario'}
                            value={values.username}
                        />
                        <TextInput
                            style={style.input}
                            placeholder={'Email'}
                            value={values.email}
                        />
                        <TextInput
                            style={style.input}
                            placeholder={'Rol'}
                            value={values.rol}
                        />
                        <TextInput
                            style={style.input}
                            placeholder={'Imagen'}
                            value={values.picture}
                        />
                        <TextInput
                            style={style.input}
                            placeholder={'Contraseña'}
                            value={values.password}
                        />
                    </>
                )}
                </Formik>
            </View>
        </View>
    );
};

const style = StyleSheet.create({
    containerRegister: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFE600',
        padding: 10
    },
    input: {
        padding: 10,
        marginVertical: 3,
        backgroundColor: 'white',
        borderRadius: 10
    },
    form: {
        flex: 2,
        width: '100%',
    },
    img: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center'
    }
});