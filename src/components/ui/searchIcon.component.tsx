import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';
import WhiteCircle from './whiteCircle.component';
import {View, StyleSheet} from 'react-native';

const FillSearch = () => {
  return (
    <>
      <G clipPath="url(#clip0_33_9)">
        <Path
          d="M10.833 0a10.833 10.833 0 107.05 19.06l5.693 5.697 1.18-1.18-5.697-5.695A10.833 10.833 0 0010.833 0z"
          fill="#fff"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_33_9">
          <Path fill="#fff" d="M0 0H25V25H0z" />
        </ClipPath>
      </Defs>
    </>
  );
};

const EmptySearch = () => {
  return (
    <Path
      d="M10.938 20.313a9.375 9.375 0 100-18.75 9.375 9.375 0 100 18.75zM17.969 17.969l5.468 5.468"
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  );
};

type PropsType = {
  empty: boolean;
  isSearch?: boolean;
};

export const SearchIcon = (props: PropsType) => {
  return (
    <View style={[styles.container]}>
      <Svg width={25} height={25} viewBox="0 0 25 25" fill="none">
        {props.empty ? <EmptySearch /> : <FillSearch />}
      </Svg>
      <WhiteCircle hide={props.empty || props.isSearch} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});
