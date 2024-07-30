import {Image, Text, View, TouchableOpacity} from 'react-native';
import AttractionStyle from './AttractionStyle';
import jsonData from '../data/attraction.json';

import React, {useEffect, useState} from 'react';

const AttractionCard = ({title, imageSrc, subTitle, style, onPress}) => {
  const [getData, setData] = useState([]);
  useEffect(() => {
    // console.log('jsonData -> ', jsonData);
  }, []);
  return (
    <TouchableOpacity onPress={onPress} style={[AttractionStyle.card, style]}>
      <Image style={AttractionStyle.image} source={{uri: imageSrc}} />
      <Text style={AttractionStyle.title}>{title}</Text>
      <View style={AttractionStyle.row}>
        <Image
          style={AttractionStyle.icon}
          source={require('../assets/location.png')}
        />
        <Text style={AttractionStyle.subTitle}>{subTitle}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default AttractionCard;
