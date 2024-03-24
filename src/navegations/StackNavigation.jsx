import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/Home/HomeScreen';

const Stack = createStackNavigator();

const StackNavigation = () => {
    return (
        <Stack.Navigator >
        <Stack.Screen name="home" component={HomeScreen}/>
        {/* <Stack.Screen name="login" component={}/> */}
        </Stack.Navigator>
    );
};

export default StackNavigation;