import {React, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TelaMenu from './src/pages/TelaMenu';

const App = () => {

  return (
    <NavigationContainer>
      <TelaMenu />
    </NavigationContainer>
  );
}

export default App;
