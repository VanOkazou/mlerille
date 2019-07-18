// flow
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import { Provider as ReduxProvider } from 'react-redux';

import Reset from './reset';
import Login from './screens/login';
import Home from './screens/home';
import Work from './screens/work';
import theme from './theme';

import configureStore from './store/configureStore';
import requireAuthentication from './hoc/requireAuthentication';
import { HOME_PATH, LOGIN_PATH, WORK_PATH } from './constants';

const store = configureStore({});

function App() {
  return (
    <Router>
      <ReduxProvider store={store}>
        <ThemeProvider theme={theme}>
          <>
            <Reset />

            <Route path={HOME_PATH} exact component={requireAuthentication(Home)} />
            <Route path={LOGIN_PATH} component={Login} />
            <Route path={`${WORK_PATH}:id`} component={Work} />
          </>
        </ThemeProvider>
      </ReduxProvider>
    </Router>
  );
}

export default App;
