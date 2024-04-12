import React, { useEffect } from 'react';
import { ActivityIndicator, Dimensions, FlatList, Text, StyleSheet, View } from 'react-native';
import Card from '../../components/Card';
import { useState } from 'react';
import { buscarProductoPorUsuario } from "../../helpers/Helpers"
import VisualizadorProductos from '../../components/VisualizadorProductos';
import { useSelector } from 'react-redux';

const Posts = ({navigation}) => {
    const [productos, setProductos] = useState("")
    const { width: ANCHO_PANTALLA } = Dimensions.get("window")
    const [carga, setCarga] = useState(true)
    const boton = "Gestionar"
    const {user} = useSelector((store)=>store.auth)
    
    useEffect(() => {
        buscarProductoPorUsuario(user.id).then((resp) => {
            if (resp.status == 200) {
                /* const publicaciones = (resp.data).filter((item) => item.id === "1");
                console.log(publicaciones); */
                const publicaciones = resp.data
                setProductos(publicaciones)
                setCarga(false)
            } else {
                setCarga(false)
                //mensaje de error al cargar
            }
        })
    }, [])
    return (
        <View>
            {
                carga ?
                    (<View>
                        <ActivityIndicator color="#4285F4" size="large" />
                    </View>) :
                    ((productos.length) > 1 ?
                        (<>
                            {/* <View style={style.contenedorPrincipal}>
                                <FlatList
                                    data={productos}
                                    numColumns={2}
                                    keyExtractor={(item, index) => index.toString()}
                                    renderItem={({ item }) => (
                                        <View style={[style.contenedorCards, { width: ANCHO_PANTALLA / 2.5 }]}>
                                            <Card navigation={navigation}item={item} botonContenido={boton} ANCHO_PANTALLA={ANCHO_PANTALLA} />
                                        </View>
                                    )} />
                            </View> */}
                            <VisualizadorProductos boton={boton} productos={productos}navigation={navigation}/>
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