import React from 'react';

export interface MarketViewBaseProps {
  className?: string;
  children?: React.ReactNode;
}

export type MarketViewNativeProps = {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
} & MarketViewBaseProps;

export type MarketViewAnchorProps = {
  name: string;
  price: number;
  amount: number;
};

export type MarketViewProps = MarketViewAnchorProps & MarketViewNativeProps;

export class MarketView extends React.PureComponent<MarketViewProps> {
  render() {
    const { name, price, amount, ...otherProps } = this.props;
    return (
      <div {...otherProps}>
        <div>书名:{name}</div>
        <div>单价:{price}</div>
        <div>存货:{amount}</div>
      </div>
    )
  }
}

export default MarketView;
