import React from 'react';
import { FlatList, StyleSheet, Text, View,Dimensions } from 'react-native';
import Card from './Card';
const { width: ANCHO_PANTALLA } = Dimensions.get("window")

const VisualizadorProductos = ({productos,navigation,boton}) => {
    return (
        <View>
            <Text style={styles.fuentes}>Lo mas vendido!</Text>
            <FlatList
                data={productos}
                horizontal={true}
                showsHorizontalScrollIndicator={true}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={[styles.contenedorCards, { width: ANCHO_PANTALLA / 2 }]}>
                        <Card navigation={navigation} item={item} botonContenido={boton} ANCHO_PANTALLA={ANCHO_PANTALLA} />
                    </View>
                )} />
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
export default VisualizadorProductos;