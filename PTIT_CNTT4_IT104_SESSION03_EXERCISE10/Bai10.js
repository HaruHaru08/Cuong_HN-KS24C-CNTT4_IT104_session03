var str = "hello world apple banana orange pumpkin cucumber";
var words = str.split(" ");
var longStr = "";
function check(word) {
    var arr = [];
    for (var _i = 0, word_1 = word; _i < word_1.length; _i++) {
        var char = word_1[_i];
        if (arr.includes(char)) {
            return false;
        }
        arr.push(char);
    }
    return true;
}
for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
    var word = words_1[_i];
    if (check(word) && word.length > longStr.length) {
        longStr = word;
    }
}
console.log(longStr);
