function check(value) {
    var num = Number(value);
    return isNaN(num) ? null : num;
}
function add(num1, num2) {
    var firstNum = check(num1);
    var secondNum = check(num2);
    if (firstNum === null || secondNum === null) {
        return "Tham so khong hop le";
    }
    return firstNum + secondNum;
}
function minus(num1, num2) {
    var firstNum = check(num1);
    var secondNum = check(num2);
    if (firstNum === null || secondNum === null) {
        return "Tham so khong hop le";
    }
    return firstNum - secondNum;
}
function multiplication(num1, num2) {
    var firstNum = check(num1);
    var secondNum = check(num2);
    if (firstNum === null || secondNum === null) {
        return "Tham so khong hop le";
    }
    return firstNum * secondNum;
}
function division(num1, num2) {
    var firstNum = check(num1);
    var secondNum = check(num2);
    if (firstNum === null || secondNum === null) {
        return "Tham so khong hop le";
    }
    if (secondNum === 0) {
        return "Khong the chia cho 0";
    }
    return firstNum / secondNum;
}
console.log(add(2, "3"));
console.log(minus(5, 6));
console.log(multiplication(8, 9));
console.log(division(12, "6"));