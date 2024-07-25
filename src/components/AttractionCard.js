import {Image, Text, View} from 'react-native';
import AttractionStyle from './AttractionStyle';
import jsonData from '../data/attraction.json';

import React, {useEffect, useState} from 'react';

const AttractionCard = ({title, imageSrc, subTitle, style}) => {
  const [getData, setData] = useState([]);
  useEffect(() => {
    console.log('jsonData -> ', jsonData);
  }, []);
  return (
    <View style={[AttractionStyle.card, style]}>
      <Image style={AttractionStyle.image} source={{uri: imageSrc}} />
      <Text style={AttractionStyle.title}>{title}</Text>
      <View style={AttractionStyle.row}>
        <Image
          style={AttractionStyle.icon}
          source={require('../assets/location.png')}
        />
        <Text style={AttractionStyle.subTitle}>{subTitle}</Text>
      </View>
    </View>
  );
};

export default AttractionCard;
