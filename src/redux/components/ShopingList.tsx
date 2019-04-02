import React from 'react';
import ShoppingView, { ShoppingViewProps } from './ShoppingView';
import classNames from 'classnames';
import './shoppingList.css';
import { MarketListItemProps, onAddBuy, onCutBuy } from '../interface';

export interface ShoppingListBaseProps {
  className?: string;
  children?: React.ReactNode;
}

export type ShoppingListNativeProps = {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
} & ShoppingListBaseProps;

export type ShoppingListAnchorProps = {
  list: MarketListItemProps[];
  onAddBuy: onAddBuy;
  onCutBuy: onCutBuy;
};

export type ShoppingListProps = ShoppingListAnchorProps & ShoppingListNativeProps;

class ShoppingList extends React.Component<ShoppingListProps> {
  render() {
    const { list, onAddBuy, onCutBuy, ...otherProps } = this.props;
    return (
      <div className={classNames('shoppingRoot', otherProps.className)} {...otherProps}>
        {
          list.map(({ name, price, amount, buyAmount, id }) => {
            const bookviewProps: ShoppingViewProps = {
              name,
              price,
              amount: buyAmount
            };
            return (
              <div key={id} className={classNames('shoppingItem', 'clearfix')}>
                <section>
                  <button
                    onClick={() => onCutBuy(id)}
                    disabled={!buyAmount}
                  >
                    -
              </button>
                </section>
                <section>
                  <ShoppingView {...bookviewProps} />
                </section>
                <section>
                  <button
                    onClick={() => onAddBuy(id)}
                    disabled={!amount}
                  >
                    +
              </button>
                </section>
              </div>
            );
          })
        }
      </div>
    )
  }
}

export default ShoppingList;
