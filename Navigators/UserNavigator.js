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
            <Stack.Screen name='Welcome' component={Welcome} />
            {/* <Stack.Screen name="Login" component={<LoginForm title='Log into Yout Account'/>} />
            <Stack.Screen name="Register" component={<RegisterForm title='Create Your Account' /> } /> */}
            <Stack.Screen name="User Profile" component={UserProfile} />
        </Stack.Navigator>
    )
}

function UserNavigator() {
    return (
        <MyStack />
    )
}

export default UserNavigator;