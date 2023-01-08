const fs = require('fs');
const path = require('path');

// read contents of the file
const filePath = path.resolve(__dirname, './04_pinyin-string.md');
// const filePath = path.resolve(__dirname, './bb.md');
const data = fs.readFileSync(filePath, 'UTF-8');

let arrResult = [];
for (let i = 0; i < data.length; i++) {
  const str = data[i]
  if (i % 16 !==0) {
    arrResult[arrResult.length - 1] += str
  } else {
    arrResult.push(str);
  }
}
// write content into file
const firstLatterArr = path.resolve(__dirname, './rst_first_latter_arr.md');
fs.writeFileSync(firstLatterArr, arrResult.join('\n').toString());
