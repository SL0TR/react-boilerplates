import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ConfigProvider } from 'antd';
import { IntlProvider } from 'react-intl';
import PropTypes from 'prop-types';
import { theme, AppLocale } from 'config';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from 'store';

export default function AppProvider({ children }) {
  const currentAppLocale = AppLocale.en;

  return (
    <Provider store={store}>
      <PersistGate loading={<p>Loading..</p>} persistor={persistor}>
        <ConfigProvider locale={currentAppLocale.antd}>
          <IntlProvider
            locale={currentAppLocale.locale}
            messages={currentAppLocale.messages}
          >
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
          </IntlProvider>
        </ConfigProvider>
      </PersistGate>
    </Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
