import React from 'react';

function Transaction({ date, amount, description, reference }) {
  return (
    <>
      <tr>
        <td>{date}</td>
        <td>{reference}</td>
        <td>{amount}</td>
        <td>{description}</td>
      </tr>
    </>
  );
}
export default Transaction;
