import React from 'react';

import {Filter} from '../../components';
import {VerticalListCard} from '../../components/ui';

import {View, StyleSheet, Text} from 'react-native';
import theme from '../../assets/theme';
import {GenreStateType} from '../../types';

export const Genre = ({genre, cards}: GenreStateType) => {
  return (
    <View style={styles.container}>
      <Filter />
      <Text style={styles.title}>{genre}</Text>
      <VerticalListCard
        data={cards}
        image={require('../../assets/emptySaved.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.ScreenBackgroundColor,
  },
  title: {
    fontSize: 21,
    fontFamily: 'Roboto-Bold',
    color: theme.textColor,
    marginTop: 5,
    marginBottom: 12,
    marginLeft: 10,
  },
});
