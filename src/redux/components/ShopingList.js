import React from 'react';
import ShoppingView from './ShoppingView';
import classNames from 'classnames';
import './shoppingList.css';

const ShoppingList = ({ list, onAddBuy, onCutBuy, ...otherProps }) => (
  <div className={classNames('shoppingRoot', otherProps.className)} {...otherProps}>
    {
      list.map(({ name, price, amount, buyAmount, id }) => {
        const bookviewProps = {
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

export default ShoppingList;
