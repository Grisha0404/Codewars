//
function uefaEuro2016(teams, scores){
    // your code...
    if(scores[0]-scores[1] > 0){
      return "At match " + teams[0] + " - " +teams[1]+", "+teams[0]+" won!"
    }else if(scores[0]-scores[1] < 0){
      return "At match " + teams[0] + " - " +teams[1]+", "+teams[1]+" won!"
    }else{
      return "At match " + teams[0] + " - " +teams[1]+", teams played draw."
    }
  }