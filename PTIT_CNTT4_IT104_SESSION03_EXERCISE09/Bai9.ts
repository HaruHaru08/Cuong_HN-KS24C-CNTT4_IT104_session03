function check(value: number | string):number | null{
    let num=Number(value);
    return isNaN(num)?null:num;
}
function add(num1:number|string,num2:number|string):number | string{
    const firstNum=check(num1);
    const secondNum=check(num2);
    if(firstNum===null || secondNum===null){
        return "Tham so khong hop le"
    }
    return firstNum+secondNum;
}
function minus(num1:number|string,num2:number|string):number | string{
    const firstNum=check(num1);
    const secondNum=check(num2);
    if(firstNum===null || secondNum===null){
        return "Tham so khong hop le"
    }
    return firstNum-secondNum;
}
function multiplication(num1:number|string,num2:number|string):number | string{
    const firstNum=check(num1);
    const secondNum=check(num2);
    if(firstNum===null || secondNum===null){
        return "Tham so khong hop le"
    }
    return firstNum*secondNum;
}
function division(num1:number|string,num2:number|string):number | string{
    const firstNum=check(num1);
    const secondNum=check(num2);
    if(firstNum===null || secondNum===null){
        return "Tham so khong hop le"
    }
    if(secondNum===0){
        return "Khong the chia cho 0"
    }
    return firstNum/secondNum;
}
function power(base:number|string,exponent:number|string):number |string {
    const firstNum=check(base);
    const secondNum=check(exponent);
    if(firstNum===null || secondNum===null){
        return "Tham so khong hop le";
    }
    return Math.pow(firstNum,secondNum);
}
function sqrt(base:number|string,root:number|string):number|string{
    const firstNum=check(base);
    const secondNum=check(root);
    if(firstNum===null || secondNum===null){
        return "Tham so khong hop le";
    }
    if(root===0){
        return "Khong the lay can bac khong"
    }
    return Math.pow(firstNum,1/secondNum);
}
function factorial(n:number|string):number|string{
    const num=check(n);
    if(num===null){
        return "Tham so khong hop le"
    }
    if(num<0||Number.isInteger(num)){
        return "Tham so khong hop le"
    }
    let result=1;
    for (let i = 2; i <= num; i++) {
        result*=i
    }
    return result
}
function handle(operator:string):void{
    const num1=(document.getElementById("firstNum") as HTMLInputElement)?.value;
    const num2=(document.getElementById("secondNum") as HTMLInputElement)?.value;
    let result:string|number;
    switch (operator) {
        case "+":
            result=add(num1,num2);
            break;
        case "-":
            result=minus(num1,num2);
            break;
        case "*":
            result=multiplication(num1,num2);
            break;
        case "/":
            result=division(num1,num2)
            break;
        case "^":
            result=power(num1,num2);
            break;
        case "✓":
            result=sqrt(num1,num2);
            break;
        case "!":
            result=factorial(num1);
            break;
        default:
            result="Phep tinh khong hop le"
            break;
    }
    document.getElementById("result")!.innerHTML=String(result);
}