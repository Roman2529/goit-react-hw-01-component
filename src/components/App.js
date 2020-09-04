import React from 'react';
import Profile from './profileTask/Profile.js';
import Statistics from './statisticalTask/Statistics.js';
import Friends from './friendsList/Friends.js';
import Transaction from './transactionHistory/TransactionHistory.js';

const App = () => {
  return (
    <>
      <Profile />
      <Statistics />
      <Friends />
      <Transaction />
    </>
  );
};



export default App;
