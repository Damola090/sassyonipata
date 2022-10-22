import {} from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Cart from '../Screens/Cart/Cart';
import CheckoutNavigator from './CheckoutNavigator';


const Stack = createNativeStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Cart" 
                component={Cart} 
                options={{
                    headerShown : false
                }}
            />
            <Stack.Screen 
                name='Checkout' 
                component={CheckoutNavigator} 
                options={{
                    title: 'Checkout'
                }}
            />
        </Stack.Navigator>
    )
}


function CartNavigator() {
    return (
        <MyStack />

    )
}

export default CartNavigator;