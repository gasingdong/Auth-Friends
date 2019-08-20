import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import LoginForm from './components/LoginForm';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';

const App = (): React.ReactElement => {
  const onLogin = (username: string, password: string): void => {
    const getCred = async (): Promise<void> => {
      try {
        const token = await axios.post('http://localhost:5000/api/login', {
          username: 'Lambda School',
          password: 'i<3Lambd4',
        });
        console.log(token);
        localStorage.setItem('userToken', token.data.payload);
      } catch (error) {
        console.log(error);
      }
    };

    getCred();
  };

  return (
    <div className="App">
      <Route
        path="/login"
        render={(): React.ReactElement =>
          localStorage.getItem('userToken') ? (
            <Redirect to="/" />
          ) : (
            <LoginForm onLogin={onLogin} />
          )
        }
      />
      <PrivateRoute path="/" exact component={FriendsList} />
    </div>
  );
};

export default App;
