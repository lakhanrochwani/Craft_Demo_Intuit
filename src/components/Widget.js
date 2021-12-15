import React, { useState, useEffect } from 'react';
import Invoices from './Invoices';

function Widget({ invoices, transaction }) {
  const [invoiceState, setInvoiceState] = useState(invoices);
  const [transactionState, setTransactionState] = useState(transaction);
  const [currentInvoice, setCurrentInvoice] = useState(0);
  const [datestate, setDate] = useState();
  const [amountstate, setAmount] = useState();
  const [clientstate, setClient] = useState();
  const [referencestate, setReference] = useState();

  const checkAmount = () => {
    let arrayTransaction = transactionState.map((record) => record.amount); //[]
    let invoiceArray = invoiceState.forEach((invoice) => {
      if (arrayTransaction.includes(invoice.amount)) {
        invoice.status = 'PAID';
      }
    });
    console.log('Here', invoiceArray);
  };

  const handleEdit = (id) => {
    let invoice = invoiceState.findIndex((element) => element.id === id);
    let obj = invoiceState[invoice];
    console.log(obj);
    setDate(obj.date);
    setClient(obj.client);
    setAmount(obj.amount);
    setReference(obj.reference);
    setCurrentInvoice(id);
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    console.log(name, value);
    if (name === 'client') {
      setClient(value);
    }
    let updatedRecords = invoiceState.map((invoice) => {
      if (invoice.id === currentInvoice) {
        invoice.client = clientstate;
      }
      return invoice;
    });
    console.log('Updated', updatedRecords);
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
        <form>
          <div>
            <label>Date</label>
            <input
              type="text"
              name="date"
              value={datestate}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Client</label>
            <input
              type="text"
              name="client"
              value={clientstate}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Amount</label>
            <input
              type="text"
              name="amount"
              value={amountstate}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Reference</label>
            <input
              type="text"
              name="reference"
              value={referencestate}
              onChange={handleChange}
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default Widget;
