// 
1
function rentalCarCost(d) {
2
  // Your solution here
3
  let m = 40;
4
  if (d === 1){
5
    return m;
6
  } else if (d === 2){
7
    return m * d;
8
  } else if (d >= 3 && d <= 6){
9
    return m * d - 20;
10
  } else if (d >= 7){
11
    return m * d - 50;
12
  }
13
}
 Outstandin