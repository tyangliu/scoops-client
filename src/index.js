'use strict';

import React from 'react';
import { Router, Route, IndexRoute, Link } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { App, Home, Events, Blog, Mentorship, About, Contact } from './containers';

React.render(
  <Router history={createBrowserHistory()}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='events' component={Events} />
      <Route path='blog' component={Blog} />
      <Route path='mentorship' component={Mentorship} />
      <Route path='about' component={About} />
      <Route path='contact' component={Contact} />
    </Route>
  </Router>,
  document.getElementById('root')
);
