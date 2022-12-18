import {Provider} from 'react-redux';
import store from './src/store';
import Navigation from './Navigation';
import React, {useEffect} from 'react';
import RNBootSplash from 'react-native-bootsplash';

const App = () => {
  useEffect(() => {
    RNBootSplash.hide({fade: true, duration: 500});
  }, []);
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
