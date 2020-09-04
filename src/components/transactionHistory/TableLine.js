import React from 'react';
import styles from './TransactionList.module.css';
import PropTypes from 'prop-types';


let i = 0;
const Color = () => {
    i++;
    return (i % 2 === 0 ? { backgroundColor: 'rgb(112, 114, 114)' } : { backgroundColor: 'rgb(213, 216, 216)' })
}

function TabbleLine({id, type, amount, currency }) {
    return (
        <tr key={id} style={Color()}>
            <td className={styles.line}>{type}</td>
            <td className={styles.line}>{amount}</td>
            <td className={styles.line}>{currency}</td>
        </tr>
    )
}

TabbleLine.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired
}

export default TabbleLine;