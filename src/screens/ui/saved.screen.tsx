import React from 'react';
import {Text, StyleSheet, SafeAreaView} from 'react-native';
import theme from '../../assets/theme';
import {VerticalListCard} from '../../components/ui';
import {CardApiType} from '../../types';

type savedParams = {
  cards: CardApiType[];
};
export const Saved = ({cards}: savedParams) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>All</Text>
      <VerticalListCard
        data={cards}
        image={require('../../assets/emptySaved.png')}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.ScreenBackgroundColor,
    paddingHorizontal: 18,
  },
  title: {
    marginVertical: 9,
    color: theme.textColor,
    fontSize: 24,
    fontFamily: 'Roboto-Bold',
  },
});
