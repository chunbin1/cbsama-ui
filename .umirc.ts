export default {
  title: 'cbsama-ui',
  manifest: {},
  base: '/cbsama-ui/',
  publicPath: '/cbsama-ui/',
  hash: true,
  resolve: {
    includes: ['docs', 'src/components'],
  },
  styles: [
    `a[title='站长统计'] { display: none; }`,
    '.demo_css .dot {height: 1em !important;width: 1em !important;}',
  ],
  // links: [{ rel: 'manifest', href: '/asset-manifest.json' }],
  // navs: {
  //   'zh-CN': [
  //     null,
  //     { title: 'GitHub', path: 'https://github.com/umijs/hooks' },
  //     { title: '更新日志', path: 'https://github.com/umijs/hooks/releases' },
  //   ],
  //   'en-US': [
  //     null,
  //     { title: 'GitHub', path: 'https://github.com/umijs/hooks' },
  //     { title: 'Changelog', path: 'https://github.com/umijs/hooks/releases' },
  //   ],
  // },
  // headScripts: ['https://v1.cnzz.com/z_stat.php?id=1278602214&web_id=1278602214'],
};
