// react
import { ReactElement } from 'react';

// routers
import { Redirect, Route, Switch } from 'react-router-dom';

// pages
import { RootPage } from '@pages/index';

const AuthRoutes = (): ReactElement => (
  <Switch>
    <Route path="/" exact component={RootPage} />
    <Route path="/*" render={() => <Redirect to="/error" />} />
  </Switch>
);

export default AuthRoutes;
