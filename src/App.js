import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from 'store';
import { Spin } from 'antd';
import { loadProgressBar } from 'axios-progress-bar';
import AppStyles from 'styles';
import { AppProvider } from 'components';
import { http } from 'services';
import Routes from 'router';
import { Provider } from 'react-redux';
import 'nprogress/nprogress.css';
import 'styles/App.less';

function App() {
  // load progress bar on every http request by custom axios instance
  loadProgressBar({}, http);

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
