import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ConfigProvider } from 'antd';
import { IntlProvider } from 'react-intl';
import PropTypes from 'prop-types';
import { theme, AppLocale } from 'config';

export default function AppProvider({ children }) {
  const currentAppLocale = AppLocale.en;

  return (
    <ConfigProvider locale={currentAppLocale.antd}>
      <IntlProvider
        locale={currentAppLocale.locale}
        messages={currentAppLocale.messages}
      >
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </IntlProvider>
    </ConfigProvider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
