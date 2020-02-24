const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(typeof sampleActivity === "undefined" || 
     typeof sampleActivity !== "string" || 
     sampleActivity <= 0 || 
     !/^[\d\.]+$/.test(sampleActivity)|| 
     parseFloat(sampleActivity) === NaN 
     ){
    return false
  } 
  let constantReaction = Math.LN2.toFixed(3) / HALF_LIFE_PERIOD;
  let determineAge = Math.ceil(Math.log((MODERN_ACTIVITY / parseFloat(sampleActivity))) / constantReaction);
  if (determineAge < 0) {
    return false
  }
  return determineAge
};
