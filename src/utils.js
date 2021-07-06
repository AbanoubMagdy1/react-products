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

export function allAttributesChosen(attrs) {
  for (let a in attrs) {
    if (!attrs[a].choice) return false;
  }
  return true;
}

export function sameAttributes(attrs1, attrs2) {
  for (let key in attrs1) {
    if (attrs1[key].choice !== attrs2[key]?.choice) return false;
  }
  return true;
}

export function getPrice(chosenCurrency) {
  return (
    this.prices.find(price => price.currency === chosenCurrency)?.amount *
    this.amount
  );
}

export function formatCartProduct(product, attributes) {
  const { id, name, category, gallery, prices } = product;
  return {
    id,
    name,
    category,
    gallery,
    prices,
    attributes,
    amount: 1,
    getPrice,
  };
}

export function addToCart(cartItems, product) {
  let arr = [];
  let isFound = false;
  for (let item of cartItems) {
    if (
      item.id === product.id &&
      sameAttributes(item.attributes, product.attributes)
    ) {
      item.amount = item.amount + 1;
      isFound = true;
    }
    arr.push(item);
  }
  if (!isFound) {
    arr.push(product);
  }
  return arr;
}

export function removeFromCart(cartItems, product) {
  let arr = [];
  for (let item of cartItems) {
    if (
      item.id === product.id &&
      sameAttributes(item.attributes, product.attributes)
    ) {
      item.amount = item.amount - 1;
    }
    if (item.amount !== 0) {
      arr.push(item);
    }
  }
  return arr;
}
