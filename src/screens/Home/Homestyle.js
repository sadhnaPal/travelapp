import {StyleSheet} from 'react-native';

const HomeStyle = StyleSheet.create({
  container: {
    marginLeft: 32,
    marginRight: 32,
  },

  title: {
    fontSize: 32,
    color: '#4681A3',
  },

  titleBelow: {
    fontSize: 32,
    color: '#4681A3',
    fontWeight: 'bold',
  },

  subTitle: {
    fontSize: 20,
    color: '#000000',
    color: 'black',
    fontWeight: '900',
    marginBottom: 30,
    marginTop: 10,
  },

  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  backStyle: {
    margin: 20,
  },
  noData: {
    fontSize: 15,
    color: '#4681A3',
    textAlign: 'center',
    marginTop: 24,
  },
});

export default HomeStyle;
