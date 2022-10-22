import {} from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack'

import orders from '../Screens/Admin/Order';
import Products from '../Screens/Admin/Products';
import ProductForm from '../Screens/Admin/ProductForm';
import Categories from '../Screens/Admin/Categories';


const Stack = createNativeStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Products" 
                component={Products} 
                options={{
                    title : 'Products'
                }}
            />
            <Stack.Screen name='Categories' component={Categories} />
            <Stack.Screen name='Orders' component={orders} />
            <Stack.Screen name='ProductForm' component={ProductForm} />
        </Stack.Navigator>
    )
}


function AdminNavigator() {
    return (
        <MyStack />

    )
}

export default AdminNavigator;