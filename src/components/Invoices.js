import React from 'react';

function Invoices({ client, date, amount, status, reference }) {
  return (
    <>
      <tr>
        <td>{date}</td>
        <td>{client}</td>
        <td>{amount}</td>
        <td>{reference}</td>
        <td>{status}</td>
      </tr>
    </>
  );
}
export default Invoices;
