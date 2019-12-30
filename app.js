function tester() {
  const fullDate = new Date(); // newDate is an object that represents a date and time.
  const mins = fullDate.getMinutes(); // getMinutes, gets the minutes out of new Date.
  const hours = fullDate.getHours(); // getHours, gets the hours out of new Date.
  const secs = fullDate.getSeconds(); //getSeconds, gets the seconds out of new Date

  document.querySelector('#hour').innerHTML = hours;
  document.querySelector('#minute').innerHTML = mins;
  document.querySelector('#second').innerHTML = secs;
}

setInterval(tester, 1000); // Makes the function update every second
