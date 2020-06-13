import React, { lazy, Suspense } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { PUBLIC_ROUTE } from './appUrls';

const SignInPage = lazy(() => import('pages/SignInPage'));

const publicRoutes = [
  {
    path: PUBLIC_ROUTE.LANDING,
    exact: true,
    component: SignInPage,
  },
];

function Routes() {
  return (
    // <ErrorBoundary>
    <Suspense fallback={<p>Loading..</p>}>
      <Router>
        <Switch>
          {publicRoutes.map(route => (
            <Route key={route.path} path={route.path} exact={route.exact}>
              <route.component />
            </Route>
          ))}
        </Switch>
      </Router>
    </Suspense>
    // </ErrorBoundary>
  );
}

export default Routes;
