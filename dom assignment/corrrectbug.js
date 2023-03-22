let arr=[4,8,6,10,15]
function correctBug(array){
    let newarr=[];
    for(let i=0;i<array.length;i++){
       newarr.push(array[i]*2);
       
    }
    return newarr
}
let result=correctBug(arr);
console.log(result)