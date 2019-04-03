import React, { Component } from 'react';
import MarketList from './components/MarketList';
import { connect, Connect, DispatchProp } from 'react-redux';
import { Dispatch } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { BUY_ADD, handleRequestMarketList } from './actions';
import { getListFromMap } from './utils';
import { StoreState, MarketStateProps } from './reducers';

const mapStateToProps = ({ market }: StoreState) => {
  const { marketListIds, marketListMap } = market;
  const marketList = getListFromMap(marketListIds, marketListMap)
  return {
    marketList
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onAddBuy(id: string) {
    dispatch({
      type: BUY_ADD,
      payload: {
        id
      }
    })
  },
  onRequestMarketList() {
    dispatch(handleRequestMarketList() as any)
  }
})

interface MarketContainerProps extends DispatchProp {
  marketList: MarketStateProps[];
  onAddBuy: (id: string) => void;
  onRequestMarketList: () => void;
}

class MarketContainer extends Component<MarketContainerProps> {

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

export default connect(mapStateToProps, mapDispatchToProps)(MarketContainer);
