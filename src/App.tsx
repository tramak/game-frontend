import React from 'react';
import { Redirect, Route, RouteComponentProps, Router, Switch } from 'react-router-dom';
import { history } from './redux/history';
import { routes } from './router/routes';
import { useAppSelector } from './redux/hooks';
import * as pages from './pages';
import './App.css';

const App: React.FC = () => {
  const token = useAppSelector(state => state.auth.token);
  const roles = useAppSelector(state => state.auth.profile?.roles) || [];

  return (
    <Router history={history}>
      <Switch>
        {routes.map(route => {
          if (route.allow) {
            const intersection = route.allow.filter(x => roles.includes(x));
            if (!intersection.length) {
              return null;
            }
          }

          const Layout = route.layout;
          const Component = token || !route.isLogin ? route.component : pages.NoAccess;
          const RouteComponent: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any> = (props: any) => {
            if (Layout) {
              return (
                <Layout>
                  <Component {...props} />
                </Layout>
              )
            }
            return <Component {...props} />;
          }

          return (
            <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
              component={RouteComponent}
            />
          )
        })}
        <Redirect push to={'/error'} />
      </Switch>
    </Router>
  );
};

export default App;
