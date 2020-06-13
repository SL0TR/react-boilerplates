import React from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import { theme } from 'config';

export default function AppProvider({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
