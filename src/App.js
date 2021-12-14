import React, { useState } from 'react';
import './style.css';
import Summary from './components/Summary';
import Widget from './components/Widget';
import transactionData from './mockData/transactionData';
import invoices from './mockData/invoices';

export default function App() {
  const [transaction, setTransaction] = useState(transactionData);
  return (
    <div>
      <Summary transaction={transaction} />
      <Widget invoices={invoices} transaction={transaction} />
    </div>
  );
}
