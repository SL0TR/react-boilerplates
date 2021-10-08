import { PersistGate } from 'redux-persist/integration/react';
import { loadProgressBar } from 'axios-progress-bar';
import { Provider } from 'react-redux';
import { store, persistor } from 'store';
import { GLobalStyles } from 'styles';
import { AppProvider } from 'components';
import { http } from 'services';
import Routes from 'router';
import 'nprogress/nprogress.css';
import 'styles/utilities/less/App.less';

function App() {
  // load progress bar on every http request by custom axios instance
  loadProgressBar({}, http);

  return (
    <Provider store={store}>
      <PersistGate loading={<p>Loading..</p>} persistor={persistor}>
        <AppProvider>
          <GLobalStyles />
          <Routes />
        </AppProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
