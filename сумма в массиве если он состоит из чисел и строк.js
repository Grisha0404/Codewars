//сумма в массиве если он состоит из чисел и строк
function sumMix(x){
    let sum = 0;
      for (let i=0; i<x.length; i++){
        sum += Number(x[i])
      }
      return sum
    }