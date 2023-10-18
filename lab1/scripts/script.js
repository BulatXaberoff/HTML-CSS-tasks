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
function change_phrase(original_str, min_len, add_str) {
  if (original_str.length >= min_len) {
    return original_str;
  } else {
    


    const недостающаяДлина = min_len - original_str.length;
    const дополнение = add_str.slice(0, недостающаяДлина);
    console.log(дополнение);
    return дополнение + original_str;
  }
}

// Примеры использования:
// console.log(change_phrase('1', 2, '0'));      // '01'
// console.log(change_phrase('1', 4, '0'));      // '0001'
// console.log(change_phrase('q', 4, 'werty'));  // 'werq'
// console.log(change_phrase('q', 4, 'we'));     // 'wweq'
// console.log(change_phrase('qwerty', 4, '0')); // 'qwerty'

function f(input_str, k) {
  new_phrase = input_str[0];
  str = input_str.slice(0,k+1);
  for(let i = 0; i < str.length; i++){
    new_phrase+=str[i];
  }
  return new_phrase;
}

// Примеры использования:
console.log(f("abcd", 3)); // "aabcd"
console.log(f("abcd", 2)); // "aabc"
console.log(f("abcd", 1)); // "aab"

