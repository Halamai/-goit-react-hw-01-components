import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from './friendListItem/FriendListItem';

const FriendList = ({ friends }) => {
  // console.log(friends);
  return (
    <ul className="friend-list">
      {friends.map(friend => (
        <FriendListItem friend={friend} key={friend.name} />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ),
};
export default FriendList;
