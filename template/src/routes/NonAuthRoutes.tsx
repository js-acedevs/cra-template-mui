// react
import { ReactElement } from 'react';

// router
import { Redirect, Route, Switch } from 'react-router-dom';

// pages
import { ErrorPage } from '@pages/index';

const Routes = (): ReactElement => (
  <Switch>
    <Route path="error/404" exact component={ErrorPage} />
    <Route path="/*" render={() => <Redirect to="/" />} />
  </Switch>
);

export default Routes;
