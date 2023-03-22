
let numberGenretor= ()=>{
    let arr="1234567890";
    let bag=0;
    for(let i=0;i<1;i++){
        bag+=(Math.floor(Math.random(arr[i])*101))
    }
    return bag;
}
console.log(numberGenretor())
