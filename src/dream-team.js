module.exports = function createDreamTeam(members) {
   if(typeof members === "undefined" || members == null || members == []){
     return false
   }

   let capitalLetters = ""
   let arr = []
   for(let i = 0; i < members.length; i++ ){
      if (typeof members[i] == 'string'){
       let nameWithoutSpaces =  members[i].trim()
       let capitalLetters = nameWithoutSpaces[0].toUpperCase()
       arr.push(capitalLetters)
     }
  }
  let sortArr = arr.sort()
  return sortArr.join("")
};