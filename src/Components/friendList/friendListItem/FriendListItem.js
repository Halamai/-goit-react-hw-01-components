import React from 'react';

import s from '../FriendList.module.css';

const FriendListItem = ({ friend }) => {
  // console.log(friend);

  return (
    <li className={s.item} key={friend.name}>
      <span className={`${s.status} ${friend.isOnline ? s.online : s.offline}`}></span>
      <img className={s.avatar} src={friend.avatar} alt={friend.avatar} width="48" />
      <p className={s.name}>{friend.name}</p>
    </li>
  );
};

export default FriendListItem;
