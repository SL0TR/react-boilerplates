import { lazy, Suspense } from 'react';
import {
  Route,
  Redirect,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { PUBLIC_ROUTE } from './appRoutes';

const Dashboard = lazy(() => import('features/Dashboard'));
const SignInPage = lazy(() => import('pages/SignInPage'));
const NotFound = lazy(() => import('pages/NotFoundPage'));

function PrivateRoute({ children, ...rest }) {
  const isLoggedIn = useSelector(state => state.Auth.token);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLoggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: PUBLIC_ROUTE.SIGN_IN,
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

PrivateRoute.propTypes = {
  children: PropTypes.node,
  rest: PropTypes.any,
};

function Routes() {
  const publicRoutes = [
    {
      path: PUBLIC_ROUTE.LANDING,
      exact: true,
      component: SignInPage,
    },
    {
      path: PUBLIC_ROUTE.SIGN_IN,
      component: SignInPage,
    },
  ];

  return (
    <div>
      <Suspense fallback={<p>Loading..</p>}>
        <Router>
          <Switch>
            {publicRoutes.map(route => (
              <Route key={route.path} path={route.path} exact={route.exact}>
                <route.component />
              </Route>
            ))}
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <Route component={NotFound} />
          </Switch>
        </Router>
      </Suspense>
    </div>
  );
}

export default Routes;
