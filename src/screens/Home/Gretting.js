import React from 'react';
import HomeUser from './HomeUser';
import HomeStyle from './Homestyle';
import {View, Text, StyleSheet} from 'react-native';

const Gretting = ({navigation, route}) => {
  // const {name, age} = prop.params;
  const onBack = () => {
    navigation.goBack();
  };
  return (
    <View style={HomeStyle.backStyle}>
      <Text
        onPress={() => navigation.goBack()}
        style={{color: 'black', fontWeight: '900'}}>
        BACK
      </Text>
      <Text onPress={onBack} style={{color: 'black', fontWeight: '900'}}>
        BACK
      </Text>
      <Text style={{color: 'black'}}>you are {route.params.name}</Text>
    </View>
  );
};

Gretting.defaultProps = {
  name: 'Guest',
  age: 20,
};

export default Gretting;
