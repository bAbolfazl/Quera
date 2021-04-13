import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'

import Movies from './Movies'
import MovieDetail from './MovieDetail'
import NotFound from './NotFound'

export default function App() {

    return <>
        <Router>
            <Switch>
                <Route exact path="/" component={Movies} />
                <Route exact path="/movies/:movie_id" component={MovieDetail} />

                <Route component={NotFound} />
            </Switch>
        </Router>
    </>;
}
