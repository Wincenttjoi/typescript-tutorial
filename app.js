// function add(n1:number, n2:number, showResult:boolean, phrase:string) {
//     const result = n1 + n2;
//     if (showResult) {
//         console.log(phrase + result);
//     }
//     return result;
// }
// const number1 = 5;
// const number2 = 2.8;
// const printResult = true;
// const resultPhrase = 'Result is: ';
// add(number1, number2, printResult, resultPhrase);
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
var person = {
    //     name: string;
    //     age: number;
    //     hobbies: string[];
    //     role: [number, string];
    // } = {
    name: 'Wincent',
    age: 25,
    hobbies: ['Sports', 'Hiking'],
    // role: [2, 'author']
    role: Role.ADMIN
};
console.log(person.age);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}
