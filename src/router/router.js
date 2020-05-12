import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ShowCustomers from '../components/customers/ShowCustomers';
import ShowEmployees from '../components/employees/ShowEmployees';
import ShowProducts from '../components/products/ShowProducts';


const Router = () => {


    return (
        <Switch>

            <Route exact path='/home' />
            <Route exact path='/products' component={ShowProducts}/>
            <Route exact path='/ingredients' />
            <Route exact path='/customers' component={ShowCustomers} />
            <Route exact path='/employees' component={ShowEmployees} />
            <Route exact path='/intranet/products' />
            <Route exact path='/intranet/employees' />

        </Switch>
    );
}

export default Router;