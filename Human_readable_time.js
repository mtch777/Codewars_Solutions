function humanReadable (seconds) {
    let numHours = Math.floor(seconds / 3600);
    seconds -= 3600 * numHours;
    numHours = numHours.toString();
    if (numHours.length ==1){
      numHours = '0' + numHours
    };
    
    let numMinutes = Math.floor(seconds / 60).toString();
    seconds -= 60 * numMinutes;
    numMinutes = numMinutes.toString();
    if (numMinutes.length == 1){
      numMinutes = '0'+ numMinutes
    };
    seconds = seconds.toString();
    if (seconds.length == 1){
      seconds = '0'+seconds
    };
    return `${numHours}:${numMinutes}:${seconds}`;
  }