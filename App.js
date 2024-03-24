import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import {Image, StyleSheet, Text, View } from 'react-native';
import logo from "./assets/logo1.png"
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './src/navegations/StackNavigation';

export default function App() {
/*   const [bienvenido, setBienvenida] = useState(true)
  const bienvenida=()=>{
    setBienvenida(false)
  }
  useEffect(()=>{
    setTimeout(() => {
      bienvenida();
    }, 2000);
  },[])
  if(bienvenido){
    return(
      <View style={styles.bienvenida}>
        <Image source={logo}/>
      </View>
    )
  } */
  return (
    <>
    <StatusBar style="auto" />
    <NavigationContainer style={styles.container}>
      <StackNavigation/>
    </NavigationContainer>
    </>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bienvenida:{
    flex:1,
    backgroundColor:"#FFE600",
    alignItems: "center",
    justifyContent:"center"
  },
  logoBienvenida:{
    width:50
  }
});
