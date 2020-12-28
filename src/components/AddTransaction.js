import React, { useState, useContext } from 'react';
import { useAlert } from 'react-alert';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
    const alert = useAlert();

    const { addTransaction, transactions } = useContext(GlobalContext);

    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    function isTextExist(data) {
        let textExist = false;

        if (data.length > 0) {
            data.map(result => {
                if (result.text.toUpperCase() == text.toUpperCase()) {
                    textExist = true;
                }
            });
        }

        return textExist;
    }

    const onSubmit = e => {
        e.preventDefault();

        if (!text) {
            return alert.error('Text should not be empty');
        }
        
        if (amount == 0) {
            return alert.error('Amount should not be 0');
        }

        if (!isTextExist(transactions)) {
            const newTransaction = {
                id: Math.floor(Math.random() * 100000000),
                text,
                amount: +amount
            }
    
            addTransaction(newTransaction);
        } else {
            alert.error("Text already exist");
        }
    }

    return (
        <div>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                <label htmlFor="text">Text</label>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                <label htmlFor="amount">Amount <br />(negative - expense, positive - income)</label>
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </div>
    )
}
