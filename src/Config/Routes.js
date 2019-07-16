import React, { Component } from 'react'
import {BrowserRouter as Router , Route} from 'react-router-dom'
import Login from '../Containers/Log In/Login';
import Add from '../Containers/Add Property/Add';
import Delete from '../Containers/Delete Property/Delete';

class Routes extends Component {
    render() {
        return (
            <Router>
                <Route exact path="/" component={Login} />
                <Route path="/add" component={Add} />
                <Route path="/delete" component={Delete} />
            </Router>
        )
    }
}

export default Routes
