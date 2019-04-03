
import { MarketListItemProps } from '../types';

export function requestMarketList(): Promise<MarketListItemProps[]> {
  return new Promise((res) => {
    setTimeout(() => {
      res([
        {
          id: '1',
          name: 'react',
          price: 11,
          amount: 5,
          buyAmount: 0
        },
        {
          id: '2',
          name: 'mobx',
          price: 12,
          amount: 5,
          buyAmount: 0
        },
        {
          id: '3',
          name: 'redux',
          price: 13,
          amount: 5,
          buyAmount: 0
        }
      ]);
    }, 300);
  })
}
