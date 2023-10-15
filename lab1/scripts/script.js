
var lastBoatRabbits = function(totalRabbits) {
    return totalRabbits % 6;
  };

const value = (totalRab)=> totalRab % 6
  function foo(totalRab)
{
    let rab ='';
    rab = totalRab>10?"Кроликов больше 10":"Кроликов меньше 10";
    rab += ", а всего " + totalRab
    console.log(rab)

}
// foo(20)
// foo(2)



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
  console.log(extractDigits('2023 год'));            // 2023
  console.log(extractDigits('1 каштан, 0.5 банана')); // 105
  console.log(extractDigits('просто строка'));           // NaN
  




// console.log(document.querySelector('.header__link_contacts'));

// const button_contacts = document.querySelector('.header__link_contacts');

// button_contacts.addEventListener('click', (evt)=>
//   console.log('12344'));





// const thumbnails = document.querySelector('.slides img');
// const main_photo = document.querySelector('.main_photo');

// for(let i = 0; i < thumbnails.length; i++){
//     thumbnails[i].addEventListener('click',()=>main_photo.src=thumbnails[i].src )
// }


