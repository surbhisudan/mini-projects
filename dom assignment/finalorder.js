let arr=[
   { unitprice:50,quantity:5},
   { unitprice:100,quantity:7},
   { unitprice:10,quantity:2},
   { unitprice:30,quantity:8}
   
]
let Price=(array)=>{
     let finalprice=0;
   for(let i=0;i<array.length;i++){
       finalprice+=arr[i].unitprice*arr[i].quantity
   }
   console.log(finalprice)
}
Price(arr)