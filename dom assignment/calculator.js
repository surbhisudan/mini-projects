let num1=10;
let num2=5;
let str=""
switch (str) {
    case "+":
        var result=num1+num2;
        console.log(result)
        break;
        case "-":
         result=num1-num2;
        console.log(result)
        break;
        case "*":
         result=num1*num2;
        console.log(result)
        break;
        case "%":
        result=num1%num2;
        console.log(result)
        break;

    default:
        console.log("Invalid operator")
        break;
}