import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import logo from "./assets/logo1.png"
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigation from './src/navegations/DrawerNavigation';
import DetailPost from './src/screens/User/DetailPost';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import DrawerNavigation from './src/navegations/DrawerNavigation';
import StackNavigation from './src/navegations/StackNavigation';
import { Provider } from 'react-redux';
import { store } from './src/store/store';

export default function App() {
  const [bienvenido, setBienvenida] = useState(true)

  const bienvenida = () => {
    setBienvenida(false)
  }

  useEffect(() => {
    setTimeout(() => { 
      bienvenida();
    }, 2000);
  }, [])

  if (bienvenido) {
    return (
      <View style={styles.bienvenida}> 
        <Image style={{ width: "50%", objectFit: "contain" }} source={logo} />
      </View>  
    )
  }
  return (
    <Provider store={store}> 
      <StatusBar style="auto" />
      <NavigationContainer style={styles.container}>
        <StackNavigation />
      </NavigationContainer>      
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bienvenida: {
    flex: 1,
    backgroundColor: "#FFE600",
    alignItems: "center",
    justifyContent: "center"
  },
  logoBienvenida: {
    width: 50
  }
});
