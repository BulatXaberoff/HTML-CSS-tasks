
//1
function Palindrom(input_str){
    let correct_str = input_str.replace(" ","").toLowerCase();
    let len = correct_str.length;
    for (let i = 0; i < len/2; ++i) {
        if (correct_str[i] != correct_str[len-i-1])
            return false
    }
    return true;
}
// console.log(Palindrom("Дqugv"));
// console.log(Palindrom("Бараб"));
// console.log(Palindrom("ИскАть таКси"));
// console.log(Palindrom("Крот"));

//2
function extractDigits(input_str) {
    let digits = input_str.match(/\d/g);
    if (digits === null) {
      return NaN;
    }
    return parseInt(digits.join(''));
  }
// console.log(extractDigits('2023 год'));            // 2023
// console.log(extractDigits('1 каштан, 0.5 банана')); // 105
// console.log(extractDigits('просто строка'));           // NaN

//3
function change_phrase(str, minLength, padding) {
  if (str.length >= minLength) {
    return str;
  }

  let paddingCount = Math.ceil((minLength - str.length) / padding.length);

  let paddedString = padding.repeat(paddingCount) + str;

  if (paddedString.length > minLength) {
    paddedString = paddedString.slice(paddedString.length - minLength);
  }

  return paddedString;
}

// Примеры использования:
console.log(change_phrase('1', 2, '0'));      // '01'
console.log(change_phrase('1', 4, '0'));      // '0001'
console.log(change_phrase('q', 4, 'werty'));  // 'werq'
console.log(change_phrase('q', 4, 'we'));     // 'wweq'
console.log(change_phrase('qwerty', 4, '0')); // 'qwerty'

// 4 задача
function checkStringLength(str, maxLength) {
	return str.length <= maxLength;
}
// console.log(checkStringLength('проверяемая', 20)); // true
// console.log(checkStringLength('проверяемая строка', 18)); // true
// console.log(checkStringLength('проверяемая строка', 10)); // false