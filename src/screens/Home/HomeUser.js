import React, {useState} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import HomeStyle from './Homestyle';
import Gretting from './Gretting';

const HomeUser = ({navigation}) => {
  const [getStateText, setStateText] = useState('Default text');
  const onTextPressed = () => {
    setStateText('Updated text');
  };

  return (
    <View>
      <Text style={{color: 'black'}}>Hello</Text>
      <Text onPress={onTextPressed} style={HomeStyle.title}>
        {getStateText}
      </Text>
      <Button
        title="Go to Greeting"
        onPress={() => navigation.navigate('gretting', {name: '', age: 35})}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItem: 'center',
    justifyContect: 'center',
  },
});
export default HomeUser;
