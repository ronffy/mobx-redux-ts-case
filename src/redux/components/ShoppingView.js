import React from 'react';

const ShoppingView = ({ name, price, amount }) => (
  <div>
    <div>书名:{name}</div>
    <div>单价:{price}</div>
    <div>数量:{amount}</div>
    <div>金额:{price * amount}元</div>
  </div>
);

export default ShoppingView;
