function tester() {
  let fullDate = new Date(); // newDate is an object that represents a date and time.
  let mins = fullDate.getMinutes(); // getMinutes, gets the minutes out of new Date.
  let hours = fullDate.getHours(); // getHours, gets the hours out of new Date.
  let secs = fullDate.getSeconds(); //getSeconds, gets the seconds out of new Date

  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (mins < 10) {
    mins = `0${mins}`;
  }
  if (secs < 10) {
    secs = `0${secs}`;
  }

  document.querySelector('#hour').innerHTML = hours;
  document.querySelector('#minute').innerHTML = `:${mins}`;
  document.querySelector('#second').innerHTML = `:${secs}`;
}

setInterval(tester, 1000); // Makes the function update every second
