export function capitalize(str) {
  return str[0].toUpperCase() + str.substring(1);
}
/*
EUR	€
Pounds sterling	GBP	£
US dollar	USD	$
Japanese yen	JPY	¥
    "USD",
      "GBP",
      "AUD",
      "JPY",
      "RUB"*/

export const currencySymbols = {
  USD: '$',
  GBP: '£',
  AUD: '$',
  JPY: '¥',
  RUB: '₽',
};
