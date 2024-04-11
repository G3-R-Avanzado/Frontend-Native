import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { Login } from '../screens/Auth/Login';
import { Register } from '../screens/Auth/Register';
import DrawerNavigation from './DrawerNavigation';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native';
import { logOut } from '../store/Slices/auth/authThunks';
import DetailProduct from '../screens/Product/DetailProduct';

const Stack = createStackNavigator();

const StackNavigation = (props) => {    
    const dispatch = useDispatch();
    const {isLogged} = useSelector((store)=>store.auth)
    const navigation = useNavigation();

    useEffect(()=>{
        isLogged && dispatch(logOut())
    },[])
    
    useEffect(()=>{
        isLogged && navigation.navigate('Home') 
    },[isLogged])
    
    return (
        <Stack.Navigator
            screenOptions={{
                cardStyle:{
                    backgroundColor: '#FFE600'
                },
                headerStyle:{
                    backgroundColor: '#FFE600'
                }}}>
            <Stack.Screen name='Login' options={{ headerShown: false }} component={Login}/>
            <Stack.Screen name='Register' component={Register}/>
            <Stack.Screen name="DetailProduct" component={DetailProduct} />
            <Stack.Screen name='Home' options={{ headerShown: false }} component={DrawerNavigation}/>
        </Stack.Navigator>
    );
};

export default StackNavigation;