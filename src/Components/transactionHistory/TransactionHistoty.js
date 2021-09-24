import React from 'react';
import PropTypes from 'prop-types';
import s from '../transactionHistory/TransactionHistory.module.css';

const TransactionHistoty = ({ items }) => {
  //   console.log(items);
  return (
    <table className={s.transactionhistory}>
      <thead>
        <tr className={s.history}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr key={item.id} className={s.transaction}>
            <td className={s.type}>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistoty.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
export default TransactionHistoty;
