// let str:string="Banana"
let str:string="hello world"
let result:string="";
for (const char of str) {
    if(!result.includes(char)){
        result+=char;
    }
}
console.log(result);
