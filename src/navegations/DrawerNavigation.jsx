import HomeScreen from '../screens/Home/HomeScreen';
import { Text, TextInput, View, StyleSheet, ScrollView, ActivityIndicatorComponent } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { useState } from 'react';
import { stylesNavegation } from '../styles/globalStyles';
import Buscador from '../components/Buscador';
import { EvilIcons } from '@expo/vector-icons';
import Error from '../components/Error';
import { FontAwesome6,SimpleLineIcons, FontAwesome, AntDesign, Ionicons, MaterialIcons, FontAwesome5, MaterialCommunityIcons, Foundation } from '@expo/vector-icons';<FontAwesome6 name="house-chimney" size={24} color="black" />
import Posts from '../screens/User/Posts';
import { useDispatch, useSelector } from 'react-redux'
import StackNavigation from './StackNavigation';
import DetailUser from '../screens/User/DetailUser';


const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
    const dispatch = useDispatch();

    return (
        <Drawer.Navigator
            screenOptions={{
                headerTintColor: 'black',
                drawerContentContainerStyle: {
                    backgroundColor: '#FFE600',
                },
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: '#FFE600',
                    borderBottomWidth: 1,
                },
            }}>
            <Drawer.Screen
                name="Inicio"
                component={HomeScreen}
                options={{
                    drawerIcon: ({ focused, color, size }) => (
                        <FontAwesome6 name="house-chimney" size={24} color="black" />
                    ),
                    headerTitle: (props) => (
                        <View style={stylesNavegation.navigatorContainer}>
                            <Buscador />
                        </View>
                    ),
                }}
                >
            </Drawer.Screen>
            
            <Drawer.Screen name="Buscar" options={{
                drawerIcon: ({ focused, color, size }) => (
                    <EvilIcons name="search" size={size} color={color} />
                ),
                headerTitle: ""
            }} component={Buscador} />
            <Drawer.Screen name="Notificaciones" options={{
                drawerIcon: ({ focused, color, size }) => (
                    <FontAwesome name="bell-o" size={24} color="black" />
                ),
            }} component={Error} />
            <Drawer.Screen name="Mis publicaciones" component={Posts} options={{
                drawerIcon: ({ focused, color, size }) => (
                    <Ionicons name="bag-handle-outline" size={24} color="black" />
                ),
            }} />
            <Drawer.Screen name="Favoritos" options={{
                drawerIcon: ({ focused, color, size }) => (
                    <AntDesign name="hearto" size={24} color="black" />
                ),
            }} component={Error} />
            <Drawer.Screen name="Ofertas" options={{
                drawerIcon: ({ focused, color, size }) => (
                    <MaterialIcons name="local-offer" size={24} color="black" />
                ),
            }} component={Error} />
            <Drawer.Screen name="Cupones" options={{
                drawerIcon: ({ focused, color, size }) => (
                    <Ionicons name="ticket-outline" size={24} color="black" />),
            }} component={Error} />
            <Drawer.Screen name="Préstamos" options={{
                drawerIcon: ({ focused, color, size }) => (
                    <FontAwesome5 name="hands-helping" size={24} color="black" />
                ),
            }} component={Error} />
            <Drawer.Screen name="Suscripciones" options={{
                drawerIcon: ({ focused, color, size }) => (
                    <MaterialCommunityIcons name="star-circle" size={24} color="black" />
                ),
            }} component={Error} />
            <Drawer.Screen name="Mercado Play" options={{
                drawerIcon: ({ focused, color, size }) => (
                    <Foundation name="play-video" size={24} color="black" />
                ),
            }} component={Error} />
            <Drawer.Screen name="Historial" options={{
                drawerIcon: ({ focused, color, size }) => (
                    <EvilIcons name="clock" size={24} color="black" />
                ),
            }} component={Error} />
            <Drawer.Screen name="Ayuda" options={{
                drawerIcon: ({ focused, color, size }) => (
                    <MaterialIcons name="support-agent" size={24} color="black" />
                ),
            }} component={Error} />
            <Drawer.Screen name="Supermercado" options={{
                drawerIcon: ({ focused, color, size }) => (
                    <MaterialCommunityIcons name="shopping-outline" size={24} color="black" />
                ),
            }} component={Error} />
            <Drawer.Screen name="Moda" options={{
                drawerIcon: ({ focused, color, size }) => (
                    <MaterialCommunityIcons name="star-shooting-outline" size={24} color="black" />
                ),
            }} component={Error} />
            <Drawer.Screen name="Categorías" options={{
                drawerIcon: ({ focused, color, size }) => (
                    <MaterialCommunityIcons name="format-list-checkbox" size={24} color="black" />
                ),
            }} component={Error} />
            <Drawer.Screen name="Resumen" options={{
                drawerIcon: ({ focused, color, size }) => (
                    <Ionicons name="newspaper-outline" size={24} color="black" />
                ),
            }} component={Error} />
            <Drawer.Screen name="Vender" options={{
                drawerIcon: ({ focused, color, size }) => (
                    <AntDesign name="tago" size={24} color="black" />
                ),
            }} component={Error} />
            <Drawer.Screen name="Publicaciones" options={{
                drawerIcon: ({ focused, color, size }) => (
                    <FontAwesome name="list-alt" size={24} color="black" />
                ),
            }} component={Error} />

            <Drawer.Screen name="Mi cuenta" component={DetailUser} options={{
                drawerIcon:()=>(
                    <MaterialCommunityIcons name="account-circle-outline" size={24} color="black" />
                )
            }}/>    
            <Drawer.Screen name="Cerrar sesion" component={StackNavigation} options={{
                drawerIcon:()=>(
                    <SimpleLineIcons name="logout" size={24} color="black" />
                ),
                headerShown: false}}/>
            <Drawer.Screen name="Acerca de Mercado Libre" component={Error} />
        </Drawer.Navigator>
    );
};

const style = StyleSheet.create({
    botonesOcultos: {
        display: "none"
    }
})
export default DrawerNavigation;