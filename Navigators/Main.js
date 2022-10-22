
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

//Stacks
import HomeNavigator from './HomeNavigator';
import CartNavigator from './CartNavigator';
import UserNavigator from './UserNavigator';
import AdminNavigator from './AdminNavigator';


const Tab = createBottomTabNavigator();

const Main = () => {
    return (
        <Tab.Navigator
        initialRouteName='Home'
        tabBarOptions={{
            keyboardHidesTabBar : true

        }}        
        >
            <Tab.Screen name="Home" component={HomeNavigator} />
            <Tab.Screen name="Cart" component={CartNavigator} />
            <Tab.Screen name="Admin" component={AdminNavigator} />
            <Tab.Screen name="User" component={UserNavigator} />
        </Tab.Navigator>
    )
}

export default Main;