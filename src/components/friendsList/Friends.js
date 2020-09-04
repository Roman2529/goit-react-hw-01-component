import React from 'react';
import friendsItems from '../../assets/friends.json';
import FriendsList from './FriendsList.js';

function Friends() {
  return (
    <>
      <FriendsList info={friendsItems} />
    </>
  );
}


export default Friends;
