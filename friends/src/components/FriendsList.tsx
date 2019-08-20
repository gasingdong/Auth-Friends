import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Friend from './Friend';
import axiosWithAuth from '../utils/axiosWithAuth';
import { FriendType } from '../types';

const FriendsList = ({ history }: RouteComponentProps): React.ReactElement => {
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

  const onLogout = (): void => {
    localStorage.removeItem('userToken');
    history.push('/login');
  };

  useEffect((): void => {
    getFriends();
  }, []);

  return (
    <div className="friends-list">
      <button type="button" onClick={onLogout}>
        Logout
      </button>
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
