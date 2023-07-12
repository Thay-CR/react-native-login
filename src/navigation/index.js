import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { HomeScreen } from '../screen/Home/Home'
import { TradeScreen } from '../screen/Trade/Trade';
import { PortifolioScreen } from '../screen/Portifolio/Portifolio';
import { SignUpScreen } from '../screen/Register/Register';
import { LoginScreen } from '../screen/Login/Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SingleAsset } from '../screen/SingleAsset/SingleAsset';
import { useSelector } from 'react-redux';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} options={{
        headerShown: false, tabBarIcon: ({ color, size }) => (
          <Ionicons name="home" size={size} color={color} />
        )
      }} />
      <Tab.Screen name="TradeScreen" component={TradeScreen} options={{
        headerShown: false, tabBarIcon: ({ color, size }) => (
          <Ionicons name="swap-horizontal" size={size} color={color} />
        )
      }} />
      <Tab.Screen name="Portifolio" component={PortifolioScreen} options={{
        headerShown: false, tabBarIcon: ({ color, size }) => (
          <Ionicons name="pie-chart" size={size} color={color} />
        )
      }} />
    </Tab.Navigator>
  )
}

export const Navigation = () => {
  const isAuthenticated = useSelector(state => state.user.user.auth);
  return (
    <NavigationContainer>
      {
        isAuthenticated === 'success'
          ? (
            <Stack.Navigator>
              <Stack.Screen
                name="Main"
                component={TabNavigator}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SingleAsset"
                component={SingleAsset}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          ) : (
            <Stack.Navigator>
              <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SignUp"
                component={SignUpScreen}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          )}
    </NavigationContainer>
  );
};

