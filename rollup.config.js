import svgr from '@svgr/rollup';
import del from 'rollup-plugin-delete';
import typescript from 'rollup-plugin-typescript2';
import url from 'rollup-plugin-url';
import pkg from './package.json';

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'playground/src/component-lib/index.js',
        format: 'esm',
        banner: '/* eslint-disable */',
      },
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'esm' },
    ],
    plugins: [
      svgr(),
      del({ targets: ['dist/*', 'playground/src/component-lib'] }),
      typescript(),
      url(),
    ],
    external: Object.keys(pkg.peerDependencies || {}),
  },
];
