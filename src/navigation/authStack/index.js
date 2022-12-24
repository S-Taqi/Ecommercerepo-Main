import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '@containers/authContainers/loginScreen';
import Home from '@containers/appContainers/Home/home';
import Detail from '@containers/appContainers/Home/Detail/Detail';
import Notification from '@containers/appContainers/Home/Notification/Notification';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const AuthStack = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={'Home'}>
        <Stack.Screen name="Login" component={LoginScreen} />
        {/* <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="Notification" component={Notification} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthStack;
