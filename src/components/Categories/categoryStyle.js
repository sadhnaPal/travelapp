import {StyleSheet, Dimensions} from 'react-native';
const {height} = Dimensions.get('window');
const CategoryStyle = StyleSheet.create({
  item: {
    marginRight: 2,
    paddingVertical: 2,
    color: 'rgba(0,0,0,0.5)',
    fontSize: 12,
  },

  selectedItem: {color: 'black'},

  itemConatiner: {
    marginRight: 17,
    marginVertical: 14,
  },

  selectedItemContainer: {
    borderBottomColor: '#4681A3',
    borderBottomWidth: 1,
  },
  detailContainer: {
    margin: 32,
  },
  mainImage: {
    width: '100%',
    height: height / 2,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    width: 36,
    height: 36,
    margin: 16,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: 'rgba(256,256,256,0.35)',
    margin: 16,
  },
  miniImage: {
    width: 40,
    height: 40,
    marginHorizontal: 4,
    marginVertical: 8,
    borderRadius: 10,
  },
  moreImages: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  moreImagesContainer: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.38)',
    width: 40,
    height: 40,
    top: 8,
    left: 4,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 40,
  },
  textContainer: {},
  title: {
    color: '#000',
    fontSize: 27,
    fontWeight: 'bold',
  },
  city: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
    marginTop: 8,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    color: '#000',
  },
  address: {
    fontSize: 12,
    color: 'black',
    marginStart: 10,
  },
  locationIcon: {
    width: 25,
    height: 25,
  },
  scheduleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    color: '#000',
  },
});

export default CategoryStyle;
