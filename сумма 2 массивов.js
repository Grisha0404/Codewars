// сумма 2 массивов
function arrayPlusArray(arr1, arr2) {
    const arr = arr1.concat(arr2);
    let total = 0;
    for(let i = 0; i < arr.length; i++){
      total += arr[i];
    }
    return total;
  }