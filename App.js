import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import UserContextProdider from './src/contexts/UserContext';
import MainStak from './src/stacks/MainStack';

export default () => {
  return (
    <UserContextProdider>
      <NavigationContainer>
        <MainStak />
      </NavigationContainer>
    </UserContextProdider>
  );
};
