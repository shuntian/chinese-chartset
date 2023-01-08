const IS_DEBUG = false;
const HAS_PREFIX = false;
const a = ['ā', 'á', 'ǎ', 'à', 'ō', 'ó', 'ǒ', 'ò', 'ê', 'ê̄', 'ế', 'ê̌', 'ề', 'ē', 'é', 'ě', 'è', 'ī', 'í', 'ǐ', 'ì', 'ū', 'ú', 'ǔ', 'ù', 'ü', 'ǖ', 'ǘ', 'ǚ', 'ǜ', 'm̄', 'ḿ', 'm̀', 'ń', 'ň', 'ǹ', 'ẑ', 'ĉ', 'ŝ', 'ŋ'];
const b = ['Ā', 'Á', 'Ǎ', 'À', 'Ō', 'Ó', 'Ǒ', 'Ò', 'Ê', 'Ê̄', 'Ế', 'Ê̌', 'Ề', 'Ē', 'É', 'Ě', 'È', 'Ī', 'Í', 'Ǐ', 'Ì', 'Ū', 'Ú', 'Ǔ', 'Ù', 'Ü', 'Ǖ', 'Ǘ', 'Ǚ', 'Ǜ', 'M̄', 'Ḿ', 'M̀', 'Ń', 'Ň', 'Ǹ', 'Ẑ', 'Ĉ', 'Ŝ', 'Ŋ'];

const CHAR_MAP = {
  'Ā': 'A',
  'Á': 'A',
  'Ǎ': 'A',
  'À': 'A',
  'Ō': 'O',
  'Ó': 'O',
  'Ǒ': 'O',
  'Ò': 'O',
  'Ê': 'E',
  'Ê̄': 'E',
  'Ế': 'E',
  'Ê̌': 'E',
  'Ề': 'E',
  'Ē': 'E',
  'É': 'E',
  'Ě': 'E',
  'È': 'E',
  'Ī': 'I',
  'Í': 'I',
  'Ǐ': 'I',
  'Ì': 'I',
  'Ū': 'U',
  'Ú': 'U',
  'Ǔ': 'U',
  'Ù': 'U',
  'Ü': 'U',
  'Ǖ': 'U',
  'Ǘ': 'U',
  'Ǚ': 'U',
  'Ǜ': 'U'
};

module.exports = { CHAR_MAP, IS_DEBUG };