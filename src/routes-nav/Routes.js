import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import Homepage from '../homepage/Homepage';
import GoalsList from '../goals/GoalsList';
import SignupForm from '../auth/SignupForm';
import LoginForm from '../auth/LoginForm';

/** Routes
 * 
 * App -> Routes -> { Homepage, GoalsList }
 * 
 */
function Routes() {

  return (
    <div className="pt-5">
      <Switch>

        <Route exact path="/">
          <Homepage />
        </Route>

        <Route exact path="/goals">
          <GoalsList />
        </Route>

        <Route exact path="/signup">
          <SignupForm />
        </Route>

        <Route exact path="/login">
          <LoginForm />
        </Route>
    
      </Switch>
    </div>
  )
}

export default Routes;