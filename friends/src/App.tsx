import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import LoginForm from './components/LoginForm';
import FriendsList from './components/FriendsList';

const App = (): React.ReactElement => {
  const onLogin = (username: string, password: string): void => {
    const getCred = async (): Promise<void> => {
      try {
        const token = await axios.post('http://localhost:5000/api/login', {
          username: 'Lambda School',
          password: 'i<3Lambd4',
        });
        console.log(token);
      } catch (error) {
        console.log(error);
      }
    };

    getCred();
  };

  return (
    <div className="App">
      <Route
        path="/"
        exact
        render={(): React.ReactElement => <LoginForm onLogin={onLogin} />}
      />
      <FriendsList />
    </div>
  );
};

export default App;
