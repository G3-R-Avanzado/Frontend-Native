import { View, Text, FlatList, StyleSheet, DimensionValue, Dimensions, ActivityIndicator } from "react-native";
import Card from "../../components/Card";
import { useEffect, useState } from "react";
import { cargarProductos } from "../../helpers/Helpers"
const { width: ANCHO_PANTALLA } = Dimensions.get("window")

const MostSeller = () => {
    const [productos, setProductos] = useState()
    const [carga, setCarga] = useState(true)
    const boton = "Ver detalle"
    useEffect(() => {
        cargarProductos().then((resp) => {
            if (resp.status == 200) {
                setProductos(resp.data)
                setCarga(false)
            } else {
                setCarga(false)
                //mensaje de error al cargar
            }
        })
    }, [])

    return (
        <View style={styles.contenedor}>
            <Text style={styles.fuentes}>Lo mas vendido!</Text>
            <View>
                {
                    carga ? (
                        <View>
                            <ActivityIndicator color="#4285F4" size="large" />
                        </View>
                    ) :
                        (
                            <FlatList
                                data={productos}
                                horizontal={true}
                                showsHorizontalScrollIndicator={true}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={({ item }) => (
                                    <View style={[styles.contenedorCards, { width: ANCHO_PANTALLA / 2 }]}>
                                        <Card item={item} botonContenido={boton} ANCHO_PANTALLA={ANCHO_PANTALLA} />
                                    </View>
                                )} />
                        )
                }
            </View>
        </View>
    );

};
const styles = StyleSheet.create({
    contenedor: {
        flex: 10,
        marginLeft: 5,
        alignItems: "start"
    },
    contenedorCards: {
        height: 200,
        width: 200,
        margin: 4,
    },
    fuentes: {
        fontSize: 20
    },
    
})
export default MostSeller;