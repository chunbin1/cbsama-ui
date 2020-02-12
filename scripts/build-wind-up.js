// 清除打包后的多余文件
const del = require('del');

del.sync(['./{es,lib}/**/__{test,tests}__/**', './{es,lib}/**/demo/**']);
