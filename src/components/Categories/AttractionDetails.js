import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  Pressable,
} from 'react-native';
import styles from './categoryStyle';

const AttractionDetail = ({navigation, route}) => {
  const {item} = route.params || {};
  const {image} = item || {};
  const {imageList} = item || {};
  const slicedImages = imageList.length ? imageList.slice(0, 5) : [];
  const diffImage = imageList.length - slicedImages?.length;

  console.log('image list', imageList);
  // const {name, age} = prop.params;
  const onBack = () => {
    navigation.goBack();
  };
  const onGalleryNavigate = () => {
    navigation.navigate('Gallery', {imageList});
  };
  const openTime = '10:00 AM';
  const closeTime = '01:30 PM';
  return (
    <View style={styles.detailContainer}>
      <ImageBackground
        style={styles.mainImage}
        imageStyle={{borderRadius: 20}}
        source={{uri: image}}>
        <View style={styles.header}>
          <Pressable onPress={onBack} hitSlop={8}>
            <Image
              style={styles.icon}
              source={require('../../assets/back.png')}
            />
          </Pressable>
          <Pressable hitSlop={8}>
            <Image
              style={styles.icon}
              source={require('../../assets/share.png')}
            />
          </Pressable>
        </View>
        <Pressable onPress={onGalleryNavigate} style={styles.footer}>
          {slicedImages?.map((image, index) => (
            <View key={image}>
              <Image source={{uri: image}} style={styles.miniImage} />
              {diffImage > 0 && index === slicedImages?.length - 1 ? (
                <View style={styles.moreImagesContainer}>
                  <Text style={styles.moreImages}>{`+${diffImage}`}</Text>
                </View>
              ) : null}
            </View>
          ))}
        </Pressable>

        {/* <Text
          onPress={() => navigation.goBack()}
          style={{color: 'black', fontWeight: '900', margin: 32}}>
          BACK
        </Text> */}
      </ImageBackground>
      <View style={styles.headerContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.city}>{item.city}</Text>
        </View>
        <Text style={styles.title}>$20</Text>
      </View>
      <View style={styles.locationContainer}>
        <Image
          style={styles.locationIcon}
          source={require('../../assets/locationCircle.png')}
        />
        <Text style={styles.address}> Address</Text>
      </View>
      <View style={styles.scheduleContainer}>
        <Image
          style={styles.locationIcon}
          source={require('../../assets/shareIcon.png')}
        />
        <Text style={styles.address}>{`OPEN
${openTime} - ${closeTime}`}</Text>
      </View>
    </View>
  );
};

export default AttractionDetail;
