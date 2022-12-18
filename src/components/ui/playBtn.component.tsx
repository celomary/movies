import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {View, StyleSheet} from 'react-native';

const PlayIcon = () => {
  return (
    <Svg width={22} height={22} viewBox="0 0 22 22" fill="none">
      <Path
        d="M4.813 19.25a.687.687 0 01-.688-.688V3.438a.687.687 0 011.019-.602l13.75 7.563a.687.687 0 010 1.204l-13.75 7.563a.688.688 0 01-.332.085z"
        fill="#FF722A"
      />
    </Svg>
  );
};

export const PlayBtn = () => {
  return (
    <View style={styles.container}>
      <PlayIcon />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 37,
    height: 37,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 37,
  },
});
