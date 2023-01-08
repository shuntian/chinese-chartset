const fs = require('fs');
const path = require('path');
const { CHAR_MAP, IS_DEBUG, HAS_PREFIX } = require('../constants');

const getLetters = (allPinyin) => {
  const pinyinArr = allPinyin.split(',');
  let letters = pinyinArr.map(item => {
    const char = item.charAt(0).toUpperCase();
    if (CHAR_MAP[char]) return CHAR_MAP[char];
    return char;
  });
  letters = [...new Set(letters)];
  return letters.join('');
}

// read contents of the file
const filePath = path.resolve(__dirname, './chinese-pinyin-multi.txt');
const data = fs.readFileSync(filePath, 'UTF-8');

// split the contents by new line
const lines = data.split(/\r?\n/);

const result = lines.map(item => {
  if (!item) return null;
  const array = item.split(' ');
  const value = array[0];
  const unicode = value.charCodeAt(0);
  const letters = getLetters(array[1]);

  return {
    value: value,
    unicode: unicode,
    letters: letters
  };
});

const filterResult = result.filter(item => {
  if (!item) return false;
  return item.letters.length > 1;
});

filterResult.sort((a, b) => a.unicode - b.unicode);

const values = filterResult.reduce((result, current) => {
  const key = HAS_PREFIX ? `${current.value}-${current.unicode}` : current.unicode;
  result[key] = current.letters;
  return result;
}, {});

const relatePath =  IS_DEBUG ? './rst-multi-letters.json' : '../../docs/05_多音字unicode.json';
const rstFilePath = path.resolve(__dirname, relatePath);
fs.writeFileSync(rstFilePath, JSON.stringify(values, null, 2), 'utf-8');
