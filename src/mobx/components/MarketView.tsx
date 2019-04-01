import React from 'react';

export interface IMarketViewProps {
  name: string;
  price: number;
  amount: number;
}

const MarketView = ({ name, price, amount }: IMarketViewProps) => (
  <div>
    <div>书名:{name}</div>
    <div>单价:{price}</div>
    <div>存货:{amount}</div>
  </div>
);

export default MarketView;
