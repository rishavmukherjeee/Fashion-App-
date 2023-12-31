import 'react-native-gesture-handler';
import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard_makeup from './Screens/Dashboard_makeup';
import Dashboard_Skincare from './Screens/Dashboard_Skincare';
import Product_Details from './Screens/Product_Details';
import LoginScreen from './Screens/Login';
import Signup from './Screens/Signup';
import Profile from './Screens/Profile';
const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
          screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Makeup" component={Dashboard_makeup} />
          <Stack.Screen name="Skincare" component={Dashboard_Skincare} />
          <Stack.Screen name="Details" component={Product_Details} />
          <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
export default App
