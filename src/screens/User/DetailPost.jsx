import React, { useEffect } from 'react';
import { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Image, ScrollView, KeyboardAvoidingView } from 'react-native';
import { Formik } from 'formik';
import { CustomButton } from '../../components/ui/CustomButton';
import { styleAuth } from '../Auth/styleAuth';

const DetailPost = ({item}) => {
    const [producto, setProducto] = useState("")
    const [carga, setCarga] = useState(false)
    
    
    useEffect(()=>{
        //cargar producto
    },[])

    return (
        <KeyboardAvoidingView style={{flex: 1}} behavior="padding"> 
            <ScrollView contentContainerStyle={{flexGrow: 1}}>
                <View style={[styleAuth.container, style.containerRegister]}>
                    <View style={style.form}>
                        <Formik
                            initialValues={{}}
                            onSubmit={(values)=>console.log(values)}
                            validationSchema={{}}
                        >{({ handleSubmit, handleChange, values, handleBlur, errors, touched }) => (
                            <>
                                <View style={{ flex: 4, justifyContent: 'space-evenly' }}>
                                    <View>
                                        <Text>Titulo de publicacion</Text>
                                        <TextInput
                                            style={styleAuth.input}
                                            placeholder={'Pj. Reloj Smartwatch U8'}
                                            value={values.name}
                                            onChangeText={handleChange('name')}
                                            onBlur={handleBlur('name')}
                                        />
                                        {errors.name && touched.name && <Text style={{ color: 'red' }}>{errors.name}</Text>}
                                    </View>
                                    <View>
                                    <Text>Descripcion</Text>
                                        <TextInput
                                            style={styleAuth.input}
                                            placeholder={'Pj. Caracteristicas, ficha técnica , estado... etc'}
                                            value={values.username}
                                            onChangeText={handleChange('username')}
                                            onBlur={handleBlur('username')}
                                        />
                                        {errors.username && touched.username && <Text style={{ color: 'red' }}>{errors.username}</Text>}
                                    </View>
                                    <View>
                                    <Text>Imagen</Text>
                                        <TextInput
                                            style={styleAuth.input}
                                            placeholder={'Ingrese URL de la imagen de su producto'}
                                            value={values.email}
                                            onChangeText={handleChange('email')}
                                            onBlur={handleBlur('email')}
                                        />
                                        {errors.email && touched.email && <Text style={{ color: 'red' }}>{errors.email}</Text>}
                                    </View>
                                    <View>
                                    <Text>Precio</Text>
                                        <TextInput
                                            style={styleAuth.input}
                                            placeholder={'Pj. 5000$'}
                                            value={values.picture}
                                            onChangeText={handleChange('picture')}
                                            onBlur={handleBlur('picture')}
                                        />
                                    </View>
                                    <View>
                                    <Text>Categoria</Text>
                                        <TextInput
                                            style={styleAuth.input}
                                            placeholder={'Categoria'}
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
export default DetailPost;