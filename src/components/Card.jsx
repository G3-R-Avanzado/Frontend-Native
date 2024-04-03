import { View,Image,Text, StyleSheet} from "react-native";

const Card = ({item,ANCHO_PANTALLA}) => {
    return (
        <View style={[styles.container]}>   
            <Image style={styles.imagen} source={{uri: item.imageUrl}}/>
            <Text style={styles.nombre}>{item.Nombre}</Text>
            <Text>{item.Precio}</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    container:{
        flex:1,
        
        backgroundColor:"white",
        justifyContent:"center",
        alignItems:"center",
        marginLeft:5,        
        borderRadius:10,
        borderWidth:0.7,
        width:"100%",
        height:"80%",
        justifyContent:"center"
    },
    imagen:{
        width:100,
        height:100,
        margin:5,
        flex:1,
        objectFit:"contain",
        justifyContent:"center"
    },
    nombre:{

    }
})
export default Card;