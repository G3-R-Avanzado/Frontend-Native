import { View, TextInput } from "react-native";
import { stylesNavegation } from "../styles/globalStyles";
import { useState } from "react";
import { EvilIcons } from '@expo/vector-icons';


const Buscador = () => {
    const [busqueda, setBusqueda] = useState("");
    const buscar = (text) => {
        setBusqueda(text);
    };
    const icono = (<EvilIcons name="search" size={24} color="black" />);
    const placeholderText = "Buscar en Mercado Libre...";

    return (
        <View style={stylesNavegation.inputContainer}>
            {icono}
            <TextInput
                style={stylesNavegation.SearchNavigator}
                onChangeText={buscar}
                value={busqueda}
                placeholder={`${placeholderText}`}
            />
        </View>
    );
};

export default Buscador;