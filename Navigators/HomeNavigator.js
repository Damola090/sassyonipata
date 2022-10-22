import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ProductContainer from '../Screens/Products/ProductContainer';
import SingleProduct from '../Screens/Products/SingleProduct';


//sassy
import Home from '../Components/Homepage/main/Home';

const Stack = createNativeStackNavigator();

function MyStack() {

    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Home" 
                component={Home}
                options={{
                    headerShown: false
                }}
            />
             <Stack.Screen
                name="Product Detail" 
                component={SingleProduct}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    )
}


function HomeNavigator() {

    return (

        <MyStack />

    )
}

export default HomeNavigator;

