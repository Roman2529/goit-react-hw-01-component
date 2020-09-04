import React from 'react';
import TransactionList from './TransactionList.js';
import itemsFr from '../../assets/transactions.json';


function Transaction() {
    return (
        <>
            <TransactionList items={itemsFr} />
        </>
    )
}


export default Transaction;