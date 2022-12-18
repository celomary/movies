import React, {createContext, useContext} from 'react';
import {RouteProp, NavigationProp} from '@react-navigation/native';

type rootParamTypes = {
  Home: undefined;
  Search: undefined;
  Detail: {
    id: string;
  };
  Saved: undefined;
};

type screensType = 'Home' | 'Search' | 'Detail' | 'Saved';
type ContextProps = {
  navigation?: NavigationProp<rootParamTypes, screensType>;
  route?: RouteProp<rootParamTypes, screensType>;
};

const Context = createContext<
  | ContextProps
  | {
      navigation: undefined;
      route: undefined;
    }
>({
  navigation: undefined,
  route: undefined,
});

export const useBottomTabContext = () => {
  return useContext(Context);
};

type BottomTabBarContextProps = ContextProps & {
  children: React.ReactNode;
};

const BottomTabContextProvider = ({
  navigation,
  route,
  children,
}: BottomTabBarContextProps) => {
  return (
    <Context.Provider
      value={{
        navigation,
        route,
      }}>
      {children}
    </Context.Provider>
  );
};

export default BottomTabContextProvider;
