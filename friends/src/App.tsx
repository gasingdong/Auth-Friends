import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import './App.css';
import LoginForm from './components/LoginForm';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Route
        path="/login"
        render={(props): React.ReactElement =>
          localStorage.getItem('userToken') ? (
            <Redirect to="/" />
          ) : (
            <LoginForm {...props} />
          )
        }
      />
      <PrivateRoute path="/" exact component={FriendsList} />
    </div>
  );
};

export default App;
