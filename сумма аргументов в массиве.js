// сумма аргументов в массиве
function countSheeps(arrayOfSheep) {
    // TODO May the force be with you
    let count = 0;
  for (let i = 0; i<arrayOfSheep.length; i++){
    if (arrayOfSheep[i]) count += 1;
  }
    return count;
  }