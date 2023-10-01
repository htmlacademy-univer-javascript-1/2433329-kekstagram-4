function checkStringLength (isString, stringLength) {
  return (isString.length) <= stringLength;
}


checkStringLength('проверяемая строка', 20);
checkStringLength('проверяемая строка', 18);
checkStringLength('проверяемая строка', 10);



function checkPalindrome (isString) {
  const upString = isString.toUpperCase();
  const isLenth = upString.length;
  const strMiddle = Math.floor(isLenth/2);

  for (let i = 0; i <= strMiddle; i++) {
    if (upString[i] !== upString[isLenth - 1 - i] ) {
      return false;
    }
  }

  return true;
}

checkPalindrome('топот');
checkPalindrome('ДовОд');
checkPalindrome('Кекс');

