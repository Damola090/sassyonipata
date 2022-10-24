import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import LoginForm from './Components/Login/LoginForm';
import RegisterForm from './Components/Register/RegisterForm';
import SearchBar from './Components/Homepage/SearchBar';
import Welcome from './Components/Welcome/Welcome';
import Banner from './Components/Homepage/Banner';

// import CategoryList from './components/Homepage/CategoryList';
import Home from './Components/Homepage/main/Home';
import Main from './Navigators/Main';

import { Provider } from 'react-redux';
import store from './Redux/store'
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    </Provider>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
