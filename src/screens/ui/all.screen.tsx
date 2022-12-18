import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {AllStateType} from '../../types';
import {Filter} from '../../components';
import {Teaser, ListCard} from '../../components/ui';
import theme from '../../assets/theme';

const Sperator = () => <View style={styles.seperator} />;

export const All = ({data}: {data: AllStateType}) => {
  return (
    <View style={styles.container}>
      <Filter />
      <ScrollView style={styles.scroller} showsVerticalScrollIndicator={false}>
        <Teaser data={data.teaser} />
        <View style={styles.listContainer}>
          <ListCard title="Popular" data={data.popular} />
          <Sperator />
          <ListCard title="You May Like" data={data.nowPlaying} />
          <Sperator />
          <Sperator />
          <Sperator />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.ScreenBackgroundColor,
    flex: 1,
  },
  listContainer: {
    marginTop: 16,
  },
  scroller: {
    paddingBottom: 100,
  },
  seperator: {
    height: 33,
  },
});
