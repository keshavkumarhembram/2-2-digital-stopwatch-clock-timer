const hoursDisplay = document.getElementById('hours');
const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const suffix = document.getElementById('suffix');

setInterval(() => {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  suffix.innerText = timeSuffix(hours);
  
  hours = twelveHour(hours);
  
  hours = leadingZeros(hours);
  minutes = leadingZeros(minutes);
  seconds = leadingZeros(seconds);

  hoursDisplay.innerText = hours;
  minutesDisplay.innerText = minutes;
  secondsDisplay.innerText = seconds;
}, 1000);

function leadingZeros(num) {
  if (num < 10) {
    return '0' + num;
  }
  return num;
}

function timeSuffix (hours) {
    if (hours < 12) {
        return 'AM'
    }
    return 'PM';
}

function twelveHour (hours) {
    if (hours % 12 === 0) {
        return 12;
    }
    return hours % 12;
}


