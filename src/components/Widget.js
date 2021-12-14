import React, { useState, useEffect } from 'react';
import Invoices from './Invoices';

function Widget({ invoices, transaction }) {
  const [invoiceState, setInvoiceState] = useState(invoices);
  const [transactionState, setTransactionState] = useState(transaction);
  const checkAmount = () => {
    let arrayTransaction = transactionState.map((record) => record.amount); //[]
    let invoiceArray = invoiceState.forEach((invoice) => {
      if (arrayTransaction.includes(invoice.amount)) {
        invoice.status = 'PAID';
      }
    });
    console.log('Here', invoiceArray);
  };

  useEffect(() => {
    checkAmount();
  }, []);
  return (
    <>
      <h1>Invoices</h1>
      <table>
        <tr>
          <th>Date</th>
          <th>Client</th>
          <th>Amount</th>
          <th>Reference</th>
          <th>Status</th>
        </tr>
        {invoiceState.map((record) => (
          <Invoices
            key={record.id}
            date={record.date}
            amount={record.amount}
            status={record.status}
            client={record.client}
            reference={record.reference}
          />
        ))}
      </table>
    </>
  );
}

export default Widget;
