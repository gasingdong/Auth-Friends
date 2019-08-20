import React, { useState, useEffect } from 'react';
import Friend from './Friend';
import axiosWithAuth from '../utils/axiosWithAuth';
import { FriendType } from '../types';

const FriendsList = (): React.ReactElement => {
  const [friends, setFriends] = useState<FriendType[]>([]);

  const getFriends = async (): Promise<void> => {
    try {
      const response = await axiosWithAuth().get(
        'http://localhost:5000/api/friends'
      );
      console.log(response);
      setFriends(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect((): void => {
    getFriends();
  }, []);

  return (
    <div className="friends-list">
      <h1>Friends List</h1>
      {friends.map(
        (friend): React.ReactElement => (
          <Friend key={friend.id} friend={friend} />
        )
      )}
    </div>
  );
};

export default FriendsList;
