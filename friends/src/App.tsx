import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import LoginForm from './components/LoginForm';

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Route path="/" exact component={LoginForm} />
    </div>
  );
};

export default App;
