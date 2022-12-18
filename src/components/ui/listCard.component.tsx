import React from 'react';
import {FlatList, Text, View, StyleSheet} from 'react-native';
import theme from '../../assets/theme';
import {SquareCard} from './squareCard.component';
import {CardApiType} from '../../types';

type ListCardProps = {
  title?: string;
  data: CardApiType[];
};

const Sperator = () => {
  return <View style={styles.seperator} />;
};
export const ListCard = React.memo(({title, data}: ListCardProps) => {
  return (
    <View>
      {title && (
        <View style={styles.topContainer}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.circles}>
            <View style={[styles.circle, styles.circleMarginRight]} />
            <View style={[styles.circle, styles.circleMarginRight]} />
            <View style={styles.circle} />
          </View>
        </View>
      )}
      <FlatList
        data={data}
        renderItem={({item}) => {
          return <SquareCard item={item} />;
        }}
        keyExtractor={item => item.id.toString()}
        horizontal
        ItemSeparatorComponent={() => <Sperator />}
        showsHorizontalScrollIndicator={false}
        initialNumToRender={5}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: 8,
    backgroundColor: '#FF722A',
  },
  circles: {
    flexDirection: 'row',
  },
  circleMarginRight: {
    marginRight: 3,
  },
  title: {
    fontFamily: 'Roboto-Bold',
    fontSize: 21,
    color: theme.textColor,
  },
  seperator: {
    width: 20,
  },
});
