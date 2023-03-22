let array=[75,36,95,80,90];
function highestMarks(arr){
    let max=0
    for(let i=0;i<arr.length;i++){
         if(arr[i]>max){
            max=arr[i]
         }
    }
    return max;
}
let result=highestMarks(array);
console.log(result)