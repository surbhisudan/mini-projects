let uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercase="abcdefghijklmnopqrstuvwxyz";
let string="surbhi"
// function inputName(string){
//     let bag="";
//     for(let i=0;i<string.length;i++){
//         if(string[i]==lowercase[i]){
//             bag+=uppercase[i]
//         }
//         return bag; 
//     } 

// }
// let result=inputName(string)
// console.log(result);
let bag="";
for(let i=0;i<string.length;i++){
    if(string[0]==string[i].toLowerCase()){
         bag+=uppercase[lowercase.indexOf(string[i])];
    }
    else {
        bag += string[i];
      }
}
console.log(bag)
