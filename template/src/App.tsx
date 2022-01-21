// global stylesheet
import './styles/main.scss';

// react
import { ReactElement } from 'react';

// router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// routes
import { AuthRoutes, NonAuthRoutes } from '@routes/index';

// templates
import { AppLayout } from '@templates/index';

// pages
import { ErrorPage } from '@pages/index';

const App = (): ReactElement => (
  <Router>
    <AppLayout>
      <Switch>
        <Route path={['/']} exact component={AuthRoutes} />
        <Route path={['/error']} exact component={NonAuthRoutes} />
        <Route path="/error/404" component={ErrorPage} />
        <Route path="/*" component={ErrorPage} />
      </Switch>
    </AppLayout>
  </Router>
);

export default App;
