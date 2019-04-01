import React from 'react';

export interface IShoppingViewProps {
  name: string;
  price: number;
  amount: number;
}

const ShoppingView = ({ name, price, amount }: IShoppingViewProps) => (
  <div>
    <div>书名:{name}</div>
    <div>单价:{price}</div>
    <div>数量:{amount}</div>
    <div>金额:{price * amount}元</div>
  </div>
);

export default ShoppingView;
