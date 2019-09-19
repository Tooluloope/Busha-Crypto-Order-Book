import React, { Fragment } from 'react';
import'./column.style.css';

export const Column = ({ data, title }) => (
    <div>
       <div>{title}</div>
      {data.map(values => (
        <div className="row">
          <div>{values[0]}</div>
          <div>{values[1]}</div>
        </div>
    ))}     
    </div>
   
);