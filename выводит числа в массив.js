// n = 5 == [5,4,3,2,1]
const reverseSeq = n => {
    let arr = [];
    for (let i = n; i > 0; i--){
     arr.push(i);
  }
  return arr;
  }