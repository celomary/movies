import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {View, StyleSheet} from 'react-native';
import WhiteCircle from './whiteCircle.component';

type PropsType = {
  empty?: boolean;
  hideCircle?: boolean;
};

export const SavedIcon = (props: PropsType) => {
  return (
    <View style={styles.container}>
      <Svg width={26} height={26} viewBox="0 0 26 26" fill="none">
        <Path
          d={
            !props.empty
              ? 'M11.504 2.22l-7 4.167c-.153.092-.28.223-.369.382-.088.159-.135.34-.135.523v14.583c0 .182.046.362.134.52.087.158.213.29.364.38a.969.969 0 00.998.004L12 18.907l6.504 3.872a.97.97 0 00.998-.003c.151-.092.277-.223.364-.381.088-.158.134-.338.134-.52V7.292c0-.184-.047-.364-.135-.523a1.021 1.021 0 00-.369-.382l-7-4.166a.967.967 0 00-.992 0z'
              : 'M11.89 2.329L5.634 6.484a1.17 1.17 0 00-.523.974l-.028 15.207a.39.39 0 00.606.326l6.607-4.386a.39.39 0 01.434 0l6.588 4.411a.39.39 0 00.608-.324l.028-15.207a1.17 1.17 0 00-.52-.976l-6.242-4.178a1.17 1.17 0 00-1.3-.002zm.867.652l6.242 4.178a.39.39 0 01.173.325l-.027 14.477-5.982-4.005a1.17 1.17 0 00-1.3-.002l-5.999 3.983.027-14.477a.39.39 0 01.174-.325l6.258-4.155a.39.39 0 01.433 0z'
          }
          fill="#fff"
        />
      </Svg>
      <WhiteCircle hide={props.empty || props.hideCircle} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});
