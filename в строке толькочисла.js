//true если в строке только числа
function isDigit(s) {
    if (typeof s != "string") return false // we only process strings!
     // could also coerce to string: str = ""+str
     return !isNaN(s) && !isNaN(parseFloat(s))
   }