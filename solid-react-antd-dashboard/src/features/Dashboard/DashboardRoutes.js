import React, { lazy, Suspense } from 'react';
import { Route, useRouteMatch, Switch } from 'react-router-dom';
import { PRIVATE_ROUTE } from 'router';
import { Spin } from 'antd';

const NotFound = lazy(() => import('pages/NotFoundPage'));

const routes = [
  {
    path: PRIVATE_ROUTE.HOME,
    component: lazy(() => import('pages/HomePage')),
    exact: true,
  },
];

export default function AppRouter() {
  const { url } = useRouteMatch();
  return (
    <Suspense fallback={<Spin />}>
      <Switch>
        {routes.map((route, i) => (
          <Route
            exact={route.exact}
            key={`${i + route.key}`}
            path={`${url}/${route.path}`}
          >
            <route.component />
          </Route>
        ))}
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}
