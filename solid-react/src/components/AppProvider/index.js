import { ThemeProvider } from 'styled-components';
import { IntlProvider } from 'react-intl';
import PropTypes from 'prop-types';
import { theme, AppLocale } from 'config';
import { useSelector } from 'react-redux';
import { ErrorBoundary } from '@sentry/react';
import { ErrorFallback } from 'components';

export default function AppProvider({ children }) {
  const { locale } = useSelector(state => state.LanguageSwitcher.language);
  const currentAppLocale = AppLocale[locale];

  return (
    <ErrorBoundary
      fallback={({ error, componentStack, resetError }) => (
        <ErrorFallback error={{ error, componentStack, resetError }} />
      )}
      showDialog
    >
      <IntlProvider
        locale={currentAppLocale.locale}
        messages={currentAppLocale.messages}
      >
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </IntlProvider>
    </ErrorBoundary>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
