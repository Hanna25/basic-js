module.exports = function getSeason(date) {
  if(typeof date == 'undefined'){
    return 'Unable to determine the time of year!'
  }else if(Object.prototype.toString.call(date) !== '[object Date]'){
    throw Error()
  }
  if (0 === date.getMonth() || date.getMonth() === 1 || date.getMonth() === 11) {
    return "winter"
  } else if( 2 <= date.getMonth() && date.getMonth() < 5) {
    return "spring"
  } else if (5 <= date.getMonth() && date.getMonth() < 8) {
    return "summer"
  } else if (8 <= date.getMonth() && date.getMonth() < 11) {
    return "autumn"
  }
};
