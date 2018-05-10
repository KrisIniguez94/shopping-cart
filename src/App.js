import React from 'react';
import './App.css';
import CartHeader from './CartHeader';
import CartFooter from './CartFooter';
import CartItems from './CartItems';

const App = () => (
  <div>
  <CartHeader />
  <CartItems />
  <CartFooter />
  </div>
)

export default App;
