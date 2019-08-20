import React from 'react';
import { FriendType } from '../types';

interface FriendProps {
  friend: FriendType;
}

const Friend = ({ friend }: FriendProps): React.ReactElement => {
  const { name, age, email } = friend;
  return (
    <div className="friends-list__friend">
      <h2>
        {name} - {age}
      </h2>
      <h3>{email}</h3>
    </div>
  );
};

export default Friend;
