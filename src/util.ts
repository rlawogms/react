const nationCurrency = {
  korea: '원',
  japan: '엔',
  china: '옌',
};

const changeToCurrency = (str: string, nation: 'korea' | 'japan' | 'china') =>
  Number(str).toLocaleString + nationCurrency[nation];
