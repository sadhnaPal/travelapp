import React from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import GalleryStyle from './GalleryStyle';

const Gallery = ({navigation, route}) => {
  const {imageList} = route.params || {};
  console.log('sadhna Image', imageList);
  const onBack = () => {
    navigation.goBack();
  };
  console.log('====================================');
  console.log('====================================');
  return (
    <View style={GalleryStyle.container}>
      <FlatList
        style={{paddingHorizontal: 24, marginBottom: 24}}
        data={imageList}
        renderItem={({item}) => (
          <Image source={{uri: item}} style={GalleryStyle.image} />
        )}
      />

      <TouchableOpacity onPress={onBack} style={GalleryStyle.backContainer}>
        <Image
          source={require('../../assets/back.png')}
          style={GalleryStyle.backImage}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Gallery;
