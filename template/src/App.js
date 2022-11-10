import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';

import HomeScreen from './components/screens/Home';
import OtherPageScreen from './components/screens/OtherPage';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='Home '>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="OtherPage" component={OtherPageScreen}/>
      </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;