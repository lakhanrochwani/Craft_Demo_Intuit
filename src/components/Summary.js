import React, { useState, useEffect } from 'react';
import Transaction from './Transaction';

function Summary({ transaction }) {
  let sum = transaction.reduce((a, b) => {
    return a + parseInt(b.amount);
  }, 0);
  const [total, setTotal] = useState(sum);
  const [threshold, setThreshold] = useState(1000);
  const [transactionState, setTransactionState] = useState(transaction);
  const last30Days = () => {
    console.log(
      new Date(transaction[0].date).getDate(),
      new Date(Date.now()).getDate()
    );
    let updated = transactionState.filter((transaction) => {
      if (new Date(transaction.date).getDate() + new Date().getDate() > 30) {
        return transaction;
      }
    });
    setTransactionState(updated);
  };
  useEffect(() => {
    last30Days();
  }, [transaction]);
  console.log('Sum', sum);
  return (
    <>
      <h1>Summary of Transactions</h1>
      <table style={{ width: '100%' }}>
        <th>
          <td>Date</td>
          <td>Reference</td>
          <td>Amount</td>
          <td>Description</td>
        </th>
        {transactionState.map((record) => (
          <Transaction
            key={record.id}
            date={record.date}
            amount={record.amount}
            description={record.description}
            reference={record.reference}
          />
        ))}
      </table>
      <footer>
        <h2
          style={
            sum > threshold
              ? { backgroundColor: 'green' }
              : { backgroundColor: 'yellow' }
          }
        >
          ${total}
        </h2>
      </footer>
    </>
  );
}

export default Summary;
