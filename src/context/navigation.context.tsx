import React, {createContext, useContext} from 'react';

import {NativeStackScreenProps} from '@react-navigation/native-stack';

type RootStackParamList = {
  all: undefined;
  genre: {genre: string};
};

type screensType = 'all' | 'genre';

type NavigationContextType = Omit<
  NativeStackScreenProps<RootStackParamList, screensType>,
  'route'
> & {
  routeName?: string;
};

const Context = createContext<
  | NavigationContextType
  | {
      navigation: undefined;
      routeName?: undefined;
    }
>({
  navigation: undefined,
});

type PropsType = {
  children: React.ReactNode;
};

const NavigationContext = ({
  children,
  navigation,
  routeName,
}: NavigationContextType & PropsType) => {
  return (
    <Context.Provider value={{navigation, routeName}}>
      {children}
    </Context.Provider>
  );
};

export const useNavigationContext = () => {
  return useContext(Context);
};

export default NavigationContext;
