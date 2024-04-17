import { ActivityIndicator, Dimensions, FlatList, Text, StyleSheet, View } from 'react-native';
import Card from './Card';

const VisualizadorProductos = ({boton,productos,navigation}) => {
    const { width: ANCHO_PANTALLA } = Dimensions.get("window")
    
    return (
        <View style={style.contenedorPrincipal}>
        <FlatList
            data={productos}
            numColumns={2}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
                <View style={[style.contenedorCards, { width: ANCHO_PANTALLA / 2.5 }]}>
                    <Card 
                        navigation={navigation}
                        item={item} 
                        botonContenido={boton} 
                        ANCHO_PANTALLA={ANCHO_PANTALLA} 
                    />
                </View>
            )} />
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
export default VisualizadorProductos;