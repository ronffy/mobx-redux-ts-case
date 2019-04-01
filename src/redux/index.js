import React, { Component } from 'react';
import ShopingContainer from './ShopingContainer';
import MarketContainer from './MarketContainer';
import classNames from 'classnames';
import { Provider } from 'react-redux';
import store from './store';
import './index.css';

export default class Bookstore extends Component {
  render() {
    const { className } = this.props;
    return (
      <Provider store={store} >
        <div className={classNames('reduxIndex', className)}>
          <h2>Redux 版本</h2>
          {/* 商场 */}
          <MarketContainer />

          {/* 购物车 */}
          <ShopingContainer />

        </div>
      </Provider>
      
    );
  }
}
