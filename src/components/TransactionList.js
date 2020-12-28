import React, { useContext } from 'react';
import { Transaction } from './Transaction';
import { GlobalContext } from '../context/GlobalState';

export const TransactionList = () => {
    const { transactions } = useContext(GlobalContext);
    
    let transaction;

    if (transactions.length > 0) {
        transaction = transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />));
    }
    else {
        transaction = <li>There were no transactions made.</li>;
    }

    return (
        <div>
            <h3>History</h3>
            <ul className="list">
                {transaction}
            </ul>
        </div>
    )
}
