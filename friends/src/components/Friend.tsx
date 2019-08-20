import React from 'react';
import { FriendType } from '../types';

interface FriendProps {
  friend: FriendType;
  onDelete: (id: number) => void;
}

const Friend = ({ friend, onDelete }: FriendProps): React.ReactElement => {
  const { name, age, email, id } = friend;
  return (
    <div className="friends-list__friend">
      <h2>
        {name} - {age}
      </h2>
      <h3>{email}</h3>
      <button type="button" onClick={(): void => onDelete(id)}>
        Remove Friend
      </button>
    </div>
  );
};

export default Friend;
