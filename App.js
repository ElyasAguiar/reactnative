import React from 'react';

import { NativeBaseProvider, Box } from 'native-base';
import SingIn from './src/screens/SingIn';

export default function App() {
  return (
    <NativeBaseProvider>
      <SingIn />
    </NativeBaseProvider>
  );
}
