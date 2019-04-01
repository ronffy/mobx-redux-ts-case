import React from 'react';

const MarketView = ({ name, price, amount }) => (
  <div>
    <div>书名:{name}</div>
    <div>单价:{price}</div>
    <div>存货:{amount}</div>
  </div>
);

export default MarketView;
