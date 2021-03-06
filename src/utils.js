export function capitalize(str) {
  return str[0].toUpperCase() + str.substring(1);
}

export const currencySymbols = {
  USD: '$',
  GBP: '£',
  AUD: '$',
  JPY: '¥',
  RUB: '₽',
};

export function splitName(name) {
  if (typeof name != 'string') return [null, null];
  const spaceIndex = name.indexOf(' ');
  if (spaceIndex !== -1) {
    return [name.slice(0, spaceIndex), name.slice(spaceIndex + 1)];
  }
  return [name, null];
}

export function allAttributesChosen(attrs) {
  for (const a in attrs) {
    if (!attrs[a].choice) return false;
  }
  return true;
}

export function sameAttributes(attrs1, attrs2) {
  for (const key in attrs1) {
    if (attrs1[key].choice !== attrs2[key]?.choice) return false;
  }
  return true;
}

export function getPrice(chosenCurrency) {
  return Number(
    (
      this.prices.find(price => price.currency.label === chosenCurrency)?.amount *
      this.amount
    ).toFixed(2)
  );
}

export function formatCartProduct(product, attributes, amount = 1) {
  const { id, name, category, gallery, prices } = product;
  return {
    id,
    name,
    category,
    gallery,
    prices,
    attributes,
    amount,
    getPrice,
  };
}

export function addToCart(cartItems, product, amount = 1) {
  const arr = [];
  let isFound = false;
  for (const item of cartItems) {
    if (
      item.id === product.id &&
      sameAttributes(item.attributes, product.attributes)
    ) {
      arr.push({ ...item, amount: item.amount + Number(amount) });
      isFound = true;
    } else {
      arr.push(item);
    }
  }
  if (!isFound) {
    arr.push(product);
  }
  return arr;
}

export function removeFromCart(cartItems, product) {
  const arr = [];
  for (const item of cartItems) {
    if (
      item.id === product.id &&
      sameAttributes(item.attributes, product.attributes)
    ) {
      if (item.amount > 1) {
        arr.push({ ...item, amount: item.amount - 1 });
      }
    } else {
      arr.push(item);
    }
  }
  return arr;
}
