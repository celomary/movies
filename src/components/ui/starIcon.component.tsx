import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

export const StarIcon = () => {
  return (
    <Svg width={17} height={17} viewBox="0 0 17 17" fill="none">
      <G clipPath="url(#clip0_145_12)">
        <Path
          d="M16.469 6.694h-6.083L8.5.797 6.614 6.694H.531l4.914 3.639-1.86 5.87L8.5 12.564l4.914 3.64-1.886-5.898 4.94-3.612z"
          fill="#FFCE31"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_145_12">
          <Path fill="#fff" d="M0 0H17V17H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
