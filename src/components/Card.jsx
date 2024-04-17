import { useEffect, useState } from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity, TouchableHighlight } from "react-native";
import DetailProduct from "../screens/Product/DetailProduct";

const Card = ({ item, ANCHO_PANTALLA,navigation, botonContenido }) => {
    const [boton, setBoton] = useState(botonContenido)
    useEffect(()=>{console.log("hola");},[])
    useEffect(() => {
        if (boton == "Gestionar") {

        } else {
            
        }
    }, [])
    const onPress = () => {
        if(boton=="Ver detalle"){
            navigation.navigate('DetailProduct', { selectedItem: item });
        }else{
            navigation.navigate('DetailPost', { selectedItem: item });
        }
    };
    return (
        <View  style={[styles.container]}>
                <Image style={styles.imagen} source={{ uri: item.image }} />
                <Text numberOfLines={2} style={styles.DescripcionTexto}>{item.description}</Text>
                <Text style={styles.nombre}>{item.titulo}</Text>
                <Text>{item.price}$</Text>
                <TouchableHighlight  style={styles.button} onPress={onPress}>
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