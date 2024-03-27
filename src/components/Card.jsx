import { View,Image,Text, StyleSheet} from "react-native";
import banner from "../../assets/banner1.png"
const Card = ({item,ANCHO_PANTALLA}) => {
    return (
        <View style={[styles.container]}
        >   
        <View style={{
            width:100,
            border:20,
            borderColor:"red"
            
        }}>
            <Image style={styles.imagen} source={banner}/>
            <Text>{item.Nombre}</Text>
            <Text>{item.Precio}</Text>
        </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container:{
        flex:1,
        border:1,
        borderColor:"red",
        borderRadius:40
    },
    imagen:{
        width:100,
        height:100,
        

    }
})
export default Card;