
export type Id = string | number;

export interface IMarketListItem {
  id: Id;
  name: string;
  price: number;
  amount: number;
  buyAmount: number;
}

export type onAddBuy = (id: Id) => void;

export type onCutBuy = (id: Id) => void;