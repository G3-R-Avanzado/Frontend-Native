import React, { useEffect } from 'react';
import { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Image, ScrollView, KeyboardAvoidingView } from 'react-native';
import { Formik } from 'formik';
import { CustomButton } from '../../components/ui/CustomButton';
import { styleAuth } from '../Auth/styleAuth';
import { validationPublication } from '../../config/schemas';
import { modificarProducto } from '../../helpers/Helpers';
import { useNavigation } from '@react-navigation/native';
import { ALERT_TYPE, Toast } from 'react-native-alert-notification';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories, updatePublication } from '../../store/Slices/publication/publicationThunks';

import {Picker} from '@react-native-picker/picker';
import InputImage from '../../components/ui/InputImage';


const DetailPost = ({ item, route }) => {
    const { selectedItem } = route.params;

    const [producto, setProducto] = useState("")
    const [carga, setCarga] = useState(false)
    const [categories, setCategories] = useState([])
    const [image, setImage] = useState({base64: selectedItem.image});

    const navigation = useNavigation();

    const dispatch = useDispatch();
    
    useEffect(()=>{
        loadCategories();
    },[])

    const loadCategories = async () => {
        const categories = await dispatch(getCategories());
        setCategories(categories)
    }

    const initialValues = {
        titulo: selectedItem.titulo,
        description: selectedItem.description,
        price: selectedItem.price.toString(),
        category: selectedItem.category._id
    }

    const handleSubmitFormik = async (values)=>{
        const Publication = {
            ...values, 
            ["price"]: parseInt(values.price),
            ["user"]: selectedItem.user._id,
            ["status"]: selectedItem.status._id,
            ["_id"]: selectedItem._id,
            ["image"]: image.base64
        }
        console.log(values)
        await dispatch(updatePublication(Publication))

        navigation.navigate('Mis publicaciones')
    }

    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={[styleAuth.container, style.containerRegister]}>
                    <View style={style.form}>
                        <Formik
                            initialValues={initialValues}
                            onSubmit={handleSubmitFormik}
                            validationSchema={validationPublication}
                        >{({ handleSubmit, handleChange, values, handleBlur, errors, touched , setFieldValue}) => (
                            <>
                                <View style={{ flex: 4, justifyContent: 'space-evenly' }}>
                                    <View>
                                        <Text>Titulo de publicacion</Text>
                                        <TextInput
                                            style={styleAuth.input}
                                            name="Titulo"
                                            placeholder={'Pj. Reloj Smartwatch U8'}
                                            value={values.titulo}
                                            onChangeText={handleChange('titulo')}
                                            onBlur={handleBlur('titulo')}
                                        />
                                        {errors.titulo && touched.titulo && <Text style={{ color: 'red' }}>{errors.titulo}</Text>}
                                    </View>
                                    <View style={style.inputImageContainer}>
                                        <View style={style.inputImage}>
                                            <InputImage 
                                                image={image}
                                                setImage={setImage}
                                            />
                                        </View>
                                    </View>
                                    <View>
                                        <Text>Descripcion</Text>
                                        <TextInput
                                            style={styleAuth.input}
                                            name="description"
                                            placeholder={'Pj. Caracteristicas, ficha técnica , estado... etc'}
                                            value={values.description}
                                            onChangeText={handleChange('description')}
                                            onBlur={handleBlur('description')}
                                        />
                                        {errors.description && touched.description && <Text style={{ color: 'red' }}>{errors.description}</Text>}
                                    </View>
                                    <View>
                                        <Text>Precio</Text>
                                        <TextInput
                                            style={styleAuth.input}
                                            name="price"
                                            value={values.price}
                                            onChangeText={handleChange('price')}
                                            onBlur={handleBlur('price')}
                                        />

                                        {errors.price && touched.price && <Text style={{ color: 'red' }}>{errors.price}</Text>}
                                    </View>
                                    <View>
                                        <Text>Categoria</Text>
                                        <Picker
                                            selectedValue={values.category}
                                            onValueChange={(itemValue, itemIndex) =>
                                                setFieldValue('category', itemValue)
                                            }
                                            style={{backgroundColor: 'white'}}
                                        >
                                            {categories.map((category, index)=>{
                                                return <Picker.Item key={index} label={category.name} value={category._id} />
                                            })}
                                        </Picker>
                                    </View>
                                </View>
                                <View style={{ flex: 1, justifyContent: 'flex-center' }}>
                                    <CustomButton
                                        text={'Registrar cambios'}
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
    },
    inputImage: {
        width: '50%',
        height: 200, 
    },
    inputImageContainer:{
        display: 'flex',
        alignItems: 'center'
    }
});
export default DetailPost;