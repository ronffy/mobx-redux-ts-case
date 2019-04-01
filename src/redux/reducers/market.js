import { BUY_ADD, BUY_CUT, MARKET_REQUESR_MARKETLIST } from '../actions';
import produce from 'immer';
import { getOffer1Amount } from '../utils';

const defaultState = {
  marketListIds: [],
  marketListMap: {},
  buyedListIds: [],
  buyedTotal: 0,
  offer1Amount: 0,
}

const market = produce((draftState, action) => {
  const { type, payload } = action;
  if (!draftState) {
    return defaultState;
  }
  const { marketListMap, buyedListIds } = draftState;
  const currItem = marketListMap[payload.id];

  switch (type) {
    case BUY_ADD:
      // 卖光了 return
      if (!currItem.amount) {
        break;
      }

      currItem.amount--;
      currItem.buyAmount++;
      draftState.buyedTotal += currItem.price;
      draftState.offer1Amount = getOffer1Amount(buyedListIds, marketListMap);

      if (!buyedListIds.includes(payload.id)) {
        buyedListIds.push(payload.id);
      }
      break;

    case BUY_CUT:
      // 购物车无此项 return
      if (!currItem.buyAmount) {
        break;
      }
      currItem.amount++;
      currItem.buyAmount--;
      draftState.buyedTotal -= currItem.price;
      draftState.offer1Amount = getOffer1Amount(buyedListIds, marketListMap);

      const buyedIndex = buyedListIds.indexOf(payload.id);
      if (!currItem.buyAmount && buyedIndex > -1) {
        buyedListIds.splice(buyedIndex, 1);
      }
      break;

    case MARKET_REQUESR_MARKETLIST:
      const { marketList } = payload;
      for (const item of marketList) {
        const id = item.id;
        draftState.marketListIds.push(id);
        marketListMap[id] = item;
      }
      break;

    default:
      return draftState || defaultState;
  }
})


export default market
