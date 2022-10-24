import { createNativeStackNavigator } from '@react-navigation/native-stack';

//tutorial
import Login from '../Screens/User/Login';
import Register from '../Screens/User/Register';
import UserProfile from '../Screens/User/Login';

//sassy
import RegisterForm from '../Components/Register/RegisterForm';
import LoginForm from '../Components/Login/LoginForm';
import Welcome from '../Components/Welcome/Welcome';

const Stack = createNativeStackNavigator();

function MyStack() {

    return (
        <Stack.Navigator>
            <Stack.Screen 
                name='Welcome' 
                component={Welcome}
                options={{
                    headerShown: false
                }}
             />
            <Stack.Screen name="LoginScreen" component={LoginForm} />
            <Stack.Screen name="RegisterScreen" component={RegisterForm} />
            <Stack.Screen name="UserProfile" component={UserProfile} />
        </Stack.Navigator>
    )
}

function UserNavigator() {
    return (
        <MyStack />
    )
}

export default UserNavigator;