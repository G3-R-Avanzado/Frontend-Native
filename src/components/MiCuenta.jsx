import { Image, TouchableHighlight, View } from "react-native";
import perfil from "../../assets/usuario-de-perfil.png" ;
import { useState } from "react";

const MiCuenta = () => {
    const [first, setfirst] = useState()
    const onPress = () => setCount();

    return (
        <View>
            <TouchableHighlight onPress={onPress}>
                <Image style={style.imagenPerfil} src={perfil}/>
            </TouchableHighlight>
            <View>
                <Text>Agustin Juan Sanchez</Text>
                <Text>agustin@agustin.com</Text>
            </View>

        </View>
    );
};
const style = StyleSheet.create({
    imagenPerfil:{
        width:50,
        borderRadius:50
    },
    contenedor:{
        flex:1,
    }

})

export default MiCuenta;