//Округляет до 2 знаков после запятой
function converter (mpg) {
    //code to convert miles per imperial gallon to kilometers per liter
  return parseFloat((1.609344 / 4.54609188 * mpg).toFixed(2))
  }