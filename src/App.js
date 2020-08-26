import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from 'store';
import AppStyles from 'styles';
import { AppProvider } from 'components';
import Routes from 'router';
import { Provider } from 'react-redux';

import 'styles/App.less';
import { Spin } from 'antd';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<Spin />} persistor={persistor}>
        <AppProvider>
          <AppStyles />
          <Routes />
        </AppProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
