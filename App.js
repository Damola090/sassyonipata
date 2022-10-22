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

export default function App() {
  return (
    <NavigationContainer>
      <Main />
    </NavigationContainer>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
