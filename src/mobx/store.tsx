import { observable, computed, action, autorun, toJS } from 'mobx';
import { IMarketListItem, Id, onAddBuy, onCutBuy } from './interface';

export interface IStoreProps {
  marketList: IMarketListItem[];
  buyedList: IMarketListItem[];
  buyedTotal: number;
  offer1: number;
  offerTotal: number;
}

export interface IStoreMetheds {
  onAddBuy: onAddBuy;
  onCutBuy: onCutBuy;
}

export interface IStore extends IStoreProps, IStoreMetheds {
}

class Store implements IStore {
  @observable
  marketList: IMarketListItem[] = [];

  constructor() {
    setTimeout(() => {
      this.marketList = [
        {
          id: 1,
          name: 'react',
          price: 11,
          amount: 5,
          buyAmount: 0
        },
        {
          id: 2,
          name: 'mobx',
          price: 12,
          amount: 5,
          buyAmount: 0
        },
        {
          id: 3,
          name: 'redux',
          price: 13,
          amount: 5,
          buyAmount: 0
        }
      ];
    }, 300);
  }

  @computed
  get buyedList(): IMarketListItem[] {
    return this.marketList.filter(({ buyAmount }) => buyAmount > 0);
  }

  @computed
  get buyedTotal(): number {
    let total = 0;
    for (const { buyAmount, price } of this.buyedList) {
      if (!buyAmount) {
        continue;
      }
      total += buyAmount * price;
    }
    return total;
  }

  @computed
  get offer1(): number {
    // 优惠活动1：react + mobx 满 40元可优惠3元
    let offerTotal = 0;
    let findAmount = 0;
    for (const { buyAmount, price, id } of this.buyedList) {
      if (id !== 1 && id !== 2) {
        continue;
      }
      offerTotal += buyAmount * price;
      findAmount++;
      if (findAmount === 2) {
        break;
      }
    }
    if (findAmount === 2 && offerTotal >= 40) {
      return 3;
    }
    return 0;
  }

  @computed
  get offerTotal(): number {
    return this.offer1;
  }

  @action
  onAddBuy = (id: Id): void => {
    for (const [index, item] of this.marketList.entries()) {
      if (item.id !== id) {
        continue;
      }
      if (item.amount <= 0) {
        return;
      }
      this.marketList[index] = {
        ...item,
        amount: item.amount - 1,
        buyAmount: item.buyAmount + 1
      };
      break;
    }
  }

  @action
  onCutBuy = action((id: Id): void => {
    for (const [index, item] of this.marketList.entries()) {
      if (item.id !== id) {
        continue;
      }
      if (item.buyAmount <= 0) {
        return;
      }
      this.marketList[index] = {
        ...item,
        amount: item.amount + 1,
        buyAmount: item.buyAmount - 1
      };
      break;
    }
  })
}

const store = new Store();

autorun(() => {
  const _store = toJS(store);
  console.log('marketList:', _store.marketList);
});

export default store;
