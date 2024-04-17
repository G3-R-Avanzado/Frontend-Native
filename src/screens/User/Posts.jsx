import React, { useEffect } from 'react';
import { ActivityIndicator, Text, StyleSheet, View } from 'react-native';
import Card from '../../components/Card';
import { useState } from 'react';
import { buscarProductoPorUsuario } from "../../helpers/Helpers"
import VisualizadorProductos from '../../components/VisualizadorProductos';
import { useSelector, useDispatch } from 'react-redux';
import { getAllPublicationUser } from '../../store/Slices/publication/publicationThunks';



const Posts = ({navigation}) => {
    const [productos, setProductos] = useState("")
    const [carga, setCarga] = useState(true)
    const boton = "Gestionar"

    const {user} = useSelector((store)=>store.auth)
    const {publicationsUser} = useSelector((store)=>store.publication)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getAllPublicationUser(user.id))
        setCarga(false)
    },[user])

    useEffect(()=>{
        setProductos(publicationsUser)
    },[publicationsUser])
    
    return (
        <View>
            {
                carga ?
                    (<View>
                        <ActivityIndicator color="#4285F4" size="large" />
                    </View>) :
                    ((productos.length) > 1 ?
                        (<>
                            <VisualizadorProductos boton={boton} productos={productos} navigation={navigation}/>
                        </>) :
                        (<View>
                            <Text>No hay publicaciones para mostrar.</Text>
                        </View>
                        ))
            }
        </View>
    );
};
const style = StyleSheet.create({
    contenedorCards: {
        flex: 5,
        justifyContent: "center",
        margin: 2,
    },
    fuentes: {
        fontSize: 20
    },
    contenedorPrincipal: {
        margin: 5
    }
})
export default Posts;