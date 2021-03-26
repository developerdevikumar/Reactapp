import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './screens/home/Home';
import Company from './screens/company/Company';
import Services from './screens/service/Services';
import Contact from './screens/contact/Contact';

import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";

function App() {
    return (
        <Router>
        <div className="container-fluid">
            <Header />
            <Switch>
            <Route exact path="/">
                <Redirect to="/home" />
            </Route>
            <Route exact path='/home' component={Home} />
            <Route path='/company' component={Company} />
            <Route path='/services' component={Services} />
            <Route path='/contact' component={Contact} />
            </Switch>
            <Footer />
        </div>
        </Router>
    );
}

export default App;
