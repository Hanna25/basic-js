
module.exports = function repeater(str, options) {
    let arr = [];
    let separator = '+';
    if (options.separator) {
      separator = options.separator;
    }
    if (!options.additionRepeatTimes &&!options.addition && !options.additionSeparator) {
      for (let i = 0; i < options.repeatTimes; i++) {     
        arr.push(str)
        if (i < options.repeatTimes - 1) {        
          arr.push(separator)         
        }          
      }    
    }
    if (options.repeatTimes === undefined && options.additionRepeatTimes === undefined) {
      arr.push(str + options.addition)
    }
    if (!options.additionSeparator) {
      for (let i = 0; i < options.additionRepeatTimes; i++) {
        for (let j = 0; j < options.repeatTimes; j++) {
  
          if (options.addition) {            
            arr.push(str + options.addition)  
          } else {
          arr.push(str + "|")
          }  
          if (j < options.repeatTimes - 1) {
            arr.push(separator)
          }      
        }             
      }
    } else {
        for(let i = 0; i < options.repeatTimes; i++){
            if (str === null) {
              arr.push('null')
            }
            arr.push(str)
            for (let j = 0; j < options.additionRepeatTimes; j++) {
              if(options.addition === null) {
                arr.push('null')
              }
              arr.push(options.addition)
              if (j < options.additionRepeatTimes - 1) {
                arr.push(options.additionSeparator)
              }
            }
            if (i < options.repeatTimes - 1) {
              arr.push(options.separator)
            }
          }
        }
    return arr.join('')
};

  