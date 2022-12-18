import React from 'react';
import {Pressable, View, Text, StyleSheet, FlatList} from 'react-native';
import {useNavigationContext} from '../../context/navigation.context';
import {FilterIcon} from '.';
import theme from '../../assets/theme';
import {GenreReducerStateType} from '../../types';

type PropType = {
  item: {
    id: number;
    name: string;
  };
};

const FilterElement = ({item}: PropType) => {
  const {navigation, routeName} = useNavigationContext();
  return (
    <Pressable
      onPress={() => {
        if (item.name.toLowerCase() === 'all') {
          navigation?.navigate('all');
        } else {
          navigation?.navigate('genre', {genre: item.name});
        }
      }}>
      <View
        style={[
          styles.filterElement,
          routeName!.toLowerCase() === item.name.toLowerCase()
            ? {
                backgroundColor: '#FF692B88',
              }
            : null,
        ]}>
        <Text style={styles.filterElementText}>{item.name}</Text>
      </View>
    </Pressable>
  );
};

const FiltersSeparator = () => {
  return <View style={styles.filterSeperator} />;
};

const FiltersList = ({genres}: {genres: GenreReducerStateType}) => {
  return (
    <FlatList
      data={genres}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => <FilterElement item={item} />}
      ItemSeparatorComponent={FiltersSeparator}
      style={styles.filtersList}
    />
  );
};

export const Filter = ({genres}: {genres: GenreReducerStateType}) => {
  return (
    <View style={styles.filterContainer}>
      <FiltersList genres={genres} />
      <FilterIcon />
    </View>
  );
};

const styles = StyleSheet.create({
  filterElement: {
    paddingVertical: 6,
    paddingHorizontal: 18,
    borderRadius: 20,
    overflow: 'hidden',
  },
  filterElementText: {
    color: theme.textColor,
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
  },
  filterSeperator: {
    width: 10,
  },
  filtersList: {
    marginRight: 12,
  },
  filterContainer: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
});
