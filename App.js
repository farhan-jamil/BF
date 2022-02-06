import React from 'react';
import { StatusBar } from 'react-native';
import { color } from './src/component/Colors';
import { NavigationContainer } from '@react-navigation/native';
import MainStackNavgation from './src/navigations/MainStackNavgation';

import { Provider } from 'react-redux';
import store from './src/redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor } from './src/redux/store'

const App = () => {

  return (

    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <StatusBar barStyle="light-content" backgroundColor={color.primary} />
          <MainStackNavgation />

        </NavigationContainer >
      </PersistGate>

    </Provider>



  );
};

export default App;
