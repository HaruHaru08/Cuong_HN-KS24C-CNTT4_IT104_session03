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
function power(base, exponent) {
    var firstNum = check(base);
    var secondNum = check(exponent);
    if (firstNum === null || secondNum === null) {
        return "Tham so khong hop le";
    }
    return Math.pow(firstNum, secondNum);
}
function sqrt(base, root) {
    var firstNum = check(base);
    var secondNum = check(root);
    if (firstNum === null || secondNum === null) {
        return "Tham so khong hop le";
    }
    if (root === 0) {
        return "Khong the lay can bac khong";
    }
    return Math.pow(firstNum, 1 / secondNum);
}
function factorial(n) {
    var num = check(n);
    if (num === null) {
        return "Tham so khong hop le";
    }
    if (num < 0 || Number.isInteger(num)) {
        return "Tham so khong hop le";
    }
    var result = 1;
    for (var i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}
function handle(operator) {
    var _a, _b;
    var num1 = (_a = document.getElementById("firstNum")) === null || _a === void 0 ? void 0 : _a.value;
    var num2 = (_b = document.getElementById("secondNum")) === null || _b === void 0 ? void 0 : _b.value;
    var result;
    switch (operator) {
        case "+":
            result = add(num1, num2);
            break;
        case "-":
            result = minus(num1, num2);
            break;
        case "*":
            result = multiplication(num1, num2);
            break;
        case "/":
            result = division(num1, num2);
            break;
        case "^":
            result = power(num1, num2);
            break;
        case "✓":
            result = sqrt(num1, num2);
            break;
        case "!":
            result = factorial(num1);
            break;
        default:
            result = "Phep tinh khong hop le";
            break;
    }
    document.getElementById("result").innerHTML = String(result);
}
