import React, { Component } from 'react';
import ShopingList from './components/ShopingList';
import { BUY_ADD, BUY_CUT } from './actions';
import { connect } from 'react-redux';

import { getListFromMap } from './utils';

const mapStateToProps = ({ market }) => {
  const { buyedListIds, marketListMap } = market;
  const buyedList = getListFromMap(buyedListIds, marketListMap)
  return {
    buyedList,
    buyedTotal: market.buyedTotal,
    offer1Amount: market.offer1Amount
  }
}

const mapDispatchToProps = (dispatch) => ({
  onAddBuy(id) {
    dispatch({
      type: BUY_ADD,
      payload: {
        id
      }
    })
  },
  onCutBuy(id) {
    dispatch({
      type: BUY_CUT,
      payload: {
        id
      }
    })
  }
})

@connect(mapStateToProps, mapDispatchToProps)
class ShopingContainer extends Component {
  render() {
    const { buyedList, buyedTotal, offer1Amount, onAddBuy, onCutBuy } = this.props;
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
            优惠: {offer1Amount} 元
          </div>
          <div>
            总价: {buyedTotal - offer1Amount} 元
          </div>
        </div>
      </div>
    );
  }
}

export default ShopingContainer;
