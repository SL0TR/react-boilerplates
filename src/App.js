import React from 'react';
import AppStyles from 'styles';
import { AppProvider } from 'components';
import Routes from 'routes';

function App() {
  return (
    <AppProvider>
      <AppStyles />
      <Routes />
    </AppProvider>
  );
}

export default App;
