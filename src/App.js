import React from 'react';
import AppStyles from 'styles';
import { AppProvider } from 'components';
import Routes from 'router';
import 'styles/App.less';

function App() {
  return (
    <AppProvider>
      <AppStyles />
      <Routes />
    </AppProvider>
  );
}

export default App;
