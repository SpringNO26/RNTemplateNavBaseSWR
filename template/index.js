/**
 * @format
 */

 import React from 'react';
 import { AppRegistry } from 'react-native';
 import App from './src/App';
 import { name as appName } from './app.json';
 import { NavigationContainer } from '@react-navigation/native';
 import { NativeBaseProvider } from 'native-base';

 const AppComponent = () => (
     <NativeBaseProvider>
         <NavigationContainer>
             <App />
         </NavigationContainer>
     </NativeBaseProvider>
 )

 AppRegistry.registerComponent(appName, () => AppComponent);
