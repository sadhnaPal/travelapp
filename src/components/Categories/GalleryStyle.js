import {StyleSheet} from 'react-native';

const GalleryStyle = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
    borderRadius: 20,
    marginTop: 24,
  },
  container: {
    flex: 1,
  },
  backImage: {
    width: 30,
    height: 30,
    margin: 32,
  },
  backContainer: {
    position: 'absolute',
  },
});

export default GalleryStyle;
