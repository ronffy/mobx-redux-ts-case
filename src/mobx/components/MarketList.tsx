import React from 'react';
import MarketView, { IMarketViewProps } from './MarketView';
import { observer } from 'mobx-react';
import classNames from 'classnames';
import './marketList.css';
import { IMarketListItem, onAddBuy } from '../interface';

interface Iprops {
  list: IMarketListItem[];
  onAddBuy: onAddBuy;
  className?: string;
  [props: string]: any;
}

const MarketList = observer(({ list, onAddBuy, ...otherProps }: Iprops) => (
  <div className={classNames('marketRoot', otherProps.className)} {...otherProps}>
    {
      list.map(({ name, price, amount, id }) => {
        const bookviewProps: IMarketViewProps = {
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
));

export default MarketList;
