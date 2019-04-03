import { BUY_ADD, BUY_CUT, MARKET_REQUESR_MARKETLIST } from '../actions';
import produce from 'immer';
import { getOfferAmount } from '../utils';
import { MarketListItemProps } from '../types';

interface MarketListMapProps {
  [id: string]: MarketListItemProps
}

export interface MarketStateProps {
  marketListIds: string[];
  marketListMap: MarketListMapProps;
  buyedListIds: string[];
  buyedTotal: number;
  offer1Amount: number;
}

const defaultState: MarketStateProps = {
  marketListIds: [],
  marketListMap: {},
  buyedListIds: [],
  buyedTotal: 0,
  offer1Amount: 0,
}

// 优惠活动1：react + mobx 满 40元可优惠3元
const offer1Option = {
  offerIds: ['1', '2'],
  offerAmount: 3,
  buyedTotal: 40
}

export interface MarketAction {
  type: string;
  payload: {
    id?: string;
    marketList?: MarketListItemProps[]
  }
}

interface Market {
  (state: MarketStateProps | undefined, action: any): MarketStateProps;
}

const market: Market = produce((draftState, action) => {
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
      draftState.offer1Amount = getOfferAmount<MarketListItemProps>(buyedListIds, marketListMap, offer1Option);

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
      draftState.offer1Amount = getOfferAmount(buyedListIds, marketListMap, offer1Option);

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
