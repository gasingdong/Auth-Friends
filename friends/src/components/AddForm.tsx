import React, { useState } from 'react';
import { FriendType } from '../types';

interface AddFormProps {
  onAdd: (friend: FriendType) => void;
}

const AddForm = ({ onAdd }: AddFormProps): React.ReactElement => {
  const [friend, setFriend] = useState({
    id: '',
    name: '',
    age: '',
    email: '',
  });

  const changeName = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setFriend({
      ...friend,
      name: event.currentTarget.value,
    });
  };

  const changeAge = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setFriend({
      ...friend,
      age: event.currentTarget.value,
    });
  };

  const changeEmail = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setFriend({
      ...friend,
      email: event.currentTarget.value,
    });
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    onAdd({
      name: friend.name,
      age: Number(friend.age),
      email: friend.email,
      id: Date.now(),
    });
    setFriend({
      id: '',
      name: '',
      age: '',
      email: '',
    });
  };

  return (
    <div className="form">
      <form onSubmit={submitHandler}>
        <label htmlFor="name">
          Name
          <input
            id="name"
            name="name"
            placeholder="John"
            type="text"
            value={friend.name}
            onChange={changeName}
          />
        </label>

        <label htmlFor="age">
          Age
          <input
            id="age"
            name="age"
            placeholder="15"
            type="text"
            value={friend.age}
            onChange={changeAge}
          />
        </label>

        <label htmlFor="email">
          E-Mail
          <input
            id="email"
            name="email"
            placeholder="johndoe@dirt.com"
            type="text"
            value={friend.email}
            onChange={changeEmail}
          />
        </label>
        <button type="submit">Add Friend</button>
      </form>
    </div>
  );
};

export default AddForm;
