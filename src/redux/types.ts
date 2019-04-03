
export interface MarketListItemProps {
  id: string;
  name: string;
  price: number;
  amount: number;
  buyAmount: number;
}

export type onAddBuy = (id: string) => void;

export type onCutBuy = (id: string) => void;