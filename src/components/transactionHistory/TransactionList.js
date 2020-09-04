import React from 'react';
import TabbleHead from './TableHead';
import TabbleLine from './TableLine';
import PropTypes from 'prop-types';
import styles from './TransactionList.module.css';


function TransactionList(items) {
  return (
    <table className={styles.transaction}>
      <thead>
        <TabbleHead />
      </thead>
      <tbody>
              {items.items.map(el =>(
          <TabbleLine
            key={el.id}
            type={el.type}
            amount={el.amount}
            currency={el.currency}
          />
        ))}
      </tbody>
    </table>
  );
}

TransactionList.propTypes = {
    items: PropTypes.array.isRequired,
}

export default TransactionList;
