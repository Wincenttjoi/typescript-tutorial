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

enum Role {
    ADMIN,
    READ_ONLY,
    AUTHOR
}

const person = {
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
}

console.log(person.age)

for (const hobby of person.hobbies) {
    console.log(hobby);
}