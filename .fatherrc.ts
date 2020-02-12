import { IBundleOptions } from 'father';

// const;

const options: IBundleOptions = {
  entry: './src/index.ts',
  esm: 'babel',
  cjs: 'babel',
  // umd: {
  //   name: 'cbsama-ui',
  //   globals: {
  //     react: 'React',
  //   },
  // },
  doc: {
    base: '/cbsama-ui/',
    src: './',
    ignore: [
      './lib',
      './es',
      './node_modules',
      'changelog.md',
      'readme_zh-CN.md',
      'contributing.md',
      'license.md',
      '__template__/*.mdx',
    ],
  },
  disableTypeCheck: true,
  preCommit: {
    eslint: true,
    prettier: true,
  },
  pkgs: ['cbsama-ui'],
};

export default options;
