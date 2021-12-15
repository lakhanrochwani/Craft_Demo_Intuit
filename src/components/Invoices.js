import React, { useState } from 'react';

function Invoices({ client, date, amount, status, reference, onEdit, id }) {

  return (
    <>
      <tr>
        <td>{date}</td>
        <td>{client}</td>
        <td>{amount}</td>
        <td>{reference}</td>
        <td>{status}</td>
      </tr>
      <button onClick={() => onEdit(id)}>Edit</button>
    </>
  );
}
export default Invoices;
