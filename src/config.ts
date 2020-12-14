export const reusableConfig = (config: any) => {
  if (config.plugins === undefined) config.plugins = [];
  if (config.theme === undefined) config.theme = {};
  if (config.theme.colors === undefined) config.theme.colors = {};
  if (config.theme.spacing === undefined) config.theme.spacing = {};
  if (config.theme.fontSize === undefined) config.theme.fontSize = {};
  if (config.theme.truncate === undefined) config.theme.truncate = {};
  if (config.theme.truncate.lines === undefined)
    config.theme.truncate.lines = {};
  if (config.variants.backgroundColor === undefined) {
    config.variants.backgroundColor = [];
  }
  if (config.variants.borderColor === undefined) {
    config.variants.borderColor = [];
  }

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
    13: '3.25rem',
    '1/2': '50%',
    '1/3': '33.333333%',
    '2/3': '66.666667%',
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
    'fixed-top': '2.75rem',
    'fixed-bottom': '3rem',
  };

  config.theme.fontSize = {
    ...config.theme.fontSize,
    '2xs': ['0.625rem', { lineHeight: '1rem' }],
    '2sm': ['0.8125rem', { lineHeight: '1.125rem' }],
    lsm: ['0.9375rem', { lineHeight: '1.375rem' }],
    llg: ['1.0625rem', { lineHeight: '1.625rem' }],
    '2lg': ['1.1875rem', { lineHeight: '1.875rem' }],
  };

  config.theme.truncate.lines = {
    ...config.theme.truncate.lines,
    2: '2',
    3: '3',
    4: '4',
    5: '5',
  };

  config.variants.backgroundColor = [
    ...config.variants.backgroundColor,
    'disabled',
  ];

  config.variants.borderColor = [...config.variants.borderColor, 'disabled'];

  return config;
};
