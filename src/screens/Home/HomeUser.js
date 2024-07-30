import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, Button, FlatList} from 'react-native';
import HomeStyle from './Homestyle';
import Gretting from './Gretting';
import AttractionCard from '../../components/AttractionCard';
import Categories from '../../components/Categories';
import data from '../../data/attraction.json';
import category from '../../data/category.json';

const All = 'All';

const HomeUser = ({navigation}) => {
  const [getStateText, setStateText] = useState('Default text');
  const [getSelectedCategory, setSelectedCategory] = useState(All);
  const [getData, setData] = useState([]);
  useEffect(() => {
    setData(data);
  }, []);

  useEffect(() => {
    if (getSelectedCategory === All) {
      setData(data);
    } else {
      const filterData = data?.filter(item =>
        item?.categories?.includes(getSelectedCategory),
      );
      setData(filterData);
    }
  }, [getSelectedCategory]);

  const categoriesData = [
    {id: 1, title: 'All'},
    {id: 2, title: 'Popular'},
    {id: 3, title: 'Recommanded'},
    {id: 3, title: 'Most Viewed'},
    {id: 3, title: 'Most Visited'},
  ];

  return (
    <View style={HomeStyle.container}>
      {/* const onTextPressed = () => {
            setStateText('Updated text');
          };
         <Text onPress={onTextPressed} style={HomeStyle.titleBelow}> You want to go</Text> */}

      {/* <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={HomeStyle.row}>
        {data?.map((item, index) => (
          <AttractionCard
            key={item.id}
            style={index % 2 === 0 ? {marginRight: 12} : {}}
            imageSrc={item.image}
            title={item.name}
            subTitle={item.city}
          />
        ))}
      </ScrollView> */}

      <FlatList
        data={getData}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        style={{flexGrow: 1}}
        ListEmptyComponent={<Text style={HomeStyle.noData}>No Data Found</Text>}
        ListHeaderComponent={
          <>
            <Text style={HomeStyle.title}>Where do </Text>
            <Text style={HomeStyle.titleBelow}>You want to go </Text>
            <Text style={HomeStyle.subTitle}>Explore Attraction </Text>

            <Categories
              selectedCategory={getSelectedCategory}
              onCategoryPress={setSelectedCategory}
              categories={[All, ...category]}
            />
          </>
        }
        keyExtractor={item => String(item.id)}
        renderItem={({item, index}) => (
          <AttractionCard
            key={item.id}
            style={index % 2 === 0 ? {marginRight: 12} : {}}
            imageSrc={item.image}
            title={item.name}
            subTitle={item.city}
            onPress={() => navigation.navigate('AttractionDetail', {item})}
          />
        )}
      />

      {/* <Button
        title="Go to Greeting"
        onPress={() =>
          navigation.navigate('gretting', {name: 'sadhna', age: 35})
        }
      /> */}
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
