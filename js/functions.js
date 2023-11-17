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

function checkMeeting(startTime, endTime, meetingStart, meetingDuration) {
  const startMinutes = convertToMinutes(startTime);
  const endMinutes = convertToMinutes(endTime);
  const meetingStartMinutes = convertToMinutes(meetingStart);
  const meetingEndMinutes = meetingStartMinutes + meetingDuration;
  if (meetingStartMinutes >= startMinutes && meetingEndMinutes <= endMinutes) {
    return true;
  } else {
    return false;
  }
}

function convertToMinutes(time) {
  const [hours, minutes] = time.split(':');
  return parseInt(hours) * 60 + parseInt(minutes);
}

checkMeeting('08:00', '17:30', '14:00', 90);
