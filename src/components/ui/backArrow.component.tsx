import React from 'react';
import Svg, {Path} from 'react-native-svg';

export const BackArrowIcon = () => {
  return (
    <Svg width={28} height={24} viewBox="0 0 28 24" fill="none">
      <Path
        d="M12.833 5l-8.166 7 8.166 7M4.667 12h18.666"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
