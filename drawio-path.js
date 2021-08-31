const fs = require('fs');
const path = require('path');

const basicPath = path.join(__dirname, 'public/drawio');

const files = fs.readdirSync(basicPath);

// 过滤掉文件和没用的文件夹
const dirs = files.filter(file => file !== 'node_modules' && !file.includes('.'));

let drawioPaths = dirs.map(dir => ({
  source: `/${dir}/:slug*`,
  destination: `/drawio/${dir}/:slug*`,
}));

drawioPaths.unshift({
  source: "/drawio",
  destination: "/drawio/index.html",
});

module.exports = drawioPaths;