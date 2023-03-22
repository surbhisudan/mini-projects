let array=[2,3,4,5,6,7,8,9,15,12,18,21];
let bag=[];
for(let i=0;i<array.length;i++){
    if(array[i]%3==0 && array[i]%2==1){
        bag.push(array[i]);
        continue;
    }
  
}
console.log(bag)