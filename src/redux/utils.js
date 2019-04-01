
export function getListFromMap(keys, map) {
  let resault = [];
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

// 优惠活动1：react + mobx 满 40元可优惠3元
export function getOffer1Amount(keys, map) {
  let resault = 0;
  let total = 0;
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
    if (id !== 1 && id !== 2) {
      continue;
    }
    total += buyAmount * price;
    findAmount++;
    if (findAmount === 2) {
      break;
    }
  }
  if (findAmount === 2 && total >= 40) {
    resault = 3;
  }
  return resault;
}
