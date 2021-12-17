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
        <td>
          <button style={{ float: 'left' }} onClick={() => onEdit(id)}>
            Edit
          </button>
        </td>
      </tr>
      {/* <button style={{float: "left"}} onClick={() => onEdit(id)}>Edit</button> */}
    </>
  );
}
export default Invoices;
