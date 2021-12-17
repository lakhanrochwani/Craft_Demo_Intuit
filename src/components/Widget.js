import React, { useState, useEffect } from 'react';
import Invoices from './Invoices';

function Widget({ invoices, transaction }) {
  const [invoiceState, setInvoiceState] = useState(invoices);
  const [transactionState, setTransactionState] = useState(transaction);
  const [editInvoice, setEditInvoice] = useState({});

  const checkAmount = () => {
    let arrayTransaction = transactionState.map((record) => record.amount);
    let invoiceArray = invoiceState.forEach((invoice) => {
      if (arrayTransaction.includes(invoice.amount)) {
        invoice.status = 'PAID';
      }
    });
  };

  const handleEdit = (id) => {
    let invoice = invoiceState.findIndex((element) => element.id === id);
    let obj = invoiceState[invoice];
    setEditInvoice(obj);
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    // console.log(name, value);
    setEditInvoice({ ...editInvoice, [name]: value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    let updatedRecords = invoiceState.map((invoice, index) => {
      if (invoice.id === editInvoice.id) {
        // console.log('invoice', invoice);
        invoice = editInvoice;
      }
      return invoice;
    });
    // console.log('Updated:', updatedRecords);
    setInvoiceState(updatedRecords);
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
            onEdit={handleEdit}
            id={record.id}
          />
        ))}
      </table>
      <div>
        <form onSubmit={handleUpdate}>
          <div>
            <label>Date</label>
            <input
              type="text"
              name="date"
              value={editInvoice.date}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Client</label>
            <input
              type="text"
              name="client"
              value={editInvoice.client}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Amount</label>
            <input
              type="text"
              name="amount"
              value={editInvoice.amount}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Reference</label>
            <input
              type="text"
              name="reference"
              value={editInvoice.reference}
              onChange={handleChange}
            />
          </div>
          <div>
            <input type="submit" name="update" />
          </div>
        </form>
      </div>
    </>
  );
}

export default Widget;
