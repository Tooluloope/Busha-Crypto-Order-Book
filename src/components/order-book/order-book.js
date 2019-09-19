import React, { memo } from 'react';
import { Column } from '../column/column';
import './order-book.style.css'

export const OrderBook = memo(({ bids, asks }) => {
  if (!bids || !asks) {
    return null;
  }
  return (
    <div className='order' >
      <Column  title="Bids" data={bids} />
      <Column title="Asks" data={asks} />
    </div>
  )
});

