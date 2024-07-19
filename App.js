//import liraries
import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeUser from './src/screens/Home/HomeUser';
import Gretting from './src/screens/Home/Gretting';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

//make this component available to the app
export default App;
