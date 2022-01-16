// добовляет недостоющие числа в массив 
function pipeFix(numbers){
    let firstNumber = numbers[0];
      let lastNumber = numbers[numbers.length - 1];
      let iteration = (lastNumber - firstNumber) + 1;
      let arr = [];
         for (let i = firstNumber; i <= lastNumber; i++){
      arr.push(i)
    }
      return arr;
    }