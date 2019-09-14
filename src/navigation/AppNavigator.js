import React from 'react';
import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from '../components/HomeScreen';
import DetailsScreen from '../components/DetailsScreen';
import LocationScreen from '../components/LocationScreen';
import LocationScreen2 from '../components/LocationScreen2';
import FoodScreen from '../components/FoodScreen';
import UserRegister from '../components/UserRegister';
import CompanyRegister from '../components/CompanyRegister';
import DrawerScreen from '../components/DrawerScreen';

// import MainTabNavigator from './MainTabNavigator';
// import LoginScreen from '../screens/LoginScreen'
// import AuthLoadingScreen from '../screens/AuthLoadingScreen'

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
    Location: LocationScreen,
    Food: FoodScreen,
    Location2: LocationScreen2,
    UserRegister: UserRegister,
    CompanyRegister: CompanyRegister,
    Drawer: DrawerScreen,
  },
  {
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
  }
);

export default createAppContainer(AppNavigator);
