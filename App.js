import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import {Image, StyleSheet, Text, View } from 'react-native';
import logo from "./assets/logo1.png"
export default function App() {
  const [bienvenido, setBienvenida] = useState(true)
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
  }
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
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
  }
});
