import React from 'react';
import HomeUser from './HomeUser';
import HomeStyle from './Homestyle';
import {View, Text, StyleSheet} from 'react-native';

const Gretting = ({route}) => {
  // const {name, age} = prop.params;
  return (
    <View>
      <Text style={{color: 'black'}}>Gretting {route.params.name}</Text>
      <Text style={{color: 'black'}}>you are {route.params.age}</Text>
    </View>
  );
};

Gretting.defaultProps = {
  name: 'Guest',
  age: 20,
};

export default Gretting;
