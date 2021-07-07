import React, { useState } from 'react';
import axios from 'axios';
import { RouteComponentProps } from 'react-router-dom';

const LoginForm = ({ history }: RouteComponentProps): React.ReactElement => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const changeUsername = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setUsername(event.currentTarget.value);
  };

  const changePassword = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.currentTarget.value);
  };

  const onLogin = (): void => {
    const getCred = async (): Promise<void> => {
      try {
        const token = await axios.post('http://localhost:5000/api/login', {
          username: 'Lambda School',
          password: 'i<3Lambd4',
        });
        console.log(token);
        localStorage.setItem('userToken', token.data.payload);
        history.push('/');
      } catch (error) {
        console.log(error);
      }
    };

    getCred();
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    onLogin();
    setUsername('');
    setPassword('');
  };

  return (
    <div className="form">
      <form onSubmit={submitHandler}>
        <label htmlFor="username">
          Username
          <input
            id="username"
            name="username"
            placeholder="JohnDoe123"
            type="text"
            value={username}
            onChange={changeUsername}
          />
        </label>

        <label htmlFor="password">
          Password
          <input
            id="password"
            name="password"
            placeholder="12345678"
            type="text"
            value={password}
            onChange={changePassword}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
