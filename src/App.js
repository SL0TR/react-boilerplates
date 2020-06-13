import React from 'react';
import AppStyles from 'styles';
import { AppProvider } from 'components';

function App() {
  return (
    <AppProvider>
      <AppStyles />
      <p>init</p>
    </AppProvider>
  );
}

export default App;
