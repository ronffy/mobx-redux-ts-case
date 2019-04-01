import React from 'react';
import ShoppingView, { IShoppingViewProps } from './ShoppingView';
import { observer } from 'mobx-react';
import classNames from 'classnames';
import './shoppingList.css';
import { IMarketListItem, onAddBuy, onCutBuy } from '../interface';

interface Iprops {
  list: IMarketListItem[];
  onAddBuy: onAddBuy;
  onCutBuy: onCutBuy;
  className?: string;
  [props: string]: any;
}

const ShoppingList = observer(({ list, onAddBuy, onCutBuy, ...otherProps }: Iprops) => (
  <div className={classNames('shoppingRoot', otherProps.className)} {...otherProps}>
    {
      list.map(({ name, price, amount, buyAmount, id }) => {
        const bookviewProps: IShoppingViewProps = {
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
));

export default ShoppingList;
