//(5, 25), [5, 10, 15, 20, 25]);(4, 27), [4, 8, 12, 16, 20, 24])
function findMultiples(integer, limit) {
    //your code here
    let mult = [];
    for (let i = 1; i<= limit; i++){
      if (integer *i <=limit){
        mult.push(integer *i);
      }
    }
    return mult;
  }
  