import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TextInput, Image, ScrollView, KeyboardAvoidingView } from 'react-native';
import { Formik } from 'formik';
import { CustomButton } from '../../components/ui/CustomButton';
import Logo from '../../../assets/logo1.png'
import { styleAuth } from './styleAuth';
import { useDispatch, useSelector } from 'react-redux'
import { register, updateUser , logOut} from '../../store/Slices/auth/authThunks';
import { validationRegisterUser, validationUpdateUser } from '../../config/schemas';
import InputImage from '../../components/ui/InputImage';
import Spinner from '../../components/Spinner';
import useAlert from '../../hooks/useAlert';
import { object } from 'yup';

const Register = ({showLogo, textConfirm }) => {
    const {user, message} = useSelector((store)=>store.auth)
    const [image, setImage] = useState(user.picture != null ? {base64: user.picture}: null);
    const dispatch = useDispatch();
    const [showSpinner, setShowSpinner] = useState(true)
    const {showAlert}=useAlert();

    const initialValues = {
        name: user.name ? user.name : '',
        username: user.username ? user.username : '',
        email: user.email ? user.email : '',
        password: user.password ? user.password : ''
    }

    useEffect(()=>{
        if(user.id == null){
            dispatch(logOut());
        }
    },[])

    const handleSubmitFormik = (values) => {
        setShowSpinner(false)
        
        if(user.email!=null){
            dispatch(updateUser({...values, picture: image != null ? image.base64 : ''})).then(()=>{
                setShowSpinner(true)
            })
        }else {
            dispatch(register({...values, picture: image != null ? image.base64 : ''})).then(()=>{
                setShowSpinner(true)
            })
        }
        if(values.username!==null && values.password!==null&& values.name!==null )
        showAlert({messageTitle:"Registro exitoso!",messageBody:"¡Bienvenido a Tucu Libre!"})
    }

    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding"> 
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={[styleAuth.container, style.containerRegister]}>
                    {showLogo &&
                        <View style={style.img}>
                            <Image
                                source={Logo}
                                style={{
                                    width: 200,
                                    height: 150,
                                }}
                            />
                            <Text style={styleAuth.title}>TucuLibre</Text>
                        </View>}
                    <View style={style.form}>
                        <Formik
                            initialValues={initialValues}
                            onSubmit={handleSubmitFormik}
                            validationSchema={!user.email ? validationRegisterUser : validationUpdateUser}
                        >{({ handleSubmit, handleChange, values, handleBlur, errors, touched }) => (
                            <>
                                <View style={{ flex: 4, justifyContent: 'space-evenly' }}>
                                    <View>
                                        <View style={{flex:1, flexDirection: 'row'}}>
                                            <View style={style.inputImage} >
                                                <InputImage 
                                                    image={image}
                                                    setImage={setImage}
                                                    
                                                />
                                            </View>
                                            <View style={{flex: 5, justifyContent: 'center', paddingLeft: 5}}>
                                                <TextInput
                                                    style={styleAuth.input}
                                                    placeholder={'Nombre'}
                                                    value={values.name}
                                                    onChangeText={handleChange('name')}
                                                    onBlur={handleBlur('name')}
                                                />
                                                {errors.name && touched.name && <Text style={{ color: 'red' }}>{errors.name}</Text>}
                                            </View>
                                        </View>
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
                                    {!user.email && <View>
                                        <TextInput
                                            style={styleAuth.input}
                                            placeholder={'Contraseña'}
                                            value={values.password}
                                            onChangeText={handleChange('password')}
                                            secureTextEntry={true}
                                            onBlur={handleBlur('password')}
                                        />
                                        {errors.password && touched.password && <Text style={{ color: 'red' }}>{errors.password}</Text>}
                                    </View>}
                                </View>
                                <View style={{ flex: 1, justifyContent: 'flex-center' }}>
                                    {showSpinner ? 
                                    <>
                                        <Text style={{ color: 'red' }}>{message != null && message.type == 'error' ? message.text : ''}</Text>
                                            <CustomButton
                                                text={textConfirm}
                                                onClick={handleSubmit}
                                                color='white'
                                            />
                                    </>: <Spinner/>}
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

Register.defaultProps = {
    showLogo: true,
    textConfirm: 'Registrar'
}

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
        flex: 4,
        width: '100%'
    },
    inputImage: {
        height: 100, 
        flex: 2,
    }
});

export default Register;