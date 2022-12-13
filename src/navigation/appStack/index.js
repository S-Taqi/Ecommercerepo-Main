import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, Image, View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '@containers/authContainers/loginScreen';
import Home from '@containers/appContainers/Home';
import Detail from '@containers/appContainers/Home/Detail';
import Notification from '@containers/appContainers/Home/Notification';
import Profile from '@containers/appContainers/Home/Profile';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import R from '@components/utils/R';
import Cart from '@containers/appContainers/Home/Cart';
import { useSelector } from 'react-redux';
import Icon from '@components/common/Icon';

const AuthStack = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  function MyTabs() {
    const items = useSelector(state => state.Reducer);
    console.log('annnn', items);
    console.log(items, 'asasasas');
    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: true,
          tabBarVisible: true,
        }}
        tabBarOptions={{
          showLabel: true,
          activeTintColor: 'black',
          inactiveTintColor: 'gray',
          paddingBottom: 0,

          style: {
            backgroundColor: R.color.white,
            height: 58,
            //borderTopRightRadius: 12,
            //borderTopLeftRadius: 12,
            borderRadius: 20,
            //backgroundColor: '#F2F2F2',
            paddingVertical: 10,
            marginRight: 10,
            marginLeft: 10,
            alignItems: 'center',
            paddingBottom: 10,
            marginBottom: 15,
          },
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => (
              <Icon
                type={'FontAwesome'}
                name={'home'}
                size={25}
                color={focused ? '#E42021' : 'black'}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Cart"
          component={Cart}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Icon
                  type={'Entypo'}
                  name={'shopping-cart'}
                  size={25}
                  color={focused ? '#E42021' : 'black'}
                />
                {items.length > 0 ? (
                  <View
                    style={{
                      position: 'absolute',
                      backgroundColor: 'red',
                      width: 18,
                      height: 20,
                      borderRadius: 15 / 2,
                      left: 19,
                      top: +2,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text
                      style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#FFFFFF',
                        fontSize: 13,
                      }}>
                      {items.length}
                    </Text>
                  </View>
                ) : null}
                <View></View>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Notification"
          component={Notification}
          options={{
            tabBarIcon: ({ focused }) => (
              <Icon
                type={'Entypo'}
                name={'bell'}
                size={23}
                color={focused ? '#E42021' : 'black'}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ focused }) => (
              <Icon
                type={'Entypo'}
                name={'user'}
                size={25}
                color={focused ? '#E42021' : 'black'}
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={'Login'}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={MyTabs} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthStack;