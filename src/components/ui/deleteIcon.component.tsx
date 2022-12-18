import React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

export const DeleteIcon = () => {
  return (
    <Svg width={17} height={13} viewBox="0 0 17 13" fill="none">
      <G clipPath="url(#clip0_36_306)">
        <Path
          d="M14.663.012c.375-.003.693.124.956.382s.396.575.4.95l.085 9.31c.003.375-.124.694-.382.957a1.296 1.296 0 01-.95.4l-9.998.09c-.437.005-.793-.19-1.067-.583L.064 6.146 3.608.707C3.875.31 4.227.108 4.664.104l9.999-.092zM12.74 8.435l-2.397-2.384 2.353-2.427-.946-.929-2.352 2.428L6.97 2.739l-.93.946L8.47 6.069 6.085 8.495l.946.93 2.384-2.429 2.396 2.384.93-.946z"
          fill="#fff"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_36_306">
          <Path
            fill="#fff"
            transform="rotate(-.525 15.997 -.912)"
            d="M0 0H15.9978V11.9983H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
