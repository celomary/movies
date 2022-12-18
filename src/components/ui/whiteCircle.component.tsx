import React from 'react';
import {View, StyleSheet} from 'react-native';

type PropsType = {
  hide?: boolean;
};
const WhiteCircle = ({hide}: PropsType) => {
  return (
    <View
      style={[
        styles.whiteCircle,
        {
          opacity: hide ? 0 : 1,
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  whiteCircle: {
    backgroundColor: '#fff',
    width: 3,
    height: 3,
    borderRadius: 3,
  },
});
export default WhiteCircle;
