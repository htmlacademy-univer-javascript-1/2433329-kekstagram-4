function checkStringLength (isString, stringLength) {
  return (isString.length) <= stringLength;
}

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

function checkMeeting(startTime, endTime, meetingStart, meetingDuration) {
  const startMinutes = convertToMinutes(startTime);
  const endMinutes = convertToMinutes(endTime);
  const meetingStartMinutes = convertToMinutes(meetingStart);
  const meetingEndMinutes = meetingStartMinutes + meetingDuration;

  return meetingStartMinutes >= startMinutes && meetingEndMinutes <= endMinutes;
}

function convertToMinutes(time) {
  const [hours, minutes] = time.split(':');
  const parsedHours = parseInt(hours,10);
  const parsedMinutes = parseInt(minutes,10);
  const totalMinutes = parsedHours * 60 + parsedMinutes;
  return totalMinutes;
}

export {checkMeeting};
export {checkStringLength};
export {checkPalindrome};

