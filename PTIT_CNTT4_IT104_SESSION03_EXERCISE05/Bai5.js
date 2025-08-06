var _a, _b, _c, _d;
var firstName = "john";
var lastName = "doe";
var fullName;
if (firstName[0] !== ((_a = firstName[0]) === null || _a === void 0 ? void 0 : _a.toUpperCase())) {
    firstName = ((_b = firstName[0]) === null || _b === void 0 ? void 0 : _b.toUpperCase()) + firstName.slice(1);
}
if (lastName[0] !== ((_c = lastName[0]) === null || _c === void 0 ? void 0 : _c.toUpperCase())) {
    lastName = ((_d = lastName[0]) === null || _d === void 0 ? void 0 : _d.toUpperCase()) + lastName.slice(1);
}
fullName = firstName +" "+ lastName;
console.log(fullName);
