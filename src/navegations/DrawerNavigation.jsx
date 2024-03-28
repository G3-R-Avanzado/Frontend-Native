
import HomeScreen from '../screens/Home/HomeScreen';
import { Text, TextInput, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useState } from 'react';
import { stylesNavegation } from '../styles/globalStyles';
import { EvilIcons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
    const [busqueda, setBusqueda] = useState("");
    const buscar = (text) => {
        setBusqueda(text);
    };
    const icono = (<EvilIcons name="search" size={24} color="black" />);
    const placeholderText = "Buscar en Mercado Libre...";

    return (
        <Drawer.Navigator screenOptions={{
            //headerShown: false,
            //headerTransparent: true,
            headerTintColor: 'black',
            headerTitleAlign: 'center',
            headerStyle: {
                backgroundColor: '#FFE600',
                borderBottomWidth: 1,
            },
        }}
        >
            <Drawer.Screen name="Inicio" component={HomeScreen}
                options={{
                    headerTitle: (props) =>
                        <View style={stylesNavegation.navigatorContainer}>
                            <View style={stylesNavegation.inputContainer}>
                                {icono}
                                <TextInput
                                    style={stylesNavegation.SearchNavigator}
                                    onChangeText={buscar}
                                    value={busqueda}
                                    placeholder={`${placeholderText}`}
                                />
                            </View>
                        </View>
                }}
            />
        </Drawer.Navigator>
    );
};

export default DrawerNavigation;