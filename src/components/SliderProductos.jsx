import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View,Dimensions, ScrollView } from 'react-native';
import Card from './Card';
import Spinner from './Spinner';
const { width: ANCHO_PANTALLA } = Dimensions.get("window")

const SliderProductos = ({productosFiltrados,categoria,navigation,boton}) => {
    const [carga, setCarga] = useState(true)
    useEffect(()=>{
        if(productosFiltrados!==""){
            setCarga(false);
        }
    },[])
    return (
        <View style={{marginStart:5}}>
        {carga?
            (<Spinner/>):
            <>
            <Text style={styles.fuentes}>{categoria}</Text>
            <FlatList
                data={productosFiltrados}
                horizontal={true}
                showsHorizontalScrollIndicator={true}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={[styles.contenedorCards, { width: ANCHO_PANTALLA / 2 }]}>
                        <Card navigation={navigation} item={item} botonContenido={boton} ANCHO_PANTALLA={ANCHO_PANTALLA} />
                    </View>
                )} />
                </>
            }
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
export default SliderProductos;