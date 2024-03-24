import { Touchable, Text, View, Button,Dimensions,StyleSheet, TouchableOpacity } from 'react-native';
import { stylesGlobals } from '../../styles/globalStyles';

import { useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';


const HomeScreen = () => {
    const [busqueda, setBusqueda] = useState("")
    const buscar = (e) => {
        setBusqueda(e.target.value);
    }


    return (
        <>
            <View style={stylesGlobals.container}>
                <View style={stylesGlobals.navigatorContainer}>
                    <View style={stylesGlobals.ButtonNavigator}>
                        <TouchableOpacity style={stylesGlobals.ButtonNavigator} onPress={() => { }}>
                            <Text style={stylesGlobals.TextButtonNavigator}>|||</Text>
                        </TouchableOpacity>
                    </View>
                    <TextInput
                        style={stylesGlobals.SearchNavigator}
                        onChangeText={buscar}
                        value={busqueda}
                        placeholder="Buscar en Mercado Libre"
                    />
                </View>
                <View style={stylesGlobals.CarouselContainer}>
                    <Text>HOLA</Text>
                </View> 
            </View>
        </>
        
    );
};

export default HomeScreen;