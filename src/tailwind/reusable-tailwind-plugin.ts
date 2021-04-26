const plugin = require('tailwindcss/plugin');

export const reusableTailwindPlugin = {
  plugins: [
    plugin(({ addBase, theme }: any) => {
      addBase({
        body: { marginBottom: theme('spacing.fixed-bottom') },
      });
    }),
  ],
};
