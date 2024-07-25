import {StyleSheet} from 'react-native';

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
});

export default CategoryStyle;
