import React, { useState, useEffect } from 'react';
import { useAppState } from '../../state';
import { OrderBook } from './order-book';
import WebSockets from '../../websocket';

const message = (type, pair) => JSON.stringify({
    event: `bts:${type}`,
    data: {
        channel: `order_book_${pair}`
    }
});

export const OrderBookContainer = ({ socket }) => {
  const { selectedPair } = useAppState();
  const [componentState, setComponentState] = useState({ bids: null, asks: null });
  useEffect(() => {
    if (!socket || !selectedPair) {
      return undefined;
    }
    socket.send(message('subscribe', selectedPair.id))
    socket.onmessage = ({ data }) => {
      const { bids, asks } = JSON.parse(data).data;
      setComponentState({ bids, asks })
    }
    return () => {
      socket.send(message('unsubscribe', selectedPair.id));
    }
  }, [selectedPair, socket]);
  return <OrderBook bids={componentState.bids} asks={componentState.asks} />
}

export const Containers = WebSockets('wss://ws.bitstamp.net', OrderBookContainer);