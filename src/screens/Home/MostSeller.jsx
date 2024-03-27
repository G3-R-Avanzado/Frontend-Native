import { View,Text,FlatList,StyleSheet,DimensionValue, Dimensions } from "react-native";
import Card from "../../components/Card";
import {productos} from "../../productos"

const {width:ANCHO_PANTALLA}=Dimensions.get("window")

const MostSeller = () => {
    
    return (
        <View style={styles.contenedor}>
            <Text style={styles.fuentes}>Lo mas vendido!</Text>
            <View>
            <FlatList
            data={productos.aprobados}
            horizontal={true}
            showsHorizontalScrollIndicator={true}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item})=>(
                <View style={[styles.contenedorCards,{width:ANCHO_PANTALLA/2}]}>
                    <Card item={item} ANCHO_PANTALLA={ANCHO_PANTALLA}/>
                </View>
            )}/>
            </View>
        </View>
    );

};
const styles= StyleSheet.create({
    contenedor:{
        flex:10,
        marginLeft:5,
        alignItems:"start"
    },
    contenedorCards:{
        height:200,
        width:200,
        borderWidth:1,
        margin:4,
        borderColor:"black"
    },
    fuentes:{
        fontSize:20
    }
})
export default MostSeller;