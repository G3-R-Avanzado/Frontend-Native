import { useEffect, useState } from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity, TouchableHighlight } from "react-native";

const Card = ({ item, ANCHO_PANTALLA,navigation, botonContenido }) => {
    const [boton, setBoton] = useState(botonContenido)

    useEffect(() => {
        if (boton == "Gestionar") {

        } else {

        }
    }, [])
    const onPress = () => {

    }
    return (
        <View  style={[styles.container]}>
            
                <Image style={styles.imagen} source={{ uri: item.Image }} />
                <Text numberOfLines={2} style={styles.DescripcionTexto}>{item.Description}</Text>
                <Text style={styles.nombre}>{item.Titulo}</Text>
                <Text>{item.Price}$</Text>
                <TouchableHighlight  style={styles.button} onPress={() =>navigation.navigate("DetailPost")} >
                <View>
                    <Text style={styles.ContenidoBoton}>{boton}</Text>
                </View>
                </TouchableHighlight>
            
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 10,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 5,
        borderRadius: 10,
        borderWidth: 0.7,
        width: "95%",
        height: "80%",
    },
    imagen: {
        width: 100,
        height: 100,
        margin: 5,
        flex: 1,
        objectFit: "contain",
        justifyContent: "center"
    },
    ContenidoBoton: {
        color: "white",
        width:"70px",
        height:"10px",
        
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#4285F4',
        padding: 10,
        borderRadius: 20
    },
    DescripcionTexto: {
        fontSize: 12,
        color: "gray",

    }
})
export default Card;