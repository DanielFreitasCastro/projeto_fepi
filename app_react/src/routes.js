import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import List from './pages/List';

function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/lista/:term" component={List} />
            <Route path="/lista" component={List} />
            <Route component={Home} />
        </Switch>
    )
}

export default Routes;