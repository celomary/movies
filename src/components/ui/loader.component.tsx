import {StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import theme from '../../assets/theme';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  SharedValue,
  withRepeat,
} from 'react-native-reanimated';
const LoaderView = ({
  index,
  sharedValue,
}: {
  index: number;
  sharedValue: SharedValue<number>;
}) => {
  const animatedStyle = useAnimatedStyle(
    () => ({
      width: 5,
      height: 5,
      borderRadius: 5,
      position: 'absolute',
      backgroundColor: '#fff',
      transform: [
        {
          translateX: Math.cos((index * 2 * Math.PI) / 180) * sharedValue.value,
        },
        {
          translateY: Math.sin((index * 2 * Math.PI) / 180) * sharedValue.value,
        },
      ],
    }),
    [sharedValue.value],
  );
  return <Animated.View key={index} style={[animatedStyle]} />;
};

const Radius = 50;
export const Loader = () => {
  const sharedValue = useSharedValue(0);

  useEffect(() => {
    sharedValue.value = withRepeat(
      withTiming(Radius, {
        duration: 2000,
      }),
      -1,
      true,
    );
  }, [sharedValue]);
  return (
    <Animated.View style={styles.container}>
      {new Array(360 / 2).fill(0).map((_, index) => {
        return (
          <LoaderView sharedValue={sharedValue} key={index} index={index} />
        );
      })}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.ScreenBackgroundColor,
  },
});
