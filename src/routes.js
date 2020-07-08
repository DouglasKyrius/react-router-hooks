import React from 'react';
import { Switch, Route} from 'react-router-dom';

import Main from './Components/Main';
import Contact from './Components/Contact';
import Thanks from './Components/Thanks';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route path="/contact" component={Contact} />
    <Route path="/thanks/:name" component={Thanks} />
  </Switch>
);

export default Routes;