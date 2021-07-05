const product = {
  attributes: [
    {
      items: [
        { __typename: 'Attribute', displayValue: '40', value: '40', id: '40' },
        { __typename: 'Attribute', displayValue: '41', value: '41', id: '41' },
        { __typename: 'Attribute', displayValue: '42', value: '42', id: '42' },
        { __typename: 'Attribute', displayValue: '43', value: '43', id: '43' },
      ],
      name: 'Size',
      type: 'text',
      id: 'Size',
      __typename: 'AttributeSet',
    },
    {
      items: [
        {
          __typename: 'Attribute',
          displayValue: '#00f',
          value: 'Blue',
          id: '40',
        },
        {
          __typename: 'Attribute',
          displayValue: '#f00',
          value: 'Red',
          id: '42',
        },
        {
          __typename: 'Attribute',
          displayValue: '#0f0',
          value: 'Green',
          id: '43',
        },
      ],
      name: 'Color',
      type: 'swatch',
      id: 'Color',
      __typename: 'AttributeSet',
    },
  ],
  category: 'clothes',
  description: '<p>Awesome winter jacket</p>',
  gallery: [
    'https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016105/product-image/2409L_61.jpg',
    'https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016107/product-image/2409L_61_a.jpg',
    'https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016108/product-image/2409L_61_b.jpg',
    'https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016109/product-image/2409L_61_c.jpg',
    'https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016110/product-image/2409L_61_d.jpg',
    'https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016111/product-image/2409L_61_e.jpg',
  ],

  inStock: true,
  name: 'Jacket brand neo',
  prices: [
    { __typename: 'Price', amount: 518.47, currency: 'USD' },
    { __typename: 'Price', amount: 372.67, currency: 'GBP' },
    { __typename: 'Price', amount: 668.83, currency: 'AUD' },
    { __typename: 'Price', amount: 55990.46, currency: 'JPY' },
    { __typename: 'Price', amount: 39207.96, currency: 'RUB' },
  ],
};

export default product;
