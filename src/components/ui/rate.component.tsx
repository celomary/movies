import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import theme from '../../assets/theme';
import {StarIcon} from './starIcon.component';

type PropType = {
  rateNumber: number;
};

export const Rate = ({rateNumber}: PropType) => {
  return (
    <View style={styles.container}>
      <StarIcon />
      <Text style={styles.text}>{rateNumber.toFixed(1)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  text: {
    marginLeft: 4,
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    color: theme.textColor,
  },
});
