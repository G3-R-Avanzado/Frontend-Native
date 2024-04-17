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
import { useDispatch } from 'react-redux';
import { getCategories } from '../../store/Slices/publication/publicationThunks';

import {Picker} from '@react-native-picker/picker';


const DetailPost = ({ item, route }) => {
    const { selectedItem } = route.params;

    const [producto, setProducto] = useState("")
    const [carga, setCarga] = useState(false)
    const [categories, setCategories] = useState([])
    const [categorieSelected, setCategorieSelected] = useState(selectedItem.category.name)

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
        image: selectedItem.image,
        price: selectedItem.price.toString(),
        category: selectedItem.category.name
    }

    const handleSubmitFormik = async (values)=>{
        modificarProducto({...values, 
            ["price"]: parseInt(values.price),
            ["user"]: selectedItem.user,
            ["status"]: selectedItem.status,
            ["_id"]: selectedItem._id
        }).then(()=>{
            Toast.show({
                type: ALERT_TYPE.SUCCESS,
                title: 'Publicacion modificada con exito',
            })
            navigation.navigate('Mis publicaciones')
        });
        
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
                        >{({ handleSubmit, handleChange, values, handleBlur, errors, touched }) => (
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
                                        <Text>Imagen</Text>
                                        <TextInput
                                            style={styleAuth.input}
                                            name="image"
                                            placeholder={'Ingrese URL de la imagen de su producto'}
                                            value={values.image}
                                            onChangeText={handleChange('image')}
                                            onBlur={handleBlur('image')}
                                        />
                                        {errors.image && touched.image && <Text style={{ color: 'red' }}>{errors.image}</Text>}
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
                                        <TextInput
                                            style={styleAuth.input}
                                            placeholder={'category'}
                                            value={values.category}
                                            onChangeText={handleChange('category')}
                                            onBlur={handleBlur('category')}
                                        />
                                        {errors.category && touched.category && <Text style={{ color: 'red' }}>{errors.category}</Text>}
                                    </View>
                                    <View>
                                        <Picker
                                            selectedValue={categorieSelected}
                                            onValueChange={(itemValue, itemIndex) =>
                                                setCategorieSelected(itemValue)
                                            }
                                            style={{backgroundColor: 'white'}}
                                        >
                                            {categories.map((categorie)=>{
                                                return <Picker.Item label={categorie.name} value={categorie._id} />
                                            })}
                                        </Picker>
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