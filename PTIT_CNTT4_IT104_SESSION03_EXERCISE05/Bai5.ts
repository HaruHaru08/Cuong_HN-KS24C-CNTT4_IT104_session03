let firstName: string="john";
let lastName: string="doe";
let fullName: string;
if(firstName[0]!==firstName[0]?.toUpperCase()){
    firstName=firstName[0]?.toUpperCase()+firstName.slice(1);
}
if(lastName[0]!==lastName[0]?.toUpperCase()){
    lastName=lastName[0]?.toUpperCase()+lastName.slice(1);
}
fullName= firstName+lastName;
console.log(fullName);
