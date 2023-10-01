/* Функция для проверки длины строки. Она принимает строку,
которую нужно проверить, и максимальную длину и возвращает true,
если строка меньше или равна указанной длине, и false, если строка длиннее.
*/

function checkStringLength (isString, stringLength) {
  return (isString.length) <= stringLength
}


console.log(checkStringLength('проверяемая строка', 20));
console.log(checkStringLength('проверяемая строка', 18));
console.log(checkStringLength('проверяемая строка', 10));


/*Функция для проверки, является ли строка палиндромом. Палиндром — это слово или фраза,
которые одинаково читаются и слева направо и справа налево. Например:
*/

function checkPalindrome (isString) {
  let upString = isString.toUpperCase();
  let isLenth = upString.length;
  let strMiddle = Math.floor(isLenth/2);

  for (let i = 0; i <= strMiddle; i++) {
    if (upString[i] !== upString[isLenth - 1 - i] ) {
      return false;
    }
  }

  return true
}

console.log(checkPalindrome('топот'));
console.log(checkPalindrome('ДовОд'));
console.log(checkPalindrome('Кекс'));

