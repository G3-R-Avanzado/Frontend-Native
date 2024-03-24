import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/Home/HomeScreen';
import { StyleSheet } from 'react-native';

const Stack = createStackNavigator();

const StackNavigation = () => {
    return (
        <Stack.Navigator  screenOptions={{
            //headerShown: false,
            //headerTransparent: true,
           headerTintColor: 'black',
           headerTitleAlign: 'center',
           headerStyle: {
               backgroundColor: '#FFE600',
               borderBottomWidth: 1
           }
       }}>
        <Stack.Screen name="Home"  component={HomeScreen}/>
        {/* <Stack.Screen name="login" component={}/> */}
        </Stack.Navigator>
    );
};
const style= StyleSheet.create({
    cont:{
        backgroundColor:"#FFE600"
    }
})
export default StackNavigation;