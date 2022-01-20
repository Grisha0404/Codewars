//[1, 2, 3]), 6);
function grow(x){
    let mult = 1;
      for(let i = 0; i < x.length; i++){
        mult *= x[i]
      }
      return mult
    }