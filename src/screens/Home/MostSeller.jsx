import { View, Text, FlatList, StyleSheet, DimensionValue, Dimensions, ActivityIndicator, ScrollView } from "react-native";
import Card from "../../components/Card";
import { useEffect, useState } from "react";
import { cargarProductos, listarCategorias } from "../../helpers/Helpers"
import SliderProductos from "../../components/SliderProductos";
import Spinner from "../../components/Spinner";

const MostSeller = ({ navigation }) => {
    const [productos, setProductos] = useState([])
    const [categoria, setCategoria] = useState([])
    const [carga, setCarga] = useState(true)
    const boton = "Ver detalle"
    useEffect(() => {
        listarCategorias().then((resp) => {
            if (resp.status == 200) {
                const categorias = resp.data.map((item) => ({ id: item._id, name: item.name }));
                setCategoria(categorias);
            }
        })
        cargarProductos().then((resp) => {
            if (resp.status == 200) {
                setProductos(resp.data)
            } else {
                //mensaje de error al cargar
            }
        }
        )
    }, [])
    useEffect(() => {
        if (categoria.length > 2) {
            setCarga(false)
        }
    }, [categoria])
    return (
        <ScrollView >
            <View>
                {
                    carga ?
                        (<Spinner />) :
                        (<>
                            {
                                <>
                                    {categoria.map((categoria, index) => {
                                        const productosFiltrados = productos.filter((producto) => producto.category._id === categoria.id);
                                        return (
                                            <SliderProductos
                                                key={index}
                                                boton={boton}
                                                categoria={categoria.name}
                                                productosFiltrados={productosFiltrados}
                                                navigation={navigation}
                                            />
                                        );
                                    })}
                                </>
                            }
                            <SliderProductos boton={boton} productos={productos} navigation={navigation}/>
                        </>)
                }
            </View>
        </ScrollView>
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