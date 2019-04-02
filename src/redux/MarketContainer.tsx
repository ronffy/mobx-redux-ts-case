import React, { Component } from 'react';
import MarketList from './components/MarketList';
import { connect } from 'react-redux';
import { BUY_ADD, handleRequestMarketList } from './actions';
import { getListFromMap } from './utils';

const mapStateToProps = ({ market }) => {
  const { marketListIds, marketListMap } = market;
  const marketList = getListFromMap(marketListIds, marketListMap)
  return {
    marketList
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
  onRequestMarketList() {
    dispatch(handleRequestMarketList())
  }
})

@connect(mapStateToProps, mapDispatchToProps)
class MarketContainer extends Component {

  componentDidMount() {
    this.props.onRequestMarketList();
  }

  render() {
    const { marketList, onAddBuy } = this.props;
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
