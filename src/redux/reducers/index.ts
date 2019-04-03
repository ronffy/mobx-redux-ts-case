import { combineReducers } from 'redux';
import market, { MarketStateProps } from './market';

type StoreState = {
  readonly market: MarketStateProps;
};

export {
  MarketStateProps,
  StoreState
}

export default combineReducers<StoreState>({
  market,
})
