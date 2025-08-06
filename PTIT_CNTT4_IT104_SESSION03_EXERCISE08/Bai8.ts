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
add(2,"3");
minus(5,6);
multiplication(8,9);
division(12,"6")