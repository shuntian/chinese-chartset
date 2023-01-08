const fs = require('fs');
const path = require('path');

// read contents of the file
const filePath = path.resolve(__dirname, './chinese-pinyin-multi-source.txt');
const data = fs.readFileSync(filePath, 'UTF-8');

// split the contents by new line
const lines = data.split(/\r?\n/);

const rst = lines.map(item => {
  if (!item) return null;
  item = item.charAt(0) + ' ' + item.substring(1);
  return item.replaceAll('、', ',');
});

const newFilePath = path.resolve(__dirname, './chinese-pinyin-multi.txt');
fs.writeFileSync(newFilePath, rst.join('\n').toString());