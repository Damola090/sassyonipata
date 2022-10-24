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
        >
            <Tab.Screen 
                name="HomeTab" 
                component={HomeNavigator} 
                
            />
            <Tab.Screen 
                name="CartTab" 
                component={CartNavigator} 
            />
            <Tab.Screen 
                name="Admin" 
                component={AdminNavigator} 
            />
            <Tab.Screen
                 name="User"
                component={UserNavigator} 
                options={{
                    headerShown: false
                }}
            />
        </Tab.Navigator>
    )
}

export default Main;