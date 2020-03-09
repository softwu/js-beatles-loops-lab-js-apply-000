// add solution here

function theBeatlesPlay(arrArtist, arrInst){
  var arr = []
  
  for(let i = 0; i < arrArtist.length; i++){
    arr.push(`${arrArtist[i]} plays ${arrInst[i]}`)
  }
  
  return arr;
}

function johnLennonFacts(arrFact){
  var arr = []
  
  while(arrFact.length){
    arr.push(arrFact.shift()+"!!!")
  }
  return arr;
}

function iLoveTheBeatles(num){
  var arr = []
  
  do{
    arr.push("I love the Beatles!")
    num++
  } while(num < 15)
  return arr;
}