import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import OrphanesMap from './pages/OrphanagesMap';

const Routes: React.FC = () => { 
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/app" component={OrphanesMap} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;