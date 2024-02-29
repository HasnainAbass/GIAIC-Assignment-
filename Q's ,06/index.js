// 6. Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each
// character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
//  solvwd=>
var fullNaeme = "\tHasnain\nAbass";
console.log(fullNaeme);
// without whitespace:
console.log(fullNaeme.trim());
// let personNameWithWhitespace: string = "\tHasnain\nAbass   ";
// console.log("Name with whitespace:", personNameWithWhitespace);
// let strippedName: string = personNameWithWhitespace.trim();
// console.log("Stripped name:", strippedName);
