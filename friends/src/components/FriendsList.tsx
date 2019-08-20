import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Friend from './Friend';
import axiosWithAuth from '../utils/axiosWithAuth';
import { FriendType } from '../types';
import AddForm from './AddForm';

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

  const onAdd = (friend: FriendType): void => {
    const getNewFriends = async (): Promise<void> => {
      try {
        const response = await axiosWithAuth().post(
          'http://localhost:5000/api/friends',
          friend
        );
        console.log(response);
        setFriends(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getNewFriends();
  };

  const onDelete = (id: number): void => {
    const getNewFriends = async (): Promise<void> => {
      try {
        const response = await axiosWithAuth().delete(
          `http://localhost:5000/api/friends/${id}`
        );
        console.log(response);
        getFriends();
      } catch (error) {
        console.log(error);
      }
    };

    getNewFriends();
  };

  return (
    <div className="friends-list">
      <button type="button" onClick={onLogout}>
        Logout
      </button>
      <AddForm onAdd={onAdd} />
      <h1>Friends List</h1>
      {friends.map(
        (friend): React.ReactElement => (
          <Friend key={friend.id} friend={friend} onDelete={onDelete} />
        )
      )}
    </div>
  );
};

export default FriendsList;
