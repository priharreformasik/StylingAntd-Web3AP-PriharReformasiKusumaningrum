import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Kartu from '../content/Kartu';
import Foto from '../content/Foto';

class Router extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Foto}/>
                <Route exact path="/kartu" component={Kartu}/>
            </Switch>
        );
    }
}

export default Router;