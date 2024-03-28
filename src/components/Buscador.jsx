import { useState } from "react";
import { View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { stylesNavegation } from "../styles/globalStyles";

const Buscador = () => {
    const [busqueda, setBusqueda] = useState("")
    const buscar = (e) => {
        setBusqueda(e.target.value);
    }
    return (
        <View style={stylesNavegation.navigatorContainer}>
        <TextInput
            style={stylesNavegation.SearchNavigator}
            onChangeText={buscar}
            value={busqueda}
            placeholder="Buscar en Mercado Libre"
        />
    </View>
    );
};

export default Buscador;