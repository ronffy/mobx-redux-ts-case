import React, { Component } from 'react';
import ShopingContainer from './ShopingContainer';
import MarketContainer from './MarketContainer';
import store from './store';
import DevTools from 'mobx-react-devtools';
import classNames from 'classnames';
import './index.css';

interface IProps {
  className: string;
  [props: string]: any;
}

export default class Bookstore extends Component<IProps> {
  render() {
    const { className } = this.props;
    return (
      <div className={classNames('mobxIndex', className)}>
        <h2>Mobx 版本</h2>
        {/* 商场 */}
        <MarketContainer store={store} />

        {/* 购物车 */}
        <ShopingContainer store={store} />

        <DevTools />
      </div>
    );
  }
}
