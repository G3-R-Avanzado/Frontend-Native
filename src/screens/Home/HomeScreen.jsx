//#region Imports
import * as React from 'react';
import { Touchable, FlatList, Image, Text, View, Button, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import { stylesNavegation } from '../../styles/globalStyles';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import banner1 from "../../../assets/banner1.png"
import banner2 from "../../../assets/banner2.png"
import banner3 from "../../../assets/banner3.png"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import MostSeller from './MostSeller';
//#endregion

const HomeScreen = ({navigation}) => {
    const [busqueda, setBusqueda] = useState("")
    const buscar = (e) => {
        setBusqueda(e.target.value);
    }
    const imagenes = [banner1, banner2, banner3]
    const { width: ANCHO_PANTALLA } = Dimensions.get('window');

    return (
        <>
            <View style={stylesNavegation.container}>
                <View style={stylesNavegation.CarouselContainer}>
                    <LinearGradient
                        colors={['rgba(255,230,0,1)', 'rgba(255,255,255,1)']}                    >
                        <FlatList
                            data={imagenes}
                            horizontal={true}
                            keyExtractor={(item, index) => index.toString()}
                            showsHorizontalScrollIndicator={false}
                            decelerationRate={0}
                            snapToInterval={ANCHO_PANTALLA}
                            scrollEventThrottle={16}
                            renderItem={({ item }) => (
                                <View style={[stylesNavegation.CarouselItems, { width: ANCHO_PANTALLA }]}>
                                    <Image
                                        source={item}
                                        style={{ width: '100%', height: 200, resizeMode: 'contain', borderRadius: 35 }}
                                    />
                                </View>
                            )}
                        />
                    </LinearGradient>
                </View>
                <Text>
                    <MaterialCommunityIcons
                        name="truck-fast-outline"
                        size={24}
                        color="#00a650" />
                    <Text style={{ color: "#00a650" }}>  Envío gratis</Text>
                    <Text> en millones de productos desde $23.000</Text>
                </Text>
            </View>
            <MostSeller navigation={navigation} />
        </>
    );
};

export default HomeScreen;