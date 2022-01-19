//
function billboard(name, price = 30){
    let sum = name.length;
      let s = 0;
      for (let i = 1; i <= sum; i++){
        s += price;
      }
    return s;
      }