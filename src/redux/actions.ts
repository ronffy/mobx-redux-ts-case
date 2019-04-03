import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { requestMarketList } from './servers/market';


export const BUY_ADD = 'BUY_ADD';
export const BUY_CUT = 'BUY_CUT';
export const MARKET_REQUESR_MARKETLIST = 'MARKET_REQUESR_MARKETLIST';

export function handleRequestMarketList() {
  return (dispatch: Dispatch): Promise<any> => {
    return requestMarketList().then((data) => dispatch({
      type: MARKET_REQUESR_MARKETLIST,
      payload: {
        marketList: data
      }
    }))
  }
}
