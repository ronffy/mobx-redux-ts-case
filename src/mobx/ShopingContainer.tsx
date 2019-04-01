import React, { Component } from 'react';
import { observer } from 'mobx-react';
import ShopingList from './components/ShopingList';
import { IStore } from './store';

interface Iprops {
  store: IStore
}

@observer
class ShopingContainer extends Component<Iprops> {
  render() {
    const { store } = this.props;
    const { buyedList, buyedTotal, offerTotal, onAddBuy, onCutBuy } = store;
    return (
      <div className="mt-15 clearfix">
        <h3>购物车</h3>
        <ShopingList
          list={buyedList}
          onAddBuy={onAddBuy}
          onCutBuy={onCutBuy}
        />
        <div>
          <div>
            优惠: {offerTotal} 元
          </div>
          <div>
            总价: {buyedTotal - offerTotal} 元
          </div>
        </div>
      </div>
    );
  }
}

export default ShopingContainer;
