import React from 'react';
import MarketView from './MarketView';
import classNames from 'classnames';
import './marketList.css';

const MarketList = ({ list, onAddBuy, ...otherProps }) => (
  <div className={classNames('marketRoot', otherProps.className)} {...otherProps}>
    {
      list.map(({ name, price, amount, id }) => {
        const bookviewProps = {
          name,
          price,
          amount
        };
        return (
          <div key={id} className={classNames('marketItem', 'clearfix')}>
            <div className="fl-left" >
              <MarketView {...bookviewProps} />
            </div>
            <div className="fl-right">
              <button
                onClick={() => onAddBuy(id)}
                disabled={!amount}
              >
                加入购物车
              </button>
            </div>
          </div>
        );
      })
    }
  </div>
)

export default MarketList;
