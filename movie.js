function movie(card, ticket, perc) {
    let
   sum = card,
   count = 0;

 while (Math.ceil(sum) >= ticket * count) {
   count++;
   sum += ticket * Math.pow(perc, count);
 }

 return count;
}