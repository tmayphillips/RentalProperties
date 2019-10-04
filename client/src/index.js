import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import App from './App';
import theme from './theme';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import BaseLayout from './components/BaseLayout'
import Home from './components/Home'
import SignIn from './components/SignIn'
import AvailableRentals from './components/AvailableRentals'
import Apply from './components/Apply'
import {Provider} from 'react-redux'

ReactDOM.render(
      <BrowserRouter>
        <BaseLayout>
          <Switch>
            <Route path = "/" exact component={AvailableRentals} />
            <Route path = "/signin" exact component={SignIn} />
            <Route path = "/apply" exact component={Apply} />
          </Switch>
        </BaseLayout>
      </BrowserRouter>,
  document.querySelector('#root'),
);

serviceWorker.unregister();
