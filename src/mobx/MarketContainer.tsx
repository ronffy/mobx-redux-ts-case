import React, { Component } from 'react';
import { observer } from 'mobx-react';
import MarketList from './components/MarketList';
import { IStore } from './store';

interface Iprops {
  store: IStore
}

@observer
class MarketContainer extends Component<Iprops> {
  render() {
    const { store } = this.props;
    const { marketList, onAddBuy } = store;
    return (
      <div>
        <h3>商场</h3>
        <MarketList
          list={marketList}
          onAddBuy={onAddBuy}
        />
      </div>
    );
  }
}

export default MarketContainer;
