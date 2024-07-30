import React from 'react';
import {FlatList, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import CategoryStyle from './categoryStyle';

const Categories = ({categories, selectedCategory, onCategoryPress}) => {
  console.log('Categories data:', categories);
  return (
    <View>
      <FlatList
        horizontal
        data={categories}
        keyExtractor={item => String(item)}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => {
          const selected = selectedCategory === item;
          return (
            <TouchableOpacity
              onPress={() => onCategoryPress(item)}
              style={[
                CategoryStyle.itemConatiner,
                selected ? CategoryStyle.selectedItemContainer : {},
              ]}>
              <Text
                style={[
                  CategoryStyle.item,
                  selected ? CategoryStyle.selectedItem : {},
                ]}>
                {item}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Categories;
