import {StyleSheet, Dimensions} from 'react-native';
const {width} = Dimensions.get('window');

const AttractionStyle = StyleSheet.create({
  card: {
    padding: 4,
    borderWidth: 1,
    borderColor: '#E2E2E2',
    borderRadius: 15,
    marginBottom: 12,
  },
  image: {
    width: (width - 96) / 2, // Ensure the width is defined
    height: 120,
    borderRadius: 15,
  },
  title: {
    fontSize: 12,
    fontWeight: '800',
    marginTop: 12,
    marginLeft: 6,
    color: 'black',
  },
  subTitle: {
    fontSize: 10,
    fontWeight: '300',
    color: 'rgba(0,0,0,0.5)',
  },
  icon: {
    width: 10,
    height: 10,
    marginRight: 6,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
    marginLeft: 6,
    marginBottom: 12,
  },
});

export default AttractionStyle;
