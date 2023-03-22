let cart=["apple","mango","milk","oil","banana","apple","oil"]
let obj={};
for(let i=0;i<cart.length;i++){
    if(obj[cart[i]]==undefined){
        obj[cart[i]]=1
    }
    else{
        obj[cart[i]]++
    }
}
let newcart="";
for(key in obj){
    if(obj[key]>1){
        obj[key]=1
       newcart+=key+" "
    }
    else{
        newcart+=key+" "
    }
}
console.log(newcart)