let str:string="hello world apple banana orange pumpkin cucumber"
let words:string[]=str.split(" ");
let longStr:string="";
function check(word:string):boolean{
    let arr:string[]=[];
    for (const char of word) {
        if(arr.includes(char)){
            return false;
        }
        arr.push(char);
    }
    return true;
}
for(let word of words){
    if(check(word)&&word.length>longStr.length){
        longStr=word;
    }
}
console.log(longStr);
