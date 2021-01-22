export const reusableConfig = (config: any) => {
  if (config.plugins === undefined) config.plugins = [];
  if (config.theme === undefined) config.theme = {};
  if (config.theme.colors === undefined) config.theme.colors = {};
  if (config.theme.spacing === undefined) config.theme.spacing = {};
  if (config.theme.fontFamily === undefined) config.theme.fontFamily = {};
  if (config.theme.fontFamily.sans === undefined)
    config.theme.fontFamily.sans = [];
  if (config.theme.fontSize === undefined) config.theme.fontSize = {};
  if (config.theme.minWidth === undefined) config.theme.minWidth = {};
  if (config.theme.minHeight === undefined) config.theme.minHeight = {};
  if (config.theme.truncate === undefined) config.theme.truncate = {};
  if (config.theme.truncate.lines === undefined)
    config.theme.truncate.lines = {};
  if (config.variants.backgroundColor === undefined) {
    config.variants.backgroundColor = [];
  }
  if (config.variants.borderColor === undefined) {
    config.variants.borderColor = [];
  }

  const size = {
    px: '1px',
    0: '0px',
    0.5: '0.125rem',
    1: '0.25rem',
    1.5: '0.375rem',
    2: '0.5rem',
    2.5: '0.625rem',
    3: '0.75rem',
    3.5: '0.875rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    9: '2.25rem',
    10: '2.5rem',
    11: '2.75rem',
    12: '3rem',
    13: '3.25rem',
    14: '3.5rem',
    16: '4rem',
    18: '4.5rem',
    20: '5rem',
    24: '6rem',
    28: '7rem',
    32: '8rem',
    36: '9rem',
    40: '10rem',
    44: '11rem',
    48: '12rem',
    52: '13rem',
    56: '14rem',
    60: '15rem',
    64: '16rem',
    72: '18rem',
    80: '20rem',
    96: '24rem',
    '1/2': '50%',
    '1/3': '33.333333%',
    '2/3': '66.666667%',
    '4/3': '133.333333%',
    '1/4': '25%',
    '2/4': '50%',
    '3/4': '75%',
    '1/5': '20%',
    '2/5': '40%',
    '3/5': '60%',
    '4/5': '80%',
    '1/6': '16.666667%',
    '2/6': '33.333333%',
    '3/6': '50%',
    '4/6': '66.666667%',
    '5/6': '83.333333%',
    '1/12': '8.333333%',
    '2/12': '16.666667%',
    '3/12': '25%',
    '4/12': '33.333333%',
    '5/12': '41.666667%',
    '6/12': '50%',
    '7/12': '58.333333%',
    '8/12': '66.666667%',
    '9/12': '75%',
    '10/12': '83.333333%',
    '11/12': '91.666667%',
    full: '100%',
  };

  config.plugins = [
    ...config.plugins,
    require('@tailwindcss/forms'),
    require('tailwindcss-truncate-multiline')(),
  ];

  config.theme.colors = {
    ...config.theme.colors,
    'kakao-1': '#f6e24b',
    'kakao-2': '#46272a',
  };

  config.theme.spacing = {
    ...config.theme.spacing,
    ...size,
    'fixed-top': '2.75rem',
    'fixed-bottom': '3rem',
  };

  config.theme.fontFamily.sans = [
    '"Spoqa Han Sans"',
    ...config.theme.fontFamily.sans,
  ];

  config.theme.fontSize = {
    ...config.theme.fontSize,
    '2xs': ['0.625rem', { lineHeight: '1rem' }],
    '2sm': ['0.8125rem', { lineHeight: '1.125rem' }],
    lsm: ['0.9375rem', { lineHeight: '1.375rem' }],
    llg: ['1.0625rem', { lineHeight: '1.625rem' }],
    '2lg': ['1.1875rem', { lineHeight: '1.875rem' }],
  };

  config.theme.minWidth = {
    ...config.theme.minWidth,
    ...size,
  };

  config.theme.minHeight = {
    ...config.theme.minHeight,
    ...size,
  };

  config.theme.truncate.lines = {
    ...config.theme.truncate.lines,
    2: '2',
    3: '3',
    4: '4',
    5: '5',
  };

  config.theme.zIndex = {
    auto: 'auto',
    '-30': '-30',
    '-20': '-20',
    '-10': '-10',
    0: '0',
    10: '10',
    20: '20',
    30: '30',
    40: '40',
    50: '50',
    60: '60',
    70: '70',
    80: '80',
    90: '90',
    100: '100',
  };

  config.variants.backgroundColor = [
    ...config.variants.backgroundColor,
    'disabled',
  ];

  config.variants.borderColor = [...config.variants.borderColor, 'disabled'];

  config.variants.textColor = [...config.variants.textColor, 'disabled'];

  return config;
};
