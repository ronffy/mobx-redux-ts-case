import React from 'react';
import MarketView, { MarketViewProps } from './MarketView';
import classNames from 'classnames';
import './marketList.css';
import { MarketListItemProps, onAddBuy } from '../types';

export interface MarketListBaseProps {
  className?: string;
  children?: React.ReactNode;
}

export type MarketListNativeProps = {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
} & MarketListBaseProps;

export type MarketListAnchorProps = {
  list: MarketListItemProps[];
  onAddBuy: onAddBuy;
};

export type MarketListProps = MarketListAnchorProps & MarketListNativeProps;

class MarketList extends React.Component<MarketListProps> {
  render() {
    const { list, onAddBuy, children, ...otherProps } = this.props;
    return (
      <div className={classNames('marketRoot', otherProps.className)} {...otherProps}>
        {
          list.map(({ name, price, amount, id }) => {
            const bookviewProps: MarketViewProps = {
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
  }
}

export default MarketList;
