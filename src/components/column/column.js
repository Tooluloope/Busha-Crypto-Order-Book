import React from 'react';
import'./column.style.css';

export const Column = ({ data, title }) => (
    <div>
       

<table class="table">
  <thead>
    <tr>
      
      <th scope="col"></th>
      <th scope="col">{title}</th>
    </tr>
  </thead>
  <tbody>
    {data.map(values => (
      <tr>
        <td>{values[0]}</td>
        <td>{values[1]}</td>
      </tr>
    ))}
  </tbody>
</table>
    </div>
   
);