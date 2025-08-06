// let str:string="Banana"
var str = "hello world";
var result = "";
for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
    var char = str_1[_i];
    if (!result.includes(char)) {
        result += char;
    }
}
console.log(result);
