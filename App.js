import 'react-native-gesture-handler';
import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard_makeup from './Screens/Dashboard_makeup';
import Dashboard_Skincare from './Screens/Dashboard_Skincare';
import Product_Details from './Screens/Product_Details';

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
       screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Makeup" component={Dashboard_makeup} />
      <Stack.Screen name="Skincare" component={Dashboard_Skincare} />
      <Stack.Screen name="Details" component={Product_Details} />
      </Stack.Navigator>
    <Image source={require('./assets/Bottom.png')} style={{height:'10%',width:'100%'}} ></Image>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default App
