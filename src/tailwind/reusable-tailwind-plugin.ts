const plugin = require('tailwindcss/plugin');

export const reusableTailwindPlugin = {
  plugins: [
    plugin(({ addBase, theme }: any) => {
      addBase({
        body: { marginBottom: theme('spacing.fixed-bottom') },
        button: {
          '&:focus': {
            outline: '2px solid transparent',
            outlineOffset: '2px',
          },
        },
        input: {
          '&:focus': {
            outline: '2px solid transparent',
            outlineOffset: '2px',
          },
        },
        textarea: {
          '&:focus': {
            outline: '2px solid transparent',
            outlineOffset: '2px',
          },
        },
      });
    }),
  ],
};
