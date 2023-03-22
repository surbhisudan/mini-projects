//  economy=4000;
// midsize=10000;
// luxury=20000;
function rentalCost(type,day){
    let cost=0;
   if (type=="economy"){
    cost=4000*day;

   }
   else if (type=="midsize"){
    cost=10000*day;
   }
   else if (type=="luxury"){
    cost=20000*day;
   }
//   console.log(cost)
return cost;
}

console.log(rentalCost("midsize" ,5));
console.log(rentalCost("economy",3));
console.log(rentalCost("luxury",2));

