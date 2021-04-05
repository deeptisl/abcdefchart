import React from 'react';
import { Route } from 'react-router-dom';
import Dashboard from '../dashboard/Dashboard';

const App = () => (
    <div>
        <Route exact path="/" component={Dashboard} />
    </div>
);

export default App;
