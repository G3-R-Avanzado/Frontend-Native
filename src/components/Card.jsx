import { View,Image,Text, StyleSheet} from "react-native";
import banner from "../../assets/banner1.png"
const Card = ({item,ANCHO_PANTALLA}) => {
    return (
        <View style={[styles.container]}>   
        <View style={{
            width:"100%",
            height:"80%",
            borderWidth:1,
            borderColor:"black",
            marginBottom:20,
            flex:1,
            justifyContent:"center"
        }}>
            <Image style={styles.imagen} source={{uri: item.imageUrl}}/>
            <Text style={styles.nombre}>{item.Nombre}</Text>
            <Text>{item.Precio}</Text>
        </View>
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
        border:1,
        borderColor:"red",
        borderRadius:40,
        height:100
    },
    imagen:{
        width:100,
        height:100,
        margin:5
    },
    nombre:{

    }
})
export default Card;