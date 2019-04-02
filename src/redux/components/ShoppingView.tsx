import React from 'react';

export interface ShoppingBaseProps {
  className?: string;
  children?: React.ReactNode;
}

export type ShoppingNativeProps = {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
} & ShoppingBaseProps;

export type ShoppingAnchorProps = {
  name: string;
  price: number;
  amount: number;
};

export type ShoppingViewProps = ShoppingAnchorProps & ShoppingNativeProps;

class ShoppingView extends React.PureComponent<ShoppingViewProps> {
  render() {
    const { name, price, amount, ...otherProps } = this.props;
    return (
      <div {...otherProps}>
        <div>书名:{name}</div>
        <div>单价:{price}</div>
        <div>数量:{amount}</div>
        <div>金额:{price * amount}元</div>
      </div>
    )
  }
}

export default ShoppingView;
