import React, { useState } from 'react';

const LoginForm = (): React.ReactElement => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const changeUsername = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setUsername(event.currentTarget.value);
  };

  const changePassword = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.currentTarget.value);
  };

  return (
    <div className="form">
      <form>
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LoginForm;
