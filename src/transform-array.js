


module.exports = function transform(arr) {
    let obj = {
        '--discard-next':(arr, i) => {},
        '--discard-prev':(arr, i) => {},
        '--double-next': (arr, i) => {newArr.push(arr[i + 1])},
        '--double-prev': (arr, i) => {newArr.push(arr[i - 1])}
    }
    let newArr = []
    
  if (Array.isArray(arr)) {
    for (let i = 0; i < arr.length; i++){
      if(arr[i] === '--double-next' && i === arr.length - 1) {
        break;    
      }
      if(arr[i] === '--double-prev' && i === 0) {
        i++;    
      }
      if (obj.hasOwnProperty(arr[i])) {
        obj[arr[i]](arr, i)
          if (arr[i] === '--discard-next') {
            i++
          }
          if (arr[i] === '--discard-prev') {
            newArr.pop()
          }
      } else {
        newArr.push(arr[i])
      }      
    }
    return newArr
   } else {
     throw Error()
   }
  
};