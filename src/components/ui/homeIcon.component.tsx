import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import WhiteCircle from './whiteCircle.component';
import {View, StyleSheet} from 'react-native';

type PropsType = {
  empty?: boolean;
};

export const HomeIcon = (props: PropsType) => {
  return (
    <View style={styles.container}>
      <Svg width={25} height={25} viewBox="0 0 25 25" fill="none">
        <Path
          d={
            props.empty
              ? 'M11.427 1.972a1.562 1.562 0 012.146 0l7.57 7.155c.468.442.732 1.059.732 1.703v8.703a2.343 2.343 0 01-2.344 2.344h-3.125a2.343 2.343 0 01-2.343-2.346v-3.906a.781.781 0 00-.782-.781H11.72a.781.781 0 00-.781.781v3.906a2.344 2.344 0 01-2.344 2.344H5.469a2.344 2.344 0 01-2.344-2.344v-8.703c0-.644.266-1.26.734-1.703l7.568-7.156v.003zM12.5 3.106l-7.569 7.156a.782.782 0 00-.244.566v8.703a.781.781 0 00.782.782h3.125a.781.781 0 00.781-.782v-3.906a2.344 2.344 0 012.344-2.344h1.562a2.344 2.344 0 012.344 2.344v3.906a.781.781 0 00.781.782h3.125a.781.781 0 00.782-.782v-8.703a.782.782 0 00-.244-.567L12.5 3.106z'
              : 'M13.573 1.972a1.562 1.562 0 00-2.146 0l-7.57 7.153a2.344 2.344 0 00-.732 1.705v8.703a2.344 2.344 0 002.344 2.342h2.343a2.344 2.344 0 002.344-2.344v-3.906a.781.781 0 01.781-.781h3.126a.781.781 0 01.78.781v3.906a2.344 2.344 0 002.345 2.344h2.343a2.344 2.344 0 002.344-2.344v-8.703a2.345 2.345 0 00-.734-1.703l-7.568-7.156v.003z'
          }
          fill="#fff"
        />
      </Svg>
      <WhiteCircle hide={props.empty} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});
