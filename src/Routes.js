import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Home from './components/Home';
import Signin from './components/Signin'
// import PrivateRoute from './auth/helper/PrivateRoutes';


const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/signin" exact component={Signin} />
       {/* <PrivateRoute path="/user/dashboard" exact component={UserDashBoard} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
