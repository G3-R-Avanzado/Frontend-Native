import { View, Text, FlatList, StyleSheet, DimensionValue, Dimensions, ActivityIndicator } from "react-native";
import Card from "../../components/Card";
import { useEffect, useState } from "react";
import { cargarProductos } from "../../helpers/Helpers"
import SliderProductos from "../../components/SliderProductos";
import Spinner from "../../components/Spinner";
const { width: ANCHO_PANTALLA } = Dimensions.get("window")

const MostSeller = ({ navigation }) => {
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
            <View>
                {
                    carga ?
                        (<Spinner />) :
                        (<>
                        <SliderProductos boton={boton} productos={productos} navigation={navigation} />
                        <SliderProductos boton={boton} productos={productos} navigation={navigation}/>
                        </>)
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