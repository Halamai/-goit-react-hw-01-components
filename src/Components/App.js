import React from 'react';
import Profile from './profile/Profile';
import FriendList from './friendList/FriendList';
import TransactionHistoty from './transactionHistory/TransactionHistoty';
import user from '../data/user.json';
import data from '../data';
import Statistics from './statistics/Statistics';

const App = () => {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data.statistical} />
      <FriendList friends={data.friends} />
      <TransactionHistoty items={data.transactions} />
    </>
  );
};

export default App;
