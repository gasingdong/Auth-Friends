import React, { useState } from 'react';
import Friend from './Friend';

const FriendsList = (): React.ReactElement => {
  const [friends, setFriends] = useState([]);

  return (
    <div className="friends-list">
      <p>Friends List</p>
      {friends.map(
        (friend): React.ReactElement => (
          <Friend key={0} />
        )
      )}
    </div>
  );
};

export default FriendsList;
