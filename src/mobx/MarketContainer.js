import React, { Component } from 'react';
import { observer } from 'mobx-react';
import MarketList from './components/MarketList';

@observer
class MarketContainer extends Component {
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
