const fs = require('fs');
const path = require('path');
const { IS_DEBUG } = require('./constants');

// read contents of the file
const filePath = path.resolve(__dirname, './chinese-pinyin.txt');
const data = fs.readFileSync(filePath, 'UTF-8');

// split the contents by new line
const lines = data.split(/\r?\n/);

const letters = lines.map(item => {
  const values = item.split(' ').filter(Boolean);
  return values[4];
});

const rst1 = letters.map(item => {
  if (!item) return null;
  const char = item.charAt(0).toUpperCase();
  return char;
}).join('');

const relatePath = IS_DEBUG ? './rst_first_latter.md' : '../docs/04_拼音首字母字符串.md';
const exportPath = path.resolve(__dirname, relatePath);
fs.writeFileSync(exportPath, rst1);


let arrResult = [];
for (let i = 0; i < rst1.length; i++) {
  const str = rst1[i]
  if (i % 16 !==0) {
    arrResult[arrResult.length - 1] += str
  } else {
    arrResult.push(str);
  }
}
arrResult = arrResult.map(item => `|${item}|`);
arrResult.unshift('|-|');
arrResult.unshift('|首字母列表|');

const arrRelatePath = IS_DEBUG ? './rst_first_latter_arr.md' : '../docs/03_中文首字母.md';
const arrExportPath = path.resolve(__dirname, arrRelatePath);
fs.writeFileSync(arrExportPath, arrResult.join('\n').toString());
