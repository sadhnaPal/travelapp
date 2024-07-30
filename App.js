//import liraries
import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeUser from './src/screens/Home/HomeUser';
import Gretting from './src/screens/Home/Gretting';
import AttractionDetails from './src/components/Categories/AttractionDetails';
import Gallery from './src/components/Categories/Gallery';

const Stack = createNativeStackNavigator();

const App = () => {
  const appTheme = {
    ...DefaultTheme,
    color: {
      ...DefaultTheme.colors,
      background: '#fffff',
    },
  };
  return (
    <NavigationContainer theme={appTheme}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="home"
          component={HomeUser}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="gretting"
          component={Gretting}
          options={{headerShown: false}}
        />
        <Stack.Screen name="AttractionDetail" component={AttractionDetails} />
        <Stack.Screen name="Gallery" component={Gallery} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

//make this component available to the app
export default App;
