import React from 'react';
import './App.css';
import { Container, Typography } from '@material-ui/core';
import Selector from './components/selector.component';
import { AppState } from './state';
import { Containers } from './components/order-book/order-book.container';


function App() {
  return (
    <AppState>
       <Container className='mt-5'>
        <Typography align='center' variant='h4'>
          Crypto order book app
        </Typography>
        <Selector></Selector>

        <Containers />
     </Container>
    </AppState>
   
  );
}

export default App;
