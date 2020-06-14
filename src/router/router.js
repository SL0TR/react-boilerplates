import React, { lazy, Suspense } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Spin } from 'antd';
import { PUBLIC_ROUTE } from './appUrls';

function Routes() {
  const SignInPage = lazy(() => import('pages/SignInPage'));
  const publicRoutes = [
    {
      path: PUBLIC_ROUTE.LANDING,
      exact: true,
      component: SignInPage,
    },
  ];

  return (
    <div>
      <Suspense fallback={<Spin size="large" />}>
        <Router>
          <Switch>
            {publicRoutes.map(route => (
              <Route key={route.path} path={route.path} exact={route.exact}>
                <route.component />
              </Route>
            ))}
            <p>Test</p>
          </Switch>
        </Router>
      </Suspense>
    </div>
  );
}

export default Routes;
