function bill(dish1,dish2,dish3,numofpeople){
    let finalbill = dish1 * numofpeople+dish2 * numofpeople+dish3 * numofpeople;
    let foreachman = finalbill/numofpeople;
    return{
        totalbill:finalbill,
        foreachman:foreachman

    }
}
console.log(bill(100,150,180,5))