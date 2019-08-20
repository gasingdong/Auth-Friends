import React, { useState } from 'react';

interface LoginFormProps {
  onLogin: (username: string, password: string) => void;
}

const LoginForm = ({ onLogin }: LoginFormProps): React.ReactElement => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const changeUsername = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setUsername(event.currentTarget.value);
  };

  const changePassword = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.currentTarget.value);
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    onLogin(username, password);
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
