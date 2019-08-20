import React from 'react';
import { FriendType } from '../types';

interface FriendProps {
  friend: FriendType;
  onDelete: (id: number) => void;
}

const Friend = ({ friend, onDelete }: FriendProps): React.ReactElement => {
  const { name, age, email, id } = friend;
  return (
    <div className="friends-list__friend block">
      <span>
        <h1 className="title">
          {name} - {age}
        </h1>
        <h3>{email}</h3>
        <button
          type="button"
          onClick={(): void => onDelete(id)}
          className="delete is-small"
        />
      </span>
    </div>
  );
};

export default Friend;
