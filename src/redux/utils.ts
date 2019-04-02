
interface MapProps<T> {
  [id: string]: T;
}
export function getListFromMap<T>(keys: string[], map: MapProps<T>): T[] {
  let resault: T[] = [];
  if (!keys || !keys.length) {
    return resault;
  }
  for (const key of keys) {
    if (map[key]) {
      resault.push(map[key])
    }
  }
  return resault;
}



interface OfferItem {
  buyAmount: number;
  price: number;
  id: string;
}

interface Options {
  offerIds: string[]; // 参与offer的商品id
  buyedTotal: number; // 满减金额
  offerAmount: number; // 优惠金额
}

// 满减优惠活动
export function getOfferAmount<T extends OfferItem>(
  keys: string[], 
  map: MapProps<T>, 
  options: Options
): number {
  let resault = 0;
  let total = 0;
  const { offerIds, buyedTotal, offerAmount } = options;
  const offerLength = offerIds.length;
  if (!keys || !keys.length) {
    return resault;
  }
  let findAmount = 0;
  for (const key of keys) {
    const item = map[key];
    if (!item) {
      continue;
    }
    const { buyAmount, price, id } = item;
    if (offerIds.includes(id)) {
      continue;
    }
    total += buyAmount * price;
    findAmount++;
    if (findAmount === offerLength) {
      break;
    }
  }
  if (findAmount === offerLength && total >= buyedTotal) {
    resault = offerAmount;
  }
  return resault;
}

