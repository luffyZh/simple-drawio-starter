// 是否是生产环境
window._isProduction = window.origin.indexOf('netease.com') > -1;
// 开发环境指定的 hosts
window._DEV_HOSTS = ['localhost', '127.0.0.1', 'dev-graph.igame.163.com'];
// cdn 上传文件配置
window._uploadImgConfig = {
  host: window._isProduction ? 'music-ox.hz.netease.com' : 'guard.qa.igame.163.com',
  type: 'image',
  bucket: 'yyimgs',
  bizKey: '67bec17c',
  path: 'api/guard/nos/token/whalealloc',
};
// CDN 路径前缀
window._cdnImgPrefix = 'https://p2.music.126.net';